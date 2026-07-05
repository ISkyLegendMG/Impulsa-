import { Bell, Search, Menu, X } from "lucide-react";
import type { User } from "@/lib/mock-data";

type AppShellHeaderProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    currentUser: User | null;
};

export function AppShellHeader({ open, setOpen, currentUser }: AppShellHeaderProps) {
    return (
        <header className="h-16 bg-card border-b border-border flex items-center px-4 lg:px-6 gap-4 sticky top-0 z-20">
            <button className="lg:hidden p-2 -ml-2" onClick={() => setOpen(!open)} aria-label="Menu">
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="flex-1 max-w-md relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                    type="search"
                    placeholder="Buscar..."
                    className="w-full h-10 pl-10 pr-4 rounded-lg bg-muted text-sm outline-none focus:ring-2 focus:ring-ring"
                />
            </div>

            <button className="p-2 rounded-lg hover:bg-muted relative" aria-label="Notificaciones">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
            </button>

            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-hover grid place-items-center text-primary-foreground text-sm font-semibold">
                    {currentUser?.name?.charAt(0) ?? "U"}
                </div>
                <div className="hidden sm:block">
                    <div className="text-sm font-medium leading-tight">{currentUser?.name}</div>
                    <div className="text-xs text-muted-foreground">{currentUser?.email}</div>
                </div>
            </div>
        </header>
    );
}
