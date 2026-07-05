import { useStore } from "@/lib/store";
import { TrendingUp, Users, BookOpen, DollarSign } from "lucide-react";

export default function Sales() {
  const { purchases, users, courses } = useStore();
  const total = purchases.reduce((s, p) => s + p.amount, 0);

  // Estadísticas rápidas
  const totalPurchases = purchases.length;
  const uniqueStudents = new Set(purchases.map(p => p.userId)).size;
  const uniqueCourses = new Set(purchases.map(p => p.courseId)).size;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Compras realizadas</h1>
        <p className="text-slate-600 text-sm mt-1">Historial completo de transacciones</p>
      </div>

      {/* Stats rápidas */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 text-slate-600 text-xs font-medium uppercase tracking-wide">
            <DollarSign className="w-3.5 h-3.5" />
            Total ingresos
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-1">S/{total}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 text-[#2563eb] text-xs font-medium uppercase tracking-wide">
            <TrendingUp className="w-3.5 h-3.5" />
            Total compras
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-1">{totalPurchases}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 text-[#facc15] text-xs font-medium uppercase tracking-wide">
            <Users className="w-3.5 h-3.5" />
            Estudiantes
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-1">{uniqueStudents}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-medium uppercase tracking-wide">
            <BookOpen className="w-3.5 h-3.5" />
            Cursos vendidos
          </div>
          <p className="text-2xl font-bold text-slate-900 mt-1">{uniqueCourses}</p>
        </div>
      </div>

      {/* Tabla */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-[#facc15]/10 via-[#facc15]/5 to-[#2563eb]/10 text-xs uppercase text-slate-600">
            <tr>
              <th className="text-left p-4 font-semibold">Fecha</th>
              <th className="text-left p-4 font-semibold">Estudiante</th>
              <th className="text-left p-4 font-semibold">Curso</th>
              <th className="text-right p-4 font-semibold">Monto</th>
            </tr>
          </thead>
          <tbody>
            {[...purchases].reverse().map((p) => {
              const u = users.find((x) => x.id === p.userId);
              const c = courses.find((x) => x.id === p.courseId);
              return (
                <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 text-slate-600">{p.date}</td>
                  <td className="p-4 font-medium text-slate-900">{u?.name ?? "—"}</td>
                  <td className="p-4 text-slate-700">{c?.title ?? "—"}</td>
                  <td className="p-4 text-right font-bold text-[#2563eb]">S/{p.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {purchases.length === 0 && (
        <div className="text-center py-12 bg-white border border-slate-200 rounded-2xl">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 grid place-items-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-slate-600">No hay compras registradas</p>
          <p className="text-sm text-slate-400 mt-1">Los estudiantes aún no han realizado compras.</p>
        </div>
      )}
    </div>
  );
}