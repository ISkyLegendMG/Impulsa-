import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-items-center bg-background px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-2 text-muted-foreground">Página no encontrada</p>
        <Link to="/" className="mt-6 inline-flex px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium">Ir al inicio</Link>
      </div>
    </div>
  );
}
