import { useState } from "react";
import { MessageCircle, X, Search } from "lucide-react";
import { faqs } from "@/lib/mock-data";

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = faqs.filter((f) =>
    f.q.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <>
      <button
        onClick={() => setOpen(prev => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary-hover transition-all grid place-items-center"
        aria-label="Asistente"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 max-h-[70vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="p-4 bg-primary text-primary-foreground">
            <div className="font-semibold">Asistente de ayuda</div>
            <div className="text-xs opacity-90">Preguntas frecuentes</div>
          </div>
          <div className="p-3 border-b border-border relative">
            <Search className="w-4 h-4 absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setSelected(null);
              }}
              placeholder="Busca una pregunta..."
              className="w-full h-10 pl-9 pr-3 rounded-lg bg-muted text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {filtered.length === 0 && (
              <div className="p-4 text-sm text-muted-foreground text-center">
                Sin resultados.
              </div>
            )}
            {filtered.map((f, i) => (
              <div key={i}>
                <button
                  onClick={() => setSelected(selected === i ? null : i)}
                  className="w-full text-left p-3 rounded-lg hover:bg-muted text-sm font-medium"
                >
                  {f.q}
                </button>
                {selected === i && (
                  <div className="px-3 pb-3 text-sm text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
