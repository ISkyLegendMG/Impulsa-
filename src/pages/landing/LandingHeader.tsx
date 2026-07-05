import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

export function LandingHeader() {
    const location = useLocation();

    const navItems = [
        { label: "Beneficios", path: "#features" },
        { label: "Estadísticas", path: "#stats" },
        { label: "Emprender", path: "/emprender" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-xl">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

                {/* LOGO */}
                <Link to="/" className="flex items-center gap-3 group">

                    <img
                        src={logo}
                        alt="Impulsa+"
                        className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
                    />

                    <span className="text-lg font-semibold tracking-tight text-slate-900">
                        Impulsa<span className="text-slate-500">+</span>
                    </span>

                </Link>

                {/* NAV */}
                <nav className="hidden md:flex items-center gap-8 text-sm">

                    {navItems.map((item) => {
                        const active =
                            item.path.startsWith("/")
                                ? isActive(item.path)
                                : false;

                        return item.path.startsWith("#") ? (
                            <a
                                key={item.label}
                                href={item.path}
                                className="relative text-slate-500 hover:text-slate-900 transition group"
                            >
                                <span>{item.label}</span>

                                {/* underline animado */}
                                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ) : (
                            <Link
                                key={item.label}
                                to={item.path}
                                className={`relative transition ${active
                                        ? "text-slate-900 font-medium"
                                        : "text-slate-500 hover:text-slate-900"
                                    }`}
                            >
                                {item.label}

                                {active && (
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-slate-900"></span>
                                )}
                            </Link>
                        );
                    })}

                </nav>

                {/* ACTIONS */}
                <div className="hidden sm:flex items-center gap-3">

                    <Link
                        to="/login"
                        className="text-sm font-medium text-slate-500 hover:text-slate-900 transition"
                    >
                        Iniciar sesión
                    </Link>

                    <Link
                        to="/register"
                        className="rounded-full bg-gradient-to-r from-slate-900 to-slate-700 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                    >
                        Crear cuenta
                    </Link>

                </div>

            </div>

        </header>
    );
}