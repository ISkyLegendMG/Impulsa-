import { Bell, Search, Menu, X } from "lucide-react";
import type { User } from "@/lib/mock-data";

type AppShellHeaderProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: User | null;
};

export function AppShellHeader({ open, setOpen, currentUser }: AppShellHeaderProps) {
    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 lg:px-6 gap-4 sticky top-0 z-30 shadow-sm">

            {/* Hamburguesa - SIEMPRE visible en móvil */}
            <button
                className="lg:hidden p-2"
                onClick={() => setOpen(!open)}
            >
                {open ? <X /> : <Menu />}
            </button>

            {/* Search */}
            <div className="hidden sm:flex flex-1 max-w-md relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                    type="search"
                    placeholder="Buscar..."
                    className="w-full h-10 pl-10 pr-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm outline-none focus:ring-2 focus:ring-[#facc15]/30 focus:border-[#facc15] transition"
                />
            </div>

            {/* Notificaciones */}
            <button className="p-2 rounded-2xl hover:bg-slate-100 relative ml-auto lg:ml-0 transition-colors">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#2563eb] rounded-full" />
            </button>

            {/* Usuario */}
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] grid place-items-center text-sm font-semibold shadow-sm">
                    {currentUser?.name?.charAt(0).toUpperCase() ?? "U"}
                </div>

                <div className="hidden sm:block">
                    <div className="text-sm font-medium text-slate-900 leading-tight">
                        {currentUser?.name}
                    </div>
                    <div className="text-xs text-slate-500">
                        {currentUser?.email}
                    </div>
                </div>
            </div>
        </header>
    );
}