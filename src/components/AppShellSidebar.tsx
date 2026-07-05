import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    BookOpen,
    Users,
    ShoppingCart,
    GraduationCap,
    LogOut,
    X,
} from "lucide-react";
import logo from "@/assets/logo.png";
import type { User } from "@/lib/mock-data";

type AppShellSidebarProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onLogout: () => void;
    currentUser: User | null;
};

export function AppShellSidebar({
    open,
    setOpen,
    onLogout,
    currentUser,
}: AppShellSidebarProps) {
    const isAdmin = currentUser?.role === "admin";

    const nav = isAdmin
        ? [
            { to: "/app", label: "Dashboard", icon: LayoutDashboard, end: true },
            { to: "/app/courses", label: "Cursos", icon: BookOpen },
            { to: "/app/students", label: "Estudiantes", icon: Users },
            { to: "/app/sales", label: "Compras", icon: ShoppingCart },
            { to: "/app/profile", label: "Perfil", icon: Users },
        ]
        : [
            { to: "/app", label: "Inicio", icon: LayoutDashboard, end: true },
            { to: "/app/catalog", label: "Catálogo", icon: BookOpen },
            { to: "/app/my-courses", label: "Mis cursos", icon: GraduationCap },
            { to: "/app/profile", label: "Perfil", icon: Users },
        ];

    return (
        <>
            {/* BACKDROP SOLO MÓVIL */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setOpen(false)}
            />

            <aside
                className={`
                    fixed lg:sticky inset-y-0 left-0 z-50 w-72

                    transform transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0

                    bg-white
                    text-slate-900

                    border-r border-slate-200
                    shadow-2xl

                    flex flex-col h-screen overflow-hidden
                `}
            >
                {/* HEADER */}
                <div className="flex items-center justify-between h-16 px-5 border-b border-slate-200 bg-white flex-shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#facc15]/20 to-[#2563eb]/20 border border-slate-200 grid place-items-center overflow-hidden shadow-sm">
                            <img src={logo} alt="IMPULSA" className="w-8 h-8 object-contain" />
                        </div>

                        <div className="leading-tight">
                            <div className="font-semibold text-sm text-slate-900">IMPULSA+</div>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                {isAdmin ? "Panel admin" : "Estudiante"}
                            </div>
                        </div>
                    </div>

                    {/* cerrar solo móvil */}
                    <button
                        onClick={() => setOpen(false)}
                        className="lg:hidden p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                        <X className="w-5 h-5 text-slate-500" />
                    </button>
                </div>

                {/* NAV */}
                <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
                    {nav.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `
                                    flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-medium transition-all duration-200

                                    ${isActive
                                        ? "bg-gradient-to-r from-[#facc15]/20 to-[#2563eb]/20 text-[#2563eb] shadow-sm"
                                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                                    }
                                    `
                                }
                            >
                                {Icon && <Icon className="w-4 h-4" />}
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* FOOTER */}
                <div className="p-3 border-t border-slate-200 bg-white/80 backdrop-blur-sm flex-shrink-0">
                    <div className="mb-3 px-3 py-2 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Sesión activa</p>
                        <p className="text-sm font-semibold text-slate-900 truncate">
                            {currentUser?.name || "Usuario"}
                        </p>
                    </div>

                    <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-200"
                    >
                        <LogOut className="w-4 h-4" />
                        Cerrar sesión
                    </button>
                </div>
            </aside>
        </>
    );
}