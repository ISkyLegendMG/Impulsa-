import { Link } from "react-router-dom";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { Star, Search, BookOpen, ArrowRight, Sparkles } from "lucide-react";

export default function Catalog() {
  const { courses, purchases, currentUser } = useStore();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");
  const categories = ["Todas", ...Array.from(new Set(courses.map((c) => c.category)))];
  const myCourseIds = new Set(purchases.filter((p) => p.userId === currentUser?.id).map((p) => p.courseId));

  const filtered = courses
    .filter((c) => c.published)
    .filter((c) => cat === "Todas" || c.category === cat)
    .filter((c) => c.title.toLowerCase().includes(q.toLowerCase()) || c.author.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Catálogo de cursos</h1>
        <p className="text-slate-600 text-sm mt-1">Explora y adquiere nuevos cursos.</p>
      </div>

      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar curso por título o autor..."
            className="w-full h-11 pl-10 pr-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition shadow-sm"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-2xl text-sm font-medium whitespace-nowrap transition-all ${cat === c
                  ? "bg-gradient-to-r from-[#facc15]/20 to-[#2563eb]/20 text-[#2563eb] shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c) => {
          const owned = myCourseIds.has(c.id);
          return (
            <div
              key={c.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={c.thumbnail}
                  alt={c.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#2563eb] shadow-sm border border-white/20">
                    {c.category}
                  </span>
                </div>
                {owned && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-lg">
                      <BookOpen className="w-3 h-3" />
                      Comprado
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-slate-900 line-clamp-2 group-hover:text-[#2563eb] transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{c.author} · {c.date}</p>
                <p className="text-sm text-slate-600 mt-2 line-clamp-2 flex-1">{c.description}</p>
                <div className="flex items-center gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.round(c.rating)
                          ? "fill-[#facc15] text-[#facc15]"
                          : "text-slate-300"
                        }`}
                    />
                  ))}
                  <span className="text-xs text-slate-500 ml-1 font-medium">{c.rating.toFixed(1)}</span>
                </div>
                <div className="mt-4 flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-2xl font-bold text-slate-900">S/{c.price}</span>
                  {owned ? (
                    <Link
                      to={`/app/course/${c.id}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-emerald-50 text-emerald-700 text-sm font-medium hover:bg-emerald-100 transition-all border border-emerald-200"
                    >
                      Continuar
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      to={`/app/checkout/${c.id}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] text-sm font-medium hover:from-[#facc15]/40 hover:to-[#2563eb]/40 transition-all shadow-sm hover:shadow-md border border-[#2563eb]/20"
                    >
                      Comprar
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 bg-white border border-slate-200 rounded-3xl">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 grid place-items-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-slate-600">No se encontraron cursos</p>
          <p className="text-sm text-slate-400 mt-1">Prueba con otros filtros o términos de búsqueda</p>
        </div>
      )}
    </div>
  );
}