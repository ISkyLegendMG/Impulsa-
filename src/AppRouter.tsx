import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Emprender from "./pages/Emprender";
import Dashboard from "@/pages/Dashboard";
import Catalog from "@/pages/Catalog";
import Checkout from "@/pages/Checkout";
import CoursePlayer from "@/pages/CoursePlayer";
import MyCourses from "@/pages/MyCourses";
import Profile from "@/pages/Profile";
import Sales from "@/pages/Sales";
import Students from "@/pages/Students";
import StudentDetail from "@/pages/StudentDetail";
import CoursesAdmin from "@/pages/CoursesAdmin";
import NotFound from "@/pages/NotFound";
import AppLayout from "@/layouts/AppLayout";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLIC */}
                <Route path="/" element={<Landing />} />
                <Route path="/emprender" element={<Emprender />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* APP */}
                <Route path="/app" element={<AppLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="checkout/:id" element={<Checkout />} />
                    <Route path="course/:id" element={<CoursePlayer />} />
                    <Route path="my-courses" element={<MyCourses />} />
                    <Route path="profile" element={<Profile />} />

                    {/* ADMIN */}
                    <Route path="courses" element={<CoursesAdmin />} />
                    <Route path="students" element={<Students />} />
                    <Route path="students/:id" element={<StudentDetail />} />
                    <Route path="sales" element={<Sales />} />
                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}