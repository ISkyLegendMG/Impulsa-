import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sparkles, Home, BookOpen, BarChart3, Briefcase, LogIn, UserPlus } from "lucide-react";
import logo from "@/assets/logo.png";

export function LandingHeader() {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { label: "Beneficios", path: "#features", icon: Sparkles },
        { label: "Estadísticas", path: "#stats", icon: BarChart3 },
        { label: "Emprender", path: "/emprender", icon: Briefcase },
    ];

    const isActive = (path: string) => location.pathname === path;

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-xl shadow-sm">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-gradient-to-br from-[#facc15]/20 to-[#2563eb]/20 border border-slate-200 grid place-items-center shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <img
                            src={logo}
                            alt="IMPULSA+"
                            className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                        />
                    </div>

                    <div className="leading-tight">
                        <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900">
                            IMPULSA<span className="text-[#2563eb]">+</span>
                        </span>
                        <p className="hidden sm:block text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400">
                            Aprende sin límites
                        </p>
                    </div>
                </Link>

                {/* NAV DESKTOP */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const active =
                            item.path.startsWith("/")
                                ? isActive(item.path)
                                : false;

                        return item.path.startsWith("#") ? (
                            <a
                                key={item.label}
                                href={item.path}
                                className="relative px-4 py-2 rounded-2xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 group"
                            >
                                <span>{item.label}</span>
                                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 -translate-x-1/2 bg-[#2563eb] transition-all duration-300 group-hover:w-6"></span>
                            </a>
                        ) : (
                            <Link
                                key={item.label}
                                to={item.path}
                                className={`relative px-4 py-2 rounded-2xl text-sm font-medium transition-all duration-200 ${active
                                        ? "bg-gradient-to-r from-[#facc15]/20 to-[#2563eb]/20 text-[#2563eb] shadow-sm"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                                    }`}
                            >
                                {item.label}
                                {active && (
                                    <span className="absolute left-1/2 -bottom-1 h-[2px] w-6 -translate-x-1/2 bg-[#2563eb]"></span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* ACTIONS DESKTOP */}
                <div className="hidden sm:flex items-center gap-2">
                    <Link
                        to="/login"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
                    >
                        <LogIn className="w-4 h-4" />
                        Iniciar sesión
                    </Link>

                    <Link
                        to="/register"
                        className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] px-5 py-2 text-sm font-semibold shadow-sm hover:shadow-md transition-all border border-[#2563eb]/20 hover:from-[#facc15]/40 hover:to-[#2563eb]/40"
                    >
                        <UserPlus className="w-4 h-4" />
                        Crear cuenta
                    </Link>
                </div>

                {/* BOTÓN HAMBURGUESA - MÓVIL */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden relative w-10 h-10 rounded-2xl hover:bg-slate-100 transition-colors flex items-center justify-center"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-5 h-5">
                        <span className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}>
                            <Menu className="w-5 h-5 text-slate-700" />
                        </span>
                        <span className={`absolute inset-0 transition-all duration-300 ${mobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
                            <X className="w-5 h-5 text-slate-700" />
                        </span>
                    </div>
                </button>

            </div>

            {/* MENÚ MÓVIL - PREMIUM */}
            <div
                className={`
                    md:hidden overflow-hidden transition-all duration-400 ease-in-out
                    ${mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <div className="border-t border-slate-200/60 bg-white/95 backdrop-blur-xl px-4 py-6 space-y-2 shadow-inner">

                    {/* Links de navegación */}
                    <div className="space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active =
                                item.path.startsWith("/")
                                    ? isActive(item.path)
                                    : false;

                            const content = (
                                <>
                                    {Icon && <Icon className="w-4 h-4" />}
                                    <span>{item.label}</span>
                                </>
                            );

                            return item.path.startsWith("#") ? (
                                <a
                                    key={item.label}
                                    href={item.path}
                                    onClick={handleNavClick}
                                    className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
                                >
                                    {content}
                                </a>
                            ) : (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    onClick={handleNavClick}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${active
                                            ? "bg-gradient-to-r from-[#facc15]/20 to-[#2563eb]/20 text-[#2563eb] shadow-sm"
                                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                        }`}
                                >
                                    {content}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Separador con gradiente */}
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200/60"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white/95 px-4 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                                Comienza ahora
                            </span>
                        </div>
                    </div>

                    {/* Acciones móvil con iconos */}
                    <div className="space-y-2">
                        <Link
                            to="/login"
                            onClick={handleNavClick}
                            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-200"
                        >
                            <LogIn className="w-4 h-4" />
                            Iniciar sesión
                        </Link>

                        <Link
                            to="/register"
                            onClick={handleNavClick}
                            className="flex items-center justify-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold bg-gradient-to-r from-[#facc15]/30 to-[#2563eb]/30 text-[#2563eb] border border-[#2563eb]/20 hover:from-[#facc15]/40 hover:to-[#2563eb]/40 transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            <UserPlus className="w-4 h-4" />
                            Crear cuenta gratis
                        </Link>
                    </div>

                    {/* Footer móvil */}
                    <div className="pt-4 mt-2 border-t border-slate-200/60">
                        <p className="text-center text-[10px] text-slate-400 font-medium uppercase tracking-[0.15em]">
                            © 2026 IMPULSA+ · Aprende sin límites
                        </p>
                    </div>

                </div>
            </div>

        </header>
    );
}