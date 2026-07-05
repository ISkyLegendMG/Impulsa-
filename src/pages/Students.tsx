import { Link } from "react-router-dom";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { ProgressBar } from "@/components/ui-bits";
import { Search, Users, UserPlus } from "lucide-react";

export default function Students() {
  const { users, purchases } = useStore();
  const [q, setQ] = useState("");
  const students = users
    .filter((u) => u.role === "student")
    .filter((u) => u.name.toLowerCase().includes(q.toLowerCase()) || u.email.toLowerCase().includes(q.toLowerCase()));

  const totalStudents = users.filter((u) => u.role === "student").length;
  const activeStudents = users.filter((u) => u.role === "student" && u.status === "active").length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Estudiantes</h1>
          <p className="text-slate-600 text-sm mt-1">Listado de todos los alumnos registrados.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-slate-600 bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-sm">
            <Users className="w-4 h-4 text-[#2563eb]" />
            <span className="font-semibold text-slate-900">{totalStudents}</span>
            <span className="text-slate-500">total</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600 bg-emerald-50 border border-emerald-200 rounded-2xl px-4 py-2 shadow-sm">
            <UserPlus className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-emerald-700">{activeStudents}</span>
            <span className="text-emerald-600">activos</span>
          </div>
        </div>
      </div>

      <div className="relative max-w-sm">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar por nombre o correo..."
          className="w-full h-11 pl-10 pr-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition shadow-sm"
        />
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-[#facc15]/10 via-[#facc15]/5 to-[#2563eb]/10 text-xs uppercase text-slate-600">
            <tr>
              <th className="text-left p-4 font-semibold">Nombre</th>
              <th className="text-left p-4 hidden md:table-cell font-semibold">Correo</th>
              <th className="text-left p-4 font-semibold">Cursos</th>
              <th className="text-left p-4 w-48 font-semibold">Progreso</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => {
              const myP = purchases.filter((p) => p.userId === s.id);
              const avg = myP.length ? Math.round(myP.reduce((sum, p) => sum + p.progress, 0) / myP.length) : 0;
              return (
                <tr key={s.id} className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    <Link to={`/app/students/${s.id}`} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] grid place-items-center text-sm font-semibold">
                        {s.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-medium text-slate-900 group-hover:text-[#2563eb] transition-colors">{s.name}</span>
                    </Link>
                  </td>
                  <td className="p-4 hidden md:table-cell text-slate-600">{s.email}</td>
                  <td className="p-4 font-semibold text-slate-900">{myP.length}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <ProgressBar value={avg} />
                      <span className="text-xs w-9 font-medium text-slate-600">{avg}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
            {students.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">
                  <div className="flex flex-col items-center gap-2">
                    <Users className="w-8 h-8 text-slate-300" />
                    <span>No se encontraron estudiantes.</span>
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