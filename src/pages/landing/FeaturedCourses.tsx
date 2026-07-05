import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Course } from "@/lib/store";

type FeaturedCoursesProps = {
    featured: Course[];
};

export function FeaturedCourses({ featured }: FeaturedCoursesProps) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                        Cursos destacados
                    </span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900">Explora las opciones creadas para tu crecimiento</h2>
                    <p className="mt-4 max-w-2xl text-slate-600">
                        Encuentra cursos diseñados para que avances con claridad, confianza y resultados reales desde el primer módulo.
                    </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-600">6 cursos gratuitos</span>
                    <Link
                        to="/app/catalog"
                        className="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r from-primary to-warning px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-primary/20 transition hover:opacity-95"
                    >
                        Ver catálogo completo <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((course) => (
                    <article key={course.id} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
                            <img src={course.thumbnail} alt={course.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-3 text-sm text-slate-600">
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{course.category}</span>
                            <span className="font-semibold text-slate-900">S/{course.price}</span>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold text-slate-900">{course.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600 line-clamp-2">{course.description}</p>
                        <div className="mt-5 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-1 text-warning">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star
                                        key={index}
                                        className={`h-4 w-4 ${index < Math.round(Number(course.rating ?? 0)) ? "fill-warning text-warning" : "text-slate-300"}`}
                                    />
                                ))}
                            </div>
                            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">{course.author}</span>
                        </div>
                        <Link
                            to="/app/catalog"
                            className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-hover"
                        >
                            Ver curso
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
