import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "@/lib/store";
import logo from "@/assets/logo.png";
import { ArrowLeft, Home, UserPlus, Mail, Lock, User } from "lucide-react";

export default function Register() {
  const { register } = useStore();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (form.password.length < 6) {
      return setError("La contraseña debe tener al menos 6 caracteres");
    }

    const u = register(form);
    if (!u) return setError("Ese correo ya está registrado");

    navigate("/app");
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">

      {/* CARD */}
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden">

        {/* TOP BRAND */}
        <div className="px-8 pt-8 pb-6 text-center border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">

          <Link to="/" className="inline-flex items-center gap-3 mb-4 group hover:opacity-80 transition-opacity">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#facc15]/20 to-[#2563eb]/20 border border-slate-200 shadow-sm grid place-items-center group-hover:shadow-md transition-shadow">
              <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
            </div>

            <div className="leading-tight">
              <span className="font-bold text-slate-900 text-lg">
                Impulsa<span className="text-[#2563eb]">+</span>
              </span>
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400">
                Crear cuenta
              </p>
            </div>
          </Link>

          <h1 className="text-2xl font-bold text-slate-900">
            Crear cuenta
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Empieza a aprender en minutos
          </p>
        </div>

        {/* FORM */}
        <div className="p-8 space-y-5">

          {/* Botón volver al inicio */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors group mb-2"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            Volver al inicio
          </Link>

          <form onSubmit={onSubmit} className="space-y-4">

            <div className="space-y-1">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <User className="w-4 h-4 text-[#2563eb]" />
                Nombre completo
              </label>
              <input
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                placeholder="Tu nombre completo"
                className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Mail className="w-4 h-4 text-[#2563eb]" />
                Correo
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                placeholder="tu@email.com"
                className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Lock className="w-4 h-4 text-[#2563eb]" />
                Contraseña
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                placeholder="Mínimo 6 caracteres"
                className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition"
                required
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 p-3.5 rounded-2xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] font-semibold shadow-sm hover:shadow-md transition-all border border-[#2563eb]/20 hover:from-[#facc15]/40 hover:to-[#2563eb]/40 flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              Crear cuenta
            </button>

          </form>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-slate-500">
              ¿Ya tienes cuenta?{" "}
              <Link
                to="/login"
                className="text-[#2563eb] font-medium hover:underline"
              >
                Inicia sesión
              </Link>
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors text-xs"
            >
              <Home className="w-3.5 h-3.5" />
              Ir al inicio
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}