import { BookOpen, Users, Rocket, Laptop, Zap } from "lucide-react";

const FEATURES = [
    {
        icon: BookOpen,
        title: "Práctica real",
        desc: "Aprende construyendo proyectos.",
    },
    {
        icon: Users,
        title: "Comunidad",
        desc: "Acompañamiento constante.",
    },
    {
        icon: Rocket,
        title: "Progreso rápido",
        desc: "Avanza con enfoque claro.",
    },
    {
        icon: Laptop,
        title: "Contenido moderno",
        desc: "Tecnologías actualizadas.",
    },
    {
        icon: Zap,
        title: "Aprendizaje ágil",
        desc: "Método directo y efectivo.",
    },
];

export function LandingFeatures() {
    return (
        <section id="features" className="border-y border-slate-200 bg-white">

            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-semibold text-slate-900">
                        Todo lo que necesitas para avanzar
                    </h2>
                    <p className="text-sm text-slate-500 mt-2">
                        Una experiencia de aprendizaje estructurada y moderna
                    </p>
                </div>

                {/* grid 5 cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

                    {FEATURES.map((feature) => (
                        <div
                            key={feature.title}
                            className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >

                            {/* icon */}
                            <div className="w-9 h-9 rounded-xl bg-yellow-50 text-yellow-500 grid place-items-center mb-3 group-hover:bg-yellow-100 transition">
                                <feature.icon className="h-4 w-4" />
                            </div>

                            {/* title */}
                            <h3 className="text-sm font-semibold text-slate-900">
                                {feature.title}
                            </h3>

                            {/* desc */}
                            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                                {feature.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}