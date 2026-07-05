import { Link } from "react-router-dom";
import { useStore } from "@/lib/store";
import { StatCard, ProgressBar, Badge } from "@/components/ui-bits";
import { Users, BookOpen, ShoppingCart, TrendingUp, Award, Clock, PlayCircle } from "lucide-react";

export default function Dashboard() {
  const { currentUser } = useStore();
  if (currentUser?.role === "admin") return <AdminDashboard />;
  return <StudentDashboard />;
}

function AdminDashboard() {
  const { users, courses, purchases } = useStore();
  const students = users.filter((u) => u.role === "student");
  const totalRevenue = purchases.reduce((s, p) => s + p.amount, 0);
  const avgProgress = purchases.length
    ? Math.round(purchases.reduce((s, p) => s + p.progress, 0) / purchases.length)
    : 0;

  const salesByCourse = courses
    .map((c) => ({ course: c, sales: purchases.filter((p) => p.courseId === c.id).length }))
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 5);

  const recentStudents = [...students]
    .sort((a, b) => b.registeredAt.localeCompare(a.registeredAt))
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-600 text-sm mt-1">Resumen general de la plataforma</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Estudiantes" value={students.length} icon={<Users className="w-5 h-5" />} />
        <StatCard label="Cursos publicados" value={courses.filter((c) => c.published).length} icon={<BookOpen className="w-5 h-5" />} />
        <StatCard label="Compras" value={purchases.length} hint={`S/${totalRevenue} en ingresos`} icon={<ShoppingCart className="w-5 h-5" />} />
        <StatCard label="Avance promedio" value={`${avgProgress}%`} icon={<TrendingUp className="w-5 h-5" />} />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900 mb-4">Cursos más vendidos</h2>
          <div className="space-y-3">
            {salesByCourse.map(({ course, sales }) => (
              <div key={course.id} className="flex items-center gap-3">
                <img src={course.thumbnail} alt="" className="w-12 h-12 rounded-2xl object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-slate-900 truncate">{course.title}</div>
                  <div className="text-xs text-slate-500">{course.author}</div>
                </div>
                <Badge variant="default">{sales} ventas</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
          <h2 className="font-semibold text-slate-900 mb-4">Nuevos estudiantes</h2>
          <div className="space-y-3">
            {recentStudents.map((s) => (
              <Link key={s.id} to={`/app/students/${s.id}`} className="flex items-center gap-3 p-2 -mx-2 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] grid place-items-center text-sm font-semibold">
                  {s.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-slate-900 truncate">{s.name}</div>
                  <div className="text-xs text-slate-500 truncate">{s.email}</div>
                </div>
                <div className="text-xs text-slate-400">{s.registeredAt}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentDashboard() {
  const { currentUser, courses, purchases } = useStore();
  const myPurchases = purchases.filter((p) => p.userId === currentUser!.id);
  const active = myPurchases.filter((p) => p.progress > 0 && p.progress < 100);
  const completed = myPurchases.filter((p) => p.progress === 100);
  const hours = myPurchases.reduce((s, p) => s + (p.completedLessons.length * 0.3), 0);
  const overall = myPurchases.length
    ? Math.round(myPurchases.reduce((s, p) => s + p.progress, 0) / myPurchases.length)
    : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Hola, {currentUser?.name.split(" ")[0]}</h1>
        <p className="text-slate-600 text-sm mt-1">Continúa donde lo dejaste.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Cursos activos" value={active.length} icon={<PlayCircle className="w-5 h-5" />} />
        <StatCard label="Finalizados" value={completed.length} icon={<Award className="w-5 h-5" />} />
        <StatCard label="Horas estudiadas" value={hours.toFixed(1)} icon={<Clock className="w-5 h-5" />} />
        <StatCard label="Progreso general" value={`${overall}%`} icon={<TrendingUp className="w-5 h-5" />} />
      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-900">Continuar aprendiendo</h2>
          <Link to="/app/my-courses" className="text-sm font-medium text-[#2563eb] hover:text-[#2563eb]/80 transition-colors">
            Ver todos
          </Link>
        </div>
        {myPurchases.length === 0 && (
          <div className="text-center py-10">
            <p className="text-slate-600 mb-4">Aún no tienes cursos.</p>
            <Link to="/app/catalog" className="inline-flex px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#facc15]/25 to-[#2563eb]/25 text-[#2563eb] font-medium hover:from-[#facc15]/35 hover:to-[#2563eb]/35 transition-all shadow-sm hover:shadow-md border border-[#2563eb]/20">
              Explorar catálogo
            </Link>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-4">
          {myPurchases.slice(0, 4).map((p) => {
            const course = courses.find((c) => c.id === p.courseId)!;
            return (
              <Link key={p.id} to={`/app/course/${course.id}`} className="flex gap-3 p-3 rounded-2xl border border-slate-200 hover:border-[#2563eb]/30 hover:shadow-md transition-all">
                <img src={course.thumbnail} alt="" className="w-20 h-20 rounded-2xl object-cover" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-slate-900 truncate">{course.title}</div>
                  <div className="text-xs text-slate-500 mb-2">{course.author}</div>
                  <ProgressBar value={p.progress} />
                  <div className="text-xs text-slate-500 mt-1">{p.progress}% completado</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}