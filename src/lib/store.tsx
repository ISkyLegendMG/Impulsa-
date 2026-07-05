import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  initialCourses,
  initialPurchases,
  initialUsers,
  type Course,
  type Purchase,
  type User,
} from "./mock-data";

export type { Course, Purchase, User } from "./mock-data";

interface AppState {
  users: User[];
  courses: Course[];
  purchases: Purchase[];
  currentUser: User | null;
  login: (email: string, password: string) => User | null;
  logout: () => void;
  register: (data: { name: string; email: string; password: string }) => User | null;
  updateProfile: (id: string, patch: Partial<User>) => void;
  addCourse: (c: Omit<Course, "id" | "lessons"> & { lessons?: Course["lessons"] }) => void;
  updateCourse: (id: string, patch: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  purchase: (userId: string, courseId: string) => void;
  toggleLesson: (userId: string, courseId: string, lessonId: string) => void;
}

const Ctx = createContext<AppState | null>(null);

const KEY = "lcp:state:v4";
const SESSION = "lcp:session:v4";

interface Persisted {
  users: User[];
  courses: Course[];
  purchases: Purchase[];
}

function load(): Persisted {
  if (typeof window === "undefined") {
    return { users: initialUsers, courses: initialCourses, purchases: initialPurchases };
  }
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as Persisted;
  } catch { }
  return { users: initialUsers, courses: initialCourses, purchases: initialPurchases };
}

function loadSession(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(SESSION);
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Persisted>(() => load());
  const [currentId, setCurrentId] = useState<string | null>(() => loadSession());

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (currentId) localStorage.setItem(SESSION, currentId);
    else localStorage.removeItem(SESSION);
  }, [currentId]);

  const currentUser = state.users.find((u) => u.id === currentId) ?? null;

  const value: AppState = {
    ...state,
    currentUser,
    login: (email, password) => {
      const u = state.users.find((x) => x.email.toLowerCase() === email.toLowerCase() && x.password === password);
      if (u) {
        setCurrentId(u.id);
        setState((s) => ({
          ...s,
          users: s.users.map((x) => (x.id === u.id ? { ...x, lastAccess: new Date().toISOString().slice(0, 10) } : x)),
        }));
        return u;
      }
      return null;
    },
    logout: () => setCurrentId(null),
    register: ({ name, email, password }) => {
      if (state.users.some((u) => u.email.toLowerCase() === email.toLowerCase())) return null;
      const u: User = {
        id: `u${Date.now()}`,
        name,
        email,
        password,
        role: "student",
        registeredAt: new Date().toISOString().slice(0, 10),
        lastAccess: new Date().toISOString().slice(0, 10),
        status: "active",
      };
      setState((s) => ({ ...s, users: [...s.users, u] }));
      setCurrentId(u.id);
      return u;
    },
    updateProfile: (id, patch) =>
      setState((s) => ({ ...s, users: s.users.map((u) => (u.id === id ? { ...u, ...patch } : u)) })),
    addCourse: (c) =>
      setState((s) => ({
        ...s,
        courses: [
          ...s.courses,
          {
            ...c,
            id: `c${Date.now()}`,
            lessons:
              c.lessons ??
              [1, 2, 3, 4].map((n) => ({
                id: `c${Date.now()}-l${n}`,
                title: `Lección ${n}`,
                duration: "10:00",
                youtubeId: "dQw4w9WgXcQ",
              })),
          } as Course,
        ],
      })),
    updateCourse: (id, patch) =>
      setState((s) => ({ ...s, courses: s.courses.map((c) => (c.id === id ? { ...c, ...patch } : c)) })),
    deleteCourse: (id) =>
      setState((s) => ({
        ...s,
        courses: s.courses.filter((c) => c.id !== id),
        purchases: s.purchases.filter((p) => p.courseId !== id),
      })),
    purchase: (userId, courseId) => {
      const course = state.courses.find((c) => c.id === courseId);
      if (!course) return;
      if (state.purchases.some((p) => p.userId === userId && p.courseId === courseId)) return;
      const p: Purchase = {
        id: `p${Date.now()}`,
        userId,
        courseId,
        date: new Date().toISOString().slice(0, 10),
        amount: course.price,
        progress: 0,
        completedLessons: [],
      };
      setState((s) => ({ ...s, purchases: [...s.purchases, p] }));
    },
    toggleLesson: (userId, courseId, lessonId) => {
      setState((s) => {
        const course = s.courses.find((c) => c.id === courseId);
        if (!course) return s;
        return {
          ...s,
          purchases: s.purchases.map((p) => {
            if (p.userId !== userId || p.courseId !== courseId) return p;
            const has = p.completedLessons.includes(lessonId);
            const completed = has
              ? p.completedLessons.filter((x) => x !== lessonId)
              : [...p.completedLessons, lessonId];
            const progress = Math.round((completed.length / course.lessons.length) * 100);
            return { ...p, completedLessons: completed, progress };
          }),
        };
      });
    },
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useStore must be used inside StoreProvider");
  return v;
}
