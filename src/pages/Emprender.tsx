import { Link } from "react-router-dom";
import { useState } from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { LandingHeader } from "./landing/LandingHeader";
import emprenderData from "@/lib/emprender-data";
import { Sparkles, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";

const initialForm = { name: "", email: "", phone: "", service: "" };

export default function Emprender() {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState(initialForm);

    const handleOpenChange = (value: boolean) => {
        setOpen(value);
        if (!value) {
            setSubmitted(false);
            setForm(initialForm);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-white">
            <LandingHeader />
            <div className="max-w-6xl mx-auto px-6 py-12 lg:py-8">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#facc15]/20 to-[#2563eb]/20 px-4 py-2 text-sm font-semibold text-[#2563eb]">
                            <Sparkles className="w-4 h-4" />
                            Emprender
                        </span>
                        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                            Publica tu producto o servicio con apoyo profesional.
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                            Descubre servicios que te ayudan a estructurar tu oferta, comunicarla con claridad y capturar clientes desde el primer día.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 shadow-sm"
                            >
                                Volver al inicio
                            </Link>
                            <Dialog open={open} onOpenChange={handleOpenChange}>
                                <DialogTrigger asChild>
                                    <button
                                        type="button"
                                        className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] px-5 py-3 text-sm font-semibold transition hover:from-[#facc15]/40 hover:to-[#2563eb]/40 shadow-sm hover:shadow-md border border-[#2563eb]/20"
                                    >
                                        <Rocket className="w-4 h-4" />
                                        Publicar servicio
                                    </button>
                                </DialogTrigger>

                                <DialogContent className="max-w-xl rounded-3xl p-6 overflow-hidden border border-slate-200 bg-white shadow-2xl">
                                    {submitted ? (
                                        <div className="space-y-6 text-center">
                                            <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 border border-emerald-200 grid place-items-center">
                                                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                                            </div>
                                            <div className="text-2xl font-bold text-slate-900">Mensaje enviado</div>
                                            <p className="text-sm leading-7 text-slate-600">
                                                Gracias por enviar tus datos. Te contactaremos pronto.
                                            </p>
                                            <DialogClose className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#facc15]/25 to-[#2563eb]/25 text-[#2563eb] px-5 py-3 text-sm font-semibold transition hover:from-[#facc15]/35 hover:to-[#2563eb]/35 border border-[#2563eb]/20">
                                                Cerrar
                                            </DialogClose>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div>
                                                <h2 className="text-2xl font-bold text-slate-900">Publicar servicio</h2>
                                                <p className="mt-2 text-sm text-slate-600">
                                                    Completa los datos básicos y te contactaremos pronto.
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <label className="block text-sm font-semibold text-slate-700">
                                                    Nombre
                                                    <input
                                                        value={form.name}
                                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                        required
                                                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition shadow-sm"
                                                    />
                                                </label>

                                                <label className="block text-sm font-semibold text-slate-700">
                                                    Email
                                                    <input
                                                        type="email"
                                                        value={form.email}
                                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                        required
                                                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition shadow-sm"
                                                    />
                                                </label>

                                                <label className="block text-sm font-semibold text-slate-700">
                                                    Teléfono
                                                    <input
                                                        type="tel"
                                                        value={form.phone}
                                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                        required
                                                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition shadow-sm"
                                                    />
                                                </label>

                                                <label className="block text-sm font-semibold text-slate-700">
                                                    Servicio que deseas publicar
                                                    <textarea
                                                        value={form.service}
                                                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                                                        rows={4}
                                                        required
                                                        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition shadow-sm"
                                                    />
                                                </label>
                                            </div>

                                            <DialogFooter className="flex gap-3">
                                                <DialogClose className="flex-1 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                                                    Cancelar
                                                </DialogClose>
                                                <button
                                                    type="submit"
                                                    className="flex-1 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#facc15]/25 to-[#2563eb]/25 text-[#2563eb] px-5 py-3 text-sm font-semibold transition hover:from-[#facc15]/35 hover:to-[#2563eb]/35 border border-[#2563eb]/20 shadow-sm hover:shadow-md"
                                                >
                                                    Enviar solicitud
                                                </button>
                                            </DialogFooter>
                                        </form>
                                    )}
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">Publicar producto o servicio</p>
                        <h2 className="mt-4 text-2xl font-bold text-slate-900">Lanza tu oferta en 3 pasos</h2>
                        <div className="mt-6 space-y-4">
                            {[
                                { step: "1", title: "Define tu propuesta", description: "Describe tu producto o servicio con beneficios claros." },
                                { step: "2", title: "Fija tu precio", description: "Encuentra una tarifa competitiva y atractiva para tu audiencia." },
                                { step: "3", title: "Lanza con confianza", description: "Recibe apoyo por WhatsApp y comienza a vender." },
                            ].map((item) => (
                                <div key={item.step} className="rounded-2xl bg-gradient-to-r from-[#facc15]/10 to-[#2563eb]/10 p-4 border border-slate-200/50">
                                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2563eb]">Paso {item.step}</div>
                                    <div className="mt-2 text-sm font-semibold text-slate-900">{item.title}</div>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </aside>
                </div>

                <section className="mt-16">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-[#2563eb] font-semibold">Soluciones para emprendedores</p>
                            <h2 className="mt-2 text-3xl font-bold text-slate-900">Explora los planes más efectivos.</h2>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {emprenderData.map((item) => (
                            <Dialog key={item.id}>
                                <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                                    <div className="relative h-60 overflow-hidden bg-slate-100">
                                        <img
                                            src={item.imageUrl}
                                            alt={item.nombre}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 to-transparent p-5">
                                            <p className="text-xs uppercase tracking-[0.2em] text-white/80">{item.categoria}</p>
                                            <h3 className="mt-2 text-xl font-semibold text-white">{item.nombre}</h3>
                                            <p className="mt-1 text-sm text-white/75">{item.subtitulo}</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
                                            <span>{item.tipo}</span>
                                            <span className="rounded-full bg-gradient-to-r from-[#facc15]/20 to-[#2563eb]/20 px-3 py-1 font-semibold text-[#2563eb]">{item.precio}</span>
                                        </div>
                                        <p className="mt-4 text-sm leading-6 text-slate-600 line-clamp-3">{item.descripcion}</p>
                                        <div className="mt-6">
                                            <DialogTrigger asChild>
                                                <button className="w-full rounded-2xl bg-gradient-to-r from-[#facc15]/25 to-[#2563eb]/25 text-[#2563eb] px-4 py-3 text-sm font-semibold transition hover:from-[#facc15]/35 hover:to-[#2563eb]/35 border border-[#2563eb]/20 shadow-sm hover:shadow-md">
                                                    Ver detalles
                                                </button>
                                            </DialogTrigger>
                                        </div>
                                    </div>
                                </div>

                                <DialogContent className="max-w-3xl rounded-3xl p-0 overflow-hidden border border-slate-200 bg-white shadow-2xl">
                                    <div className="relative overflow-hidden">
                                        <img src={item.imageUrl} alt={item.nombre} className="h-80 w-full object-cover" />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-6">
                                            <p className="text-xs uppercase tracking-[0.2em] text-white/80">{item.categoria}</p>
                                            <h3 className="mt-2 text-4xl font-bold text-white">{item.nombre}</h3>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                            <div>
                                                <p className="text-sm uppercase tracking-[0.2em] text-slate-500 font-semibold">{item.tipo}</p>
                                                <p className="mt-2 text-xl font-semibold text-slate-900">{item.subtitulo}</p>
                                            </div>
                                            <span className="rounded-2xl bg-gradient-to-r from-[#facc15]/20 to-[#2563eb]/20 px-4 py-3 text-sm font-semibold text-[#2563eb]">{item.precio}</span>
                                        </div>
                                        <p className="mt-6 text-base leading-8 text-slate-600">{item.descripcion}</p>
                                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                            <a
                                                href={item.whatsapp}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] px-5 py-3 text-sm font-semibold transition hover:from-[#facc15]/40 hover:to-[#2563eb]/40 border border-[#2563eb]/20 shadow-sm hover:shadow-md"
                                            >
                                                Contactar por WhatsApp
                                            </a>
                                            <DialogClose className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                                                Cerrar
                                            </DialogClose>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}