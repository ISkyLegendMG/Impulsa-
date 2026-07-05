import { TrendingUp, Users, BookOpen, Award, CheckCircle2 } from "lucide-react";
import {
    AreaChart,
    Area,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from "recharts";

const enrollmentData = [
    { mes: "Ene", estudiantes: 120 },
    { mes: "Feb", estudiantes: 180 },
    { mes: "Mar", estudiantes: 240 },
    { mes: "Abr", estudiantes: 310 },
    { mes: "May", estudiantes: 420 },
    { mes: "Jun", estudiantes: 560 },
];

const categoryData = [
    { name: "Tecnología", valor: 38 },
    { name: "Marketing", valor: 24 },
    { name: "Diseño", valor: 20 },
    { name: "Negocios", valor: 18 },
];

const completionData = [
    { curso: "Excel", pct: 92 },
    { curso: "React", pct: 78 },
    { curso: "SEO", pct: 85 },
    { curso: "UI/UX", pct: 70 },
    { curso: "Finanzas", pct: 88 },
];

const PIE_COLORS = ["#2563eb", "#facc15", "#38bdf8", "#1e40af"];

export function LandingStats() {
    return (
        <section id="stats" className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    <TrendingUp className="h-3 w-3" /> Plataforma en crecimiento
                </div>
                <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">Resultados que puedes medir</h2>
                <p className="mt-4 text-slate-600">
                    Miles de estudiantes ya están avanzando con Impulsa+. Estos resultados muestran el impacto real en tu formación.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-8">
                {[
                    { label: "Estudiantes activos", value: "1,830", trend: "+12%", icon: Users },
                    { label: "Cursos publicados", value: "58", trend: "+6", icon: BookOpen },
                    { label: "Certificados emitidos", value: "742", trend: "+24%", icon: Award },
                    { label: "Tasa de finalización", value: "82%", trend: "+4%", icon: CheckCircle2 },
                ].map((metric) => (
                    <div key={metric.label} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
                        <div className="flex items-center justify-between">
                            <div className="w-12 h-12 rounded-3xl bg-slate-100 grid place-items-center text-primary">
                                <metric.icon className="h-5 w-5" />
                            </div>
                            <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">{metric.trend}</span>
                        </div>
                        <p className="mt-5 text-3xl font-semibold text-slate-900">{metric.value}</p>
                        <p className="mt-2 text-sm text-slate-600">{metric.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                {/* 📈 GRÁFICO GRANDE - ÁREA CON INSIGHTS ABAJO */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900">Crecimiento de estudiantes</h3>
                            <p className="text-sm text-slate-600">Inscripciones del primer semestre 2026</p>
                        </div>
                        <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">+367%</span>
                    </div>
                    <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={enrollmentData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorEst" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.15} />
                                <XAxis
                                    dataKey="mes"
                                    stroke="hsl(var(--muted-foreground))"
                                    fontSize={12}
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#64748b' }}
                                />
                                <YAxis
                                    stroke="hsl(var(--muted-foreground))"
                                    fontSize={12}
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#64748b' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        background: "hsl(var(--card))",
                                        border: "1px solid hsl(var(--border))",
                                        borderRadius: 12,
                                        fontSize: 13,
                                        padding: "12px 16px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                                    }}
                                    labelStyle={{ fontWeight: 600, color: '#0f172a', marginBottom: 4 }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="estudiantes"
                                    stroke="#2563eb"
                                    strokeWidth={3}
                                    fill="url(#colorEst)"
                                    activeDot={{ r: 6, fill: '#2563eb' }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* 🔹 INSIGHTS - CHACHARA ABAJO DEL GRÁFICO */}
                    <div className="mt-6 pt-6 border-t border-slate-200/60">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-slate-900">1.2K</p>
                                <p className="text-xs text-slate-500">Nuevos en junio</p>
                            </div>
                            <div className="text-center border-x border-slate-200/60">
                                <p className="text-2xl font-bold text-emerald-600">+28%</p>
                                <p className="text-xs text-slate-500">vs mes anterior</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-bold text-slate-900">4.5K</p>
                                <p className="text-xs text-slate-500">Total acumulado</p>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-500">
                            <span className="flex items-center gap-1.5">
                                <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                                Crecimiento acelerado
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                                Meta superada
                            </span>
                            <span className="flex items-center gap-1.5">
                                <TrendingUp className="h-3 w-3 text-slate-400" />
                                Tendencia al alza
                            </span>
                        </div>
                    </div>
                </div>

                {/* 📊 LADO DERECHO - PIE + BAR */}
                <div className="grid gap-6">
                    {/* 🥧 PIE CHART */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
                        <h3 className="text-base font-semibold text-slate-900 mb-1">Categorías populares</h3>
                        <p className="text-sm text-slate-600 mb-3">Distribución de inscripciones</p>
                        <div className="h-44">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={categoryData}
                                        dataKey="valor"
                                        nameKey="name"
                                        innerRadius={40}
                                        outerRadius={60}
                                        paddingAngle={4}
                                    >
                                        {categoryData.map((_, index) => (
                                            <Cell key={index} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{
                                            background: "hsl(var(--card))",
                                            border: "1px solid hsl(var(--border))",
                                            borderRadius: 8,
                                            fontSize: 12,
                                        }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 mt-2">
                            {categoryData.map((item, index) => (
                                <div key={item.name} className="flex items-center justify-between text-sm text-slate-600">
                                    <div className="flex items-center gap-1.5">
                                        <span className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ background: PIE_COLORS[index] }} />
                                        <span className="text-xs truncate">{item.name}</span>
                                    </div>
                                    <span className="font-semibold text-slate-900 text-xs">{item.valor}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 📊 BAR CHART */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
                        <h3 className="text-base font-semibold text-slate-900 mb-1">Finalización</h3>
                        <p className="text-sm text-slate-600 mb-3">% de alumnos que completan</p>
                        <div className="h-44">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={completionData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.1} />
                                    <XAxis
                                        dataKey="curso"
                                        stroke="hsl(var(--muted-foreground))"
                                        fontSize={10}
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b' }}
                                    />
                                    <YAxis
                                        stroke="hsl(var(--muted-foreground))"
                                        fontSize={10}
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b' }}
                                        domain={[0, 100]}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            background: "hsl(var(--card))",
                                            border: "1px solid hsl(var(--border))",
                                            borderRadius: 8,
                                            fontSize: 12,
                                        }}
                                    />
                                    <Bar
                                        dataKey="pct"
                                        fill="#facc15"
                                        radius={[6, 6, 0, 0]}
                                        barSize={30}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}