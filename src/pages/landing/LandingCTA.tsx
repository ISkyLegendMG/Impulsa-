import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";

export function LandingCTA() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                {/* fondo decorativo suave */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(250,204,21,0.12),transparent_45%)]" />

                {/* contenido */}
                <div className="relative px-10 py-14 lg:py-20 text-center">
                    {/* Badge flotante */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6">
                        <Rocket className="h-3 w-3" /> Comienza ahora
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-semibold text-slate-900 tracking-tight">
                        Empieza hoy tu próximo curso
                    </h2>

                    <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm lg:text-base leading-relaxed">
                        Únete a más de 1,800 estudiantes que ya están transformando su carrera con Impulsa+.
                    </p>

                    {/* solo botón de registro */}
                    <div className="mt-8 flex items-center justify-center">
                        <Link
                            to="/register"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:-translate-y-0.5"
                        >
                            Crear cuenta gratis
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* micro trust line con checks */}
                    <div className="mt-6 flex items-center justify-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                            Sin tarjeta
                        </span>
                        <span className="w-px h-3 bg-slate-200"></span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                            Acceso inmediato
                        </span>
                        <span className="w-px h-3 bg-slate-200"></span>
                        <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                            Cancelas cuando quieras
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}