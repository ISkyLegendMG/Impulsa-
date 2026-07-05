export function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`w-full h-2 bg-muted rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-primary transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

export function StatCard({
  label,
  value,
  hint,
  icon,
}: {
  label: string;
  value: string | number;
  hint?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-start justify-between">
        <div className="text-sm text-muted-foreground">{label}</div>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
      <div className="text-2xl font-bold mt-2">{value}</div>
      {hint && <div className="text-xs text-muted-foreground mt-1">{hint}</div>}
    </div>
  );
}

export function Badge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "muted";
}) {
  const styles = {
    default: "bg-primary/10 text-primary",
    success: "bg-success/15 text-success",
    warning: "bg-warning/20 text-warning-foreground",
    muted: "bg-muted text-muted-foreground",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}>
      {children}
    </span>
  );
}
