import { Link, Navigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { useStore } from "@/lib/store";
import { ProgressBar } from "@/components/ui-bits";
import { ArrowLeft, Check, Play, CheckCircle2 } from "lucide-react";

export default function CoursePlayer() {
  const { id = "" } = useParams();
  const { courses, purchases, currentUser, toggleLesson } = useStore();
  const course = courses.find((c) => c.id === id);
  const purchase = purchases.find((p) => p.courseId === id && p.userId === currentUser?.id);

  const [activeLesson, setActiveLesson] = useState(0);

  const next = useMemo(() => {
    if (!course || !purchase) return null;
    return course.lessons.find((l) => !purchase.completedLessons.includes(l.id)) ?? null;
  }, [course, purchase]);

  if (!course) return <div>Curso no encontrado</div>;
  if (!purchase) return <Navigate to={`/app/checkout/${id}`} replace />;

  const lesson = course.lessons[activeLesson];

  return (
    <div className="space-y-6">
      <Link
        to="/app/my-courses"
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Mis cursos
      </Link>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* COLUMNA PRINCIPAL */}
        <div className="lg:col-span-2 space-y-4">
          {/* VIDEO */}
          <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
            <iframe
              key={lesson.id}
              src={`https://www.youtube.com/embed/${lesson.youtubeId}`}
              title={lesson.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* INFO CURSO */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{course.title}</h1>
              <p className="text-slate-600 text-sm mt-1">Por {course.author}</p>
              <p className="mt-4 text-sm text-slate-700 leading-relaxed">{course.description}</p>
            </div>

            {/* PROGRESO */}
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-700">Tu progreso</span>
                <span className="text-slate-900 font-semibold">{purchase.progress}%</span>
              </div>
              <ProgressBar value={purchase.progress} />
            </div>

            {/* LECCIÓN ACTUAL */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-3">
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Lección actual</div>
                <div className="font-semibold text-slate-900">{lesson.title}</div>
              </div>
              <button
                onClick={() => toggleLesson(currentUser!.id, course.id, lesson.id)}
                className={`px-5 py-2.5 rounded-2xl font-medium text-sm inline-flex items-center gap-2 transition-all ${purchase.completedLessons.includes(lesson.id)
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                    : "bg-gradient-to-r from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] hover:from-[#facc15]/40 hover:to-[#2563eb]/40 shadow-sm hover:shadow-md border border-[#2563eb]/20"
                  }`}
              >
                {purchase.completedLessons.includes(lesson.id) ? (
                  <><CheckCircle2 className="w-4 h-4" /> Completada</>
                ) : (
                  <><Check className="w-4 h-4" /> Marcar completada</>
                )}
              </button>
            </div>

            {/* SIGUIENTE LECCIÓN */}
            {next && next.id !== lesson.id && (
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-[#facc15]/10 to-[#2563eb]/10 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Siguiente lección</div>
                  <div className="font-semibold text-slate-900">{next.title}</div>
                </div>
                <button
                  onClick={() => setActiveLesson(course.lessons.findIndex((l) => l.id === next.id))}
                  className="px-4 py-2 rounded-2xl bg-gradient-to-r from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] text-sm font-medium inline-flex items-center gap-2 hover:from-[#facc15]/40 hover:to-[#2563eb]/40 transition-all shadow-sm hover:shadow-md border border-[#2563eb]/20"
                >
                  <Play className="w-4 h-4" /> Ir
                </button>
              </div>
            )}
          </div>
        </div>

        {/* SIDEBAR - LISTA DE CLASES */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 h-fit lg:sticky lg:top-20 shadow-sm">
          <h2 className="font-semibold text-slate-900 mb-3 px-2">Lista de clases</h2>
          <div className="space-y-1">
            {course.lessons.map((l, i) => {
              const done = purchase.completedLessons.includes(l.id);
              const active = i === activeLesson;
              return (
                <button
                  key={l.id}
                  onClick={() => setActiveLesson(i)}
                  className={`w-full text-left p-3 rounded-2xl flex items-center gap-3 transition-all ${active
                      ? "bg-gradient-to-r from-[#facc15]/15 to-[#2563eb]/15 text-[#2563eb] border border-[#2563eb]/20 shadow-sm"
                      : "hover:bg-slate-50 hover:border hover:border-slate-200"
                    }`}
                >
                  <div className={`w-8 h-8 rounded-2xl grid place-items-center text-xs font-semibold flex-shrink-0 ${done
                      ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                    }`}>
                    {done ? <Check className="w-4 h-4" /> : i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-medium truncate ${active ? "text-[#2563eb]" : "text-slate-900"
                      }`}>
                      {l.title}
                    </div>
                    <div className="text-xs text-slate-500">{l.duration}</div>
                  </div>
                  {active && (
                    <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[#facc15] to-[#2563eb]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}