import { Star } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Carlos Díaz",
        role: "Estudiante de Marketing",
        text: "Los cursos son prácticos y el seguimiento del progreso me mantiene motivado cada día.",
    },
    {
        name: "María López",
        role: "Diseñadora UX",
        text: "Conseguí mi certificado en 6 semanas. La plataforma es clara y muy fácil de usar.",
    },
    {
        name: "Andrés Pérez",
        role: "Desarrollador",
        text: "Excelente nivel de los instructores y comunidad muy activa. Lo recomiendo 100%.",
    },
];

export function LandingTestimonials() {
    return (
        <section className="bg-white border-y border-slate-200">

            <div className="max-w-7xl mx-auto px-6 py-20">

                {/* HEADER */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900">
                        Lo que dicen nuestros estudiantes
                    </h2>
                    <p className="text-sm text-slate-500 mt-3">
                        Experiencias reales dentro de la plataforma
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-5">

                    {TESTIMONIALS.map((t) => (
                        <div
                            key={t.name}
                            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >

                            {/* STARS (más sutiles) */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                    />
                                ))}
                            </div>

                            {/* TEXT */}
                            <p className="text-sm text-slate-600 leading-relaxed">
                                “{t.text}”
                            </p>

                            {/* FOOTER */}
                            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">

                                <div>
                                    <div className="font-semibold text-sm text-slate-900">
                                        {t.name}
                                    </div>
                                    <div className="text-xs text-slate-500">
                                        {t.role}
                                    </div>
                                </div>

                                {/* micro accent */}
                                <div className="w-8 h-8 rounded-full bg-yellow-50 text-yellow-500 grid place-items-center text-xs font-bold">
                                    ★
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}