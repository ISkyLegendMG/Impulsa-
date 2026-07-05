import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useStore } from "@/lib/store";
import { AppShell } from "@/components/AppShell";

export default function AppLayout() {
    const { currentUser } = useStore();
    const location = useLocation();

    if (!currentUser) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return (
        <AppShell>
            <Outlet />
        </AppShell>
    );
}