import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, PlayCircle, Users, BookOpen, Star } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function LandingHero() {
    return (
        <section className="relative overflow-hidden bg-white text-slate-900">

            {/* fondo suave premium */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.10),transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),transparent_40%)]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-28">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                    {/* LEFT */}
                    <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">

                        {/* badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-50 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-yellow-600">
                            <Sparkles className="h-3 w-3" />
                            Plataforma educativa 2026
                        </div>

                        {/* title */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-slate-900">
                            Aprende habilidades digitales
                            <span className="block text-yellow-500">
                                con enfoque profesional.
                            </span>
                        </h1>

                        {/* description */}
                        <p className="max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
                            Formación práctica en tecnología, marketing y negocios.
                            Construye proyectos reales y acelera tu desarrollo profesional.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-3 pt-1 sm:pt-2">

                            <Link
                                to="/register"
                                className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-black shadow-md shadow-yellow-400/30 transition hover:opacity-90 hover:shadow-lg hover:shadow-yellow-400/40 active:scale-95"
                            >
                                Empezar ahora <ArrowRight className="h-4 w-4" />
                            </Link>


                        </div>

                        {/* stats - mejoradas para móvil */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6">

                            {[
                                { value: "1.8k", label: "Estudiantes", icon: Users },
                                { value: "58", label: "Cursos", icon: BookOpen },
                                { value: "4.8★", label: "Satisfacción", icon: Star },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-3 sm:p-4 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
                                >
                                    <div className="flex items-center justify-center gap-1.5 text-lg sm:text-2xl font-semibold text-slate-900">
                                        {s.icon && <s.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500" />}
                                        {s.value}
                                    </div>
                                    <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-slate-500 text-center mt-0.5">
                                        {s.label}
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="relative order-1 lg:order-2">

                        <div className="relative rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-3 sm:p-4 shadow-xl shadow-slate-200/60">

                            {/* glow suave */}
                            <div className="absolute -top-6 -right-6 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-yellow-300/30 blur-2xl" />

                            <img
                                src={hero}
                                alt="Learning platform"
                                className="h-[200px] sm:h-[280px] md:h-[340px] lg:h-[420px] w-full rounded-xl sm:rounded-2xl object-cover"
                            />

                            {/* tag flotante */}
                            <div className="absolute top-3 sm:top-6 left-3 sm:left-6 rounded-full bg-white/90 backdrop-blur-sm border border-yellow-200 px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs text-yellow-600 shadow-sm font-medium">
                                +85% retención
                            </div>

                        </div>

                        {/* footer mini */}
                        <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 text-sm text-slate-500">

                            <div>
                                <p className="text-slate-900 font-medium text-sm sm:text-base">
                                    Aprende a tu ritmo
                                </p>
                                <p className="text-[11px] sm:text-xs text-slate-500">
                                    Experiencia guiada paso a paso
                                </p>
                            </div>

                            <Link
                                to="/login"
                                className="text-yellow-500 hover:text-yellow-600 transition font-medium text-sm inline-flex items-center gap-1"
                            >
                                Explorar cursos
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}