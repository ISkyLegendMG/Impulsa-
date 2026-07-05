import { Link } from "react-router-dom";
import { useStore } from "@/lib/store";
import { Badge, ProgressBar } from "@/components/ui-bits";
import { BookOpen, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function MyCourses() {
  const { currentUser, purchases, courses } = useStore();
  const myP = purchases.filter((p) => p.userId === currentUser?.id);

  const totalCourses = myP.length;
  const completedCourses = myP.filter((p) => p.progress === 100).length;
  const inProgressCourses = myP.filter((p) => p.progress > 0 && p.progress < 100).length;

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Mis cursos</h1>
        <p className="text-slate-600 text-sm mt-1">Todos los cursos que has adquirido.</p>
      </div>

      {/* STATS RÁPIDAS */}
      {myP.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-slate-600 text-xs font-medium uppercase tracking-wide">
              <BookOpen className="w-3.5 h-3.5" />
              Total
            </div>
            <p className="text-2xl font-bold text-slate-900 mt-1">{totalCourses}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-600 text-xs font-medium uppercase tracking-wide">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Completados
            </div>
            <p className="text-2xl font-bold text-slate-900 mt-1">{completedCourses}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#2563eb] text-xs font-medium uppercase tracking-wide">
              <Clock className="w-3.5 h-3.5" />
              En curso
            </div>
            <p className="text-2xl font-bold text-slate-900 mt-1">{inProgressCourses}</p>
          </div>
        </div>
      )}

      {/* LISTA DE CURSOS */}
      {myP.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 grid place-items-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-slate-600 mb-4">Aún no has comprado cursos.</p>
          <Link
            to="/app/catalog"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#facc15]/25 to-[#2563eb]/25 text-[#2563eb] font-medium hover:from-[#facc15]/35 hover:to-[#2563eb]/35 transition-all shadow-sm hover:shadow-md border border-[#2563eb]/20"
          >
            Ir al catálogo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myP.map((p) => {
            const c = courses.find((x) => x.id === p.courseId);
            if (!c) return null;
            return (
              <Link
                key={p.id}
                to={`/app/course/${c.id}`}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="relative">
                  <img
                    src={c.thumbnail}
                    alt={c.title}
                    className="w-full aspect-video object-cover"
                  />
                  {p.progress === 100 && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-lg">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Finalizado
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-semibold text-slate-900 line-clamp-2 group-hover:text-[#2563eb] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{c.author}</p>

                  <div className="mt-4 space-y-2 flex-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">{p.progress}% completado</span>
                      {p.progress === 100 ? (
                        <Badge variant="success">Finalizado</Badge>
                      ) : p.progress > 0 ? (
                        <Badge variant="default">En curso</Badge>
                      ) : (
                        <Badge variant="muted">Sin iniciar</Badge>
                      )}
                    </div>
                    <ProgressBar value={p.progress} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}