import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "@/lib/store";
import logo from "@/assets/logo.png";

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
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">

        {/* TOP BRAND */}
        <div className="px-8 pt-8 pb-6 text-center border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">

          <Link to="/" className="inline-flex items-center gap-3 mb-4">

            <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm grid place-items-center">
              <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
            </div>

            <span className="font-semibold text-slate-900">
              Impulsa+
            </span>

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

          <form onSubmit={onSubmit} className="space-y-4">

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">
                Nombre completo
              </label>
              <input
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">
                Correo
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">
                Contraseña
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                className="w-full h-11 px-4 rounded-xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
                required
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-100 p-3 rounded-xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full h-11 rounded-xl bg-gradient-to-r from-primary to-[#1ea7ff] text-white font-semibold shadow-md hover:opacity-95 transition"
            >
              Crear cuenta
            </button>

          </form>

          <p className="text-sm text-center text-slate-500">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="text-primary font-medium hover:underline"
            >
              Inicia sesión
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}