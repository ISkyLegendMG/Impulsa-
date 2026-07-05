import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useStore } from "@/lib/store";

import { AssistantWidget } from "./AssistantWidget";
import { AppShellHeader } from "./AppShellHeader";
import { AppShellSidebar } from "./AppShellSidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { currentUser, logout } = useStore();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen w-full bg-slate-50">
      <AppShellSidebar
        open={open}
        setOpen={setOpen}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <AppShellHeader
          open={open}
          setOpen={setOpen}
          currentUser={currentUser}
        />

        <main className="flex-1 overflow-x-hidden p-4 lg:p-8">
          {children}
        </main>
      </div>

      <AssistantWidget />
    </div>
  );
}