import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "@/lib/store";
import logo from "@/assets/logo.png";
import { GraduationCap, Sparkles, Target, Rocket, ArrowLeft, Home } from "lucide-react";

export default function Login() {
  const { login } = useStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const user = login(email.trim(), password);

    if (!user) {
      setError("Credenciales incorrectas");
      return;
    }

    navigate("/app");
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">

      {/* LEFT PANEL */}
      <div className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden text-white">

        {/* GRADIENTE PRINCIPAL */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb] via-[#1ea7ff] to-[#facc15]" />

        {/* GRADIENTE A BLANCO QUE VA DESDE LA IZQUIERDA HACIA LA DERECHA */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent" />

        {/* glow sutil */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_55%)]" />

        {/* CONTENT */}
        <div className="relative z-10">

          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 transition group-hover:bg-white/20">
              <img src={logo} alt="logo" className="w-8 h-8 object-contain brightness-0 invert" />
            </div>

            <span className="text-white font-semibold text-lg tracking-tight drop-shadow-sm">
              Impulsa+
            </span>
          </Link>

        </div>

        {/* CONTENIDO CENTRAL - FRASE INSPIRADORA */}
        <div className="relative z-10 flex-1 flex items-center justify-center -mt-8">
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/90 border border-white/20 mb-6">
              <Sparkles className="h-3 w-3" />
              Transforma tu futuro
            </div>

            <h2 className="text-5xl font-bold leading-[1.15] text-white drop-shadow-lg">
              Aprende sin{" "}
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                límites
              </span>
            </h2>

            <p className="mt-4 text-base text-white/90 drop-shadow-md leading-relaxed">
              Domina nuevas habilidades, conecta con expertos y lleva tu carrera al siguiente nivel. Tu viaje de aprendizaje comienza aquí.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-white drop-shadow-md">1.8K+</div>
                <div className="text-[11px] text-white/80 drop-shadow-sm">Estudiantes</div>
              </div>
              <div className="text-center border-l border-r border-white/20">
                <div className="text-2xl font-bold text-white drop-shadow-md">58</div>
                <div className="text-[11px] text-white/80 drop-shadow-sm">Cursos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white drop-shadow-md">82%</div>
                <div className="text-[11px] text-white/80 drop-shadow-sm">Finalización</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTÓN IR AL INICIO EN LA PARTE INFERIOR */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="text-xs text-white/80 drop-shadow-sm">© 2026 Impulsa+</span>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            <Home className="w-4 h-4" />
            Ir al inicio
          </Link>
        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="flex items-center justify-center p-6 lg:p-12">

        <div className="w-full max-w-md">

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#facc15]/20 to-[#2563eb]/20 flex items-center justify-center border border-slate-200 shadow-sm">
              <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Iniciar sesión
              </h1>
              <p className="text-sm text-slate-500">
                Accede a tu plataforma de aprendizaje
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Correo electrónico"
              className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition"
              required
            />

            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Contraseña"
              className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition"
              required
            />

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 p-3.5 rounded-2xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full h-12 rounded-2xl bg-gradient-to-r from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] font-semibold shadow-sm hover:shadow-md transition-all border border-[#2563eb]/20 hover:from-[#facc15]/40 hover:to-[#2563eb]/40"
            >
              Iniciar sesión
            </button>

          </form>

          <p className="mt-6 text-sm text-center text-slate-500">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-[#2563eb] font-medium hover:underline">
              Crear cuenta
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}