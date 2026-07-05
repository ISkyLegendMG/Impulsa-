import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";
import AppRouter from "./AppRouter";
import { StoreProvider } from "@/lib/store";
import { Footer } from "@/components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <StoreProvider>
            <AppRouter />
            <Footer />
        </StoreProvider>
    </React.StrictMode>
);