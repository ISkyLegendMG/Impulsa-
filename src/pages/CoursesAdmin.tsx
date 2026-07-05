import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { Badge } from "@/components/ui-bits";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import type { Course } from "@/lib/mock-data";

const emptyForm = {
  title: "",
  author: "",
  description: "",
  price: 100,
  rating: 4.5,
  category: "General",
  thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  date: new Date().toISOString().slice(0, 10),
  published: true,
};

export default function CoursesAdmin() {
  const { currentUser, courses, addCourse, updateCourse, deleteCourse, purchases } = useStore();
  const [editing, setEditing] = useState<Course | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState(emptyForm);

  if (currentUser?.role === "student") return <Navigate to="/app/catalog" replace />;

  function openCreate() { setForm(emptyForm); setCreating(true); }
  function openEdit(c: Course) {
    setEditing(c);
    setForm({
      title: c.title, author: c.author, description: c.description, price: c.price,
      rating: c.rating, category: c.category, thumbnail: c.thumbnail, date: c.date, published: c.published,
    });
  }
  function save() {
    if (editing) { updateCourse(editing.id, form); setEditing(null); }
    else { addCourse(form); setCreating(false); }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Gestión de cursos</h1>
          <p className="text-slate-600 text-sm mt-1">Crea, edita y publica cursos.</p>
        </div>
        <button onClick={openCreate} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#facc15]/25 to-[#2563eb]/25 text-[#2563eb] font-medium hover:from-[#facc15]/35 hover:to-[#2563eb]/35 transition-all shadow-sm hover:shadow-md border border-[#2563eb]/20">
          <Plus className="w-4 h-4" /> Crear curso
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-[#facc15]/10 via-[#facc15]/5 to-[#2563eb]/10 text-xs uppercase text-slate-600">
            <tr>
              <th className="text-left p-4 font-semibold">Curso</th>
              <th className="text-left p-4 hidden md:table-cell font-semibold">Categoría</th>
              <th className="text-left p-4 font-semibold">Precio</th>
              <th className="text-left p-4 hidden lg:table-cell font-semibold">Ventas</th>
              <th className="text-left p-4 font-semibold">Estado</th>
              <th className="text-right p-4 font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.id} className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={c.thumbnail} alt="" className="w-12 h-12 rounded-2xl object-cover" />
                    <div>
                      <div className="font-medium text-slate-900">{c.title}</div>
                      <div className="text-xs text-slate-500">{c.author}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell text-slate-600">{c.category}</td>
                <td className="p-4 font-semibold text-slate-900">S/{c.price}</td>
                <td className="p-4 hidden lg:table-cell text-slate-600">{purchases.filter((p) => p.courseId === c.id).length}</td>
                <td className="p-4">
                  {c.published ? (
                    <Badge variant="success">Publicado</Badge>
                  ) : (
                    <Badge variant="muted">Borrador</Badge>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => openEdit(c)} className="p-2 rounded-2xl hover:bg-slate-100 transition-colors" aria-label="Editar">
                      <Pencil className="w-4 h-4 text-slate-600" />
                    </button>
                    <button onClick={() => { if (confirm("¿Eliminar este curso?")) deleteCourse(c.id); }}
                      className="p-2 rounded-2xl hover:bg-red-50 transition-colors" aria-label="Eliminar">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(editing || creating) && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm grid place-items-center p-4" onClick={() => { setEditing(null); setCreating(false); }}>
          <div className="bg-white rounded-3xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900">{editing ? "Editar curso" : "Nuevo curso"}</h2>
              <button onClick={() => { setEditing(null); setCreating(false); }} className="p-1.5 rounded-2xl hover:bg-slate-100 transition-colors">
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>
            <div className="space-y-3">
              {[["Título", "title"], ["Autor", "author"], ["Categoría", "category"], ["Imagen (URL)", "thumbnail"]].map(([label, key]) => (
                <div key={key}>
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">{label}</label>
                  <input value={(form as any)[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="mt-1 w-full h-11 px-4 rounded-2xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition shadow-sm" />
                </div>
              ))}
              <div>
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Descripción</label>
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3}
                  className="mt-1 w-full px-4 py-2 rounded-2xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition shadow-sm" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Precio (S/)</label>
                  <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                    className="mt-1 w-full h-11 px-4 rounded-2xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition shadow-sm" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Rating</label>
                  <input type="number" step="0.1" max="5" value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                    className="mt-1 w-full h-11 px-4 rounded-2xl border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition shadow-sm" />
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })}
                  className="w-4 h-4 rounded accent-[#2563eb]" />
                Publicado
              </label>
              <div className="flex gap-2 pt-2">
                <button onClick={save} className="flex-1 h-11 rounded-2xl bg-gradient-to-r from-[#facc15]/25 to-[#2563eb]/25 text-[#2563eb] font-semibold hover:from-[#facc15]/35 hover:to-[#2563eb]/35 transition-all shadow-sm hover:shadow-md border border-[#2563eb]/20">
                  Guardar
                </button>
                <button onClick={() => { setEditing(null); setCreating(false); }} className="flex-1 h-11 rounded-2xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-all">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}