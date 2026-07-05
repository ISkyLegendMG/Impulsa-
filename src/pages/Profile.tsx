import { useState } from "react";
import { useStore } from "@/lib/store";
import { User, Mail, Lock, Save, CheckCircle2 } from "lucide-react";

export default function Profile() {
  const { currentUser, updateProfile } = useStore();

  const [form, setForm] = useState({
    name: currentUser?.name ?? "",
    email: currentUser?.email ?? "",
    password: "",
  });

  const [saved, setSaved] = useState(false);

  function save(e: React.FormEvent) {
    e.preventDefault();

    const patch: any = { name: form.name, email: form.email };
    if (form.password) patch.password = form.password;

    updateProfile(currentUser!.id, patch);

    setSaved(true);
    setForm({ ...form, password: "" });

    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-8">

        {/* HEADER */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#facc15]/15 via-[#facc15]/10 to-[#2563eb]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#2563eb]">
            <User className="h-3 w-3" />
            Tu cuenta
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Mi perfil</h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Actualiza tu información personal y mantén tu cuenta al día.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden">

          {/* TOP USER SECTION - Degradado amarillo-azul suave */}
          <div className="flex items-center gap-5 p-6 border-b border-slate-100 bg-gradient-to-r from-[#facc15]/15 via-[#facc15]/10 to-[#2563eb]/10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#facc15] to-[#2563eb] text-white grid place-items-center text-2xl font-bold shadow-md">
              {currentUser?.name.charAt(0).toUpperCase()}
            </div>

            <div className="leading-tight">
              <div className="font-semibold text-lg text-slate-900">
                {currentUser?.name}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                {currentUser?.role === "admin"
                  ? "Administrador"
                  : "Estudiante"}
              </div>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={save} className="p-6 space-y-5">

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <User className="w-4 h-4 text-[#2563eb]/70" />
                Nombre
              </label>
              <input
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Mail className="w-4 h-4 text-[#2563eb]/70" />
                Correo
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition"
              />
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Lock className="w-4 h-4 text-[#2563eb]/70" />
                Nueva contraseña
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                placeholder="Dejar vacío para mantener"
                className="w-full h-12 px-4 rounded-2xl border border-slate-200 bg-white shadow-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition"
              />
            </div>

            {saved && (
              <div className="flex items-center gap-2 text-sm bg-emerald-50 text-emerald-700 border border-emerald-200 p-3.5 rounded-2xl">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                Cambios guardados correctamente
              </div>
            )}

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full h-12 rounded-2xl bg-gradient-to-r from-[#facc15]/25 to-[#2563eb]/25 text-[#2563eb] font-semibold shadow-sm hover:shadow-md transition-all border border-[#2563eb]/20"
            >
              <Save className="w-4 h-4" />
              Guardar cambios
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}