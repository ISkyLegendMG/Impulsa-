import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function LandingHero() {
    return (
        <section className="relative overflow-hidden bg-white text-slate-900">

            {/* fondo suave premium */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.10),transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),transparent_40%)]" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT */}
                    <div className="space-y-8">

                        {/* badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-50 px-4 py-2 text-xs tracking-[0.25em] uppercase text-yellow-600">
                            <Sparkles className="h-3 w-3" />
                            Plataforma educativa 2026
                        </div>

                        {/* title */}
                        <h1 className="text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-slate-900">
                            Aprende habilidades digitales
                            <span className="block text-yellow-500">
                                con enfoque profesional.
                            </span>
                        </h1>

                        {/* description */}
                        <p className="max-w-xl text-base text-slate-600 leading-relaxed">
                            Formación práctica en tecnología, marketing y negocios.
                            Construye proyectos reales y acelera tu desarrollo profesional.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-3 pt-2">

                            <Link
                                to="/register"
                                className="inline-flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow-md shadow-yellow-400/30 transition hover:opacity-90"
                            >
                                Empezar ahora <ArrowRight className="h-4 w-4" />
                            </Link>

                        </div>

                        {/* stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6">

                            {[
                                { value: "1.8k", label: "Estudiantes" },
                                { value: "58", label: "Cursos" },
                                { value: "4.8★", label: "Satisfacción" },
                            ].map((s, i) => (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                                >
                                    <div className="text-2xl font-semibold text-slate-900">
                                        {s.value}
                                    </div>
                                    <div className="text-xs tracking-[0.2em] uppercase text-slate-500">
                                        {s.label}
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="relative">

                        <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/60">

                            {/* glow suave */}
                            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-yellow-300/30 blur-2xl" />

                            <img
                                src={hero}
                                alt="Learning platform"
                                className="h-[420px] w-full rounded-2xl object-cover"
                            />

                            {/* tag flotante */}
                            <div className="absolute top-6 left-6 rounded-full bg-white/90 border border-yellow-200 px-3 py-1 text-xs text-yellow-600 shadow-sm">
                                +85% retención
                            </div>

                        </div>

                        {/* footer mini */}
                        <div className="mt-5 flex items-center justify-between text-sm text-slate-500">

                            <div>
                                <p className="text-slate-900 font-medium">
                                    Aprende a tu ritmo
                                </p>
                                <p className="text-xs text-slate-500">
                                    Experiencia guiada paso a paso
                                </p>
                            </div>

                            <Link
                                to="/courses"
                                className="text-yellow-500 hover:text-yellow-600 transition"
                            >
                                Explorar →
                            </Link>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}