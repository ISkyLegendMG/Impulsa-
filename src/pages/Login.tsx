import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "@/lib/store";
import logo from "@/assets/logo.png";
import { GraduationCap, Sparkles, Target, Rocket } from "lucide-react";

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

          <Link to="/" className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
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

        <div className="relative z-10 text-xs text-white/80 drop-shadow-sm">
          © 2026 Impulsa+
        </div>

      </div>

      {/* RIGHT PANEL */}
      <div className="flex items-center justify-center p-6 lg:p-12">

        <div className="w-full max-w-md">

          <h1 className="text-3xl font-bold text-slate-900">
            Iniciar sesión
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Accede a tu plataforma de aprendizaje
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Correo electrónico"
              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
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
              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
              required
            />

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-100 p-3 rounded-xl">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-[#1ea7ff] text-white font-semibold shadow-md hover:opacity-95 transition"
            >
              Iniciar sesión
            </button>

          </form>

          <p className="mt-6 text-sm text-center text-slate-500">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-primary font-medium hover:underline">
              Crear cuenta
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
}