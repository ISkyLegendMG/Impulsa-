export function Footer() {
    return (
        <footer className="border-t border-zinc-900 bg-black">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-[11px]">

                {/* Izquierda */}
                <div className="text-zinc-400">
                    IMPULSA+ · Plataforma de aprendizaje en línea
                </div>

                {/* Centro */}
                <div className="relative flex items-center">
                    <span className="text-white font-medium tracking-[0.3em] uppercase">
                        Elar Gomez
                    </span>

                    <span className="ml-2 text-yellow-400 font-semibold tracking-[0.25em] uppercase">
                        Software Developer
                    </span>

                    <span className="absolute inset-0 blur-md opacity-10 text-yellow-400">
                        Elar Gomez Software Developer
                    </span>
                </div>

                {/* Derecha */}
                <div className="text-zinc-500">
                    © {new Date().getFullYear()} Todos los derechos reservados
                </div>

            </div>
        </footer>
    );
}