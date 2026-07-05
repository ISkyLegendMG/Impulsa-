import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useStore } from "@/lib/store";
import { ArrowLeft, CreditCard, CheckCircle2, Loader2, Wallet, Building2, Smartphone } from "lucide-react";

type Step = "summary" | "payment" | "processing" | "success";

export default function Checkout() {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { courses, currentUser, purchase } = useStore();
  const course = courses.find((c) => c.id === id);
  const [step, setStep] = useState<Step>("summary");
  const [method, setMethod] = useState("card");

  if (!course) return <div>Curso no encontrado</div>;

  function confirm() {
    setStep("processing");
    setTimeout(() => {
      purchase(currentUser!.id, course!.id);
      setStep("success");
    }, 1500);
  }

  const paymentMethods = [
    { id: "card", label: "Tarjeta de crédito/débito", icon: CreditCard },
    { id: "yape", label: "Yape", icon: Smartphone },
    { id: "transfer", label: "Transferencia bancaria", icon: Building2 },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <Link
        to="/app/catalog"
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Volver al catálogo
      </Link>

      {/* Steps */}
      <div className="flex items-center gap-2 text-xs">
        {(["summary", "payment", "processing", "success"] as Step[]).map((s, i, arr) => (
          <div key={s} className="flex-1 flex items-center gap-2">
            <div className={`w-8 h-8 rounded-2xl grid place-items-center font-semibold text-sm ${arr.indexOf(step) >= i
                ? "bg-primary text-white shadow-md shadow-primary/25"
                : "bg-slate-100 text-slate-400"
              }`}>
              {i + 1}
            </div>
            {i < arr.length - 1 && (
              <div className={`h-0.5 flex-1 rounded-full ${arr.indexOf(step) > i ? "bg-primary" : "bg-slate-200"
                }`} />
            )}
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        {/* SUMMARY */}
        {step === "summary" && (
          <>
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Resumen de compra</h1>
            <div className="flex gap-4">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-24 h-24 rounded-2xl object-cover shadow-sm"
              />
              <div className="flex-1">
                <div className="font-semibold text-slate-900">{course.title}</div>
                <div className="text-sm text-slate-600">{course.author}</div>
                <div className="text-sm text-slate-500 mt-1">{course.lessons.length} lecciones</div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="text-slate-900 font-medium">S/{course.price}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>IGV (incluido)</span>
                <span>S/{(course.price * 0.18).toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t border-slate-200">
                <span className="text-slate-900">Total</span>
                <span className="text-slate-900">S/{course.price}</span>
              </div>
            </div>
            <button
              onClick={() => setStep("payment")}
              className="w-full mt-6 h-12 rounded-2xl bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Continuar al pago
            </button>
          </>
        )}

        {/* PAYMENT */}
        {step === "payment" && (
          <>
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Método de pago</h1>
            <div className="space-y-2">
              {paymentMethods.map((m) => {
                const Icon = m.icon;
                return (
                  <label
                    key={m.id}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all ${method === m.id
                        ? "border-primary bg-primary/5 shadow-sm shadow-primary/10"
                        : "border-slate-200 hover:border-slate-300"
                      }`}
                  >
                    <input
                      type="radio"
                      name="method"
                      checked={method === m.id}
                      onChange={() => setMethod(m.id)}
                      className="accent-primary w-4 h-4"
                    />
                    <Icon className="w-5 h-5 text-slate-500" />
                    <span className="font-medium text-sm text-slate-900">{m.label}</span>
                  </label>
                );
              })}
            </div>

            {/* Card fields */}
            {method === "card" && (
              <div className="mt-4 space-y-3">
                <input
                  placeholder="Número de tarjeta"
                  className="w-full h-11 px-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="MM/AA"
                    className="h-11 px-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                  <input
                    placeholder="CVV"
                    className="h-11 px-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>
              </div>
            )}

            <button
              onClick={confirm}
              className="w-full mt-6 h-12 rounded-2xl bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              Pagar S/{course.price}
            </button>
          </>
        )}

        {/* PROCESSING */}
        {step === "processing" && (
          <div className="py-12 text-center">
            <Loader2 className="w-14 h-14 animate-spin text-primary mx-auto" />
            <p className="mt-4 font-semibold text-slate-900">Procesando pago...</p>
            <p className="text-sm text-slate-600 mt-1">Esto solo tomará unos segundos.</p>
          </div>
        )}

        {/* SUCCESS */}
        {step === "success" && (
          <div className="py-8 text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-emerald-50 grid place-items-center border border-emerald-200">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-4">¡Pago exitoso!</h2>
            <p className="text-slate-600 mt-2">Ya tienes acceso a <span className="font-medium">{course.title}</span>.</p>
            <div className="mt-6 flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => navigate(`/app/course/${course.id}`)}
                className="px-6 py-2.5 rounded-2xl bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
              >
                Empezar curso
              </button>
              <button
                onClick={() => navigate("/app/my-courses")}
                className="px-6 py-2.5 rounded-2xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all"
              >
                Mis cursos
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}