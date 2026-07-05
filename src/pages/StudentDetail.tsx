import { Link, useParams } from "react-router-dom";
import { useStore } from "@/lib/store";
import { Badge, ProgressBar, StatCard } from "@/components/ui-bits";
import { ArrowLeft, Award, BookOpen, Clock, TrendingUp, User } from "lucide-react";

export default function StudentDetail() {
  const { id = "" } = useParams();
  const { users, purchases, courses } = useStore();
  const student = users.find((u) => u.id === id);
  if (!student) return <div>Estudiante no encontrado</div>;

  const myP = purchases.filter((p) => p.userId === id);
  const completed = myP.filter((p) => p.progress === 100).length;
  const hours = (myP.reduce((s, p) => s + p.completedLessons.length, 0) * 0.3).toFixed(1);
  const avg = myP.length ? Math.round(myP.reduce((s, p) => s + p.progress, 0) / myP.length) : 0;

  return (
    <div className="space-y-6">
      <Link to="/app/students" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Volver a estudiantes
      </Link>

      {/* Perfil del estudiante */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#facc15] to-[#2563eb] text-white grid place-items-center text-2xl font-bold shadow-md">
            {student.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-slate-900">{student.name}</h1>
            <p className="text-slate-600">{student.email}</p>
            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
              <span className="text-slate-600">
                <span className="text-slate-500">Registro:</span> {student.registeredAt}
              </span>
              <span className="text-slate-600">
                <span className="text-slate-500">Último acceso:</span> {student.lastAccess}
              </span>
              <Badge variant={student.status === "active" ? "success" : "muted"}>
                {student.status === "active" ? "Activo" : "Inactivo"}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Cursos comprados" value={myP.length} icon={<BookOpen className="w-5 h-5" />} />
        <StatCard label="Finalizados" value={completed} icon={<Award className="w-5 h-5" />} />
        <StatCard label="Horas estudiadas" value={hours} icon={<Clock className="w-5 h-5" />} />
        <StatCard label="Progreso general" value={`${avg}%`} icon={<TrendingUp className="w-5 h-5" />} />
      </div>

      {/* Tabla de cursos */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-5 border-b border-slate-100 bg-gradient-to-r from-[#facc15]/5 to-[#2563eb]/5">
          <h2 className="font-semibold text-slate-900">Cursos inscritos</h2>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-[#facc15]/10 via-[#facc15]/5 to-[#2563eb]/10 text-xs uppercase text-slate-600">
            <tr>
              <th className="text-left p-4 font-semibold">Curso</th>
              <th className="text-left p-4 font-semibold">Precio</th>
              <th className="text-left p-4 w-48 font-semibold">Progreso</th>
              <th className="text-left p-4 font-semibold">Estado</th>
            </tr>
          </thead>
          <tbody>
            {myP.map((p) => {
              const c = courses.find((x) => x.id === p.courseId);
              if (!c) return null;
              return (
                <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-medium text-slate-900">{c.title}</td>
                  <td className="p-4 text-slate-700">S/{p.amount}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <ProgressBar value={p.progress} />
                      <span className="text-xs w-9 font-medium text-slate-600">{p.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    {p.progress === 100 ? (
                      <Badge variant="success">Finalizado</Badge>
                    ) : p.progress > 0 ? (
                      <Badge variant="default">En curso</Badge>
                    ) : (
                      <Badge variant="muted">Sin iniciar</Badge>
                    )}
                  </td>
                </tr>
              );
            })}
            {myP.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">
                  <div className="flex flex-col items-center gap-2">
                    <User className="w-8 h-8 text-slate-300" />
                    <span>Aún sin cursos.</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}