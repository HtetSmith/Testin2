import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";


function Logout() {
  localStorage.clear(); // Clear storage when logging out
  return <Navigate to="/login" replace />;
}

function RegisterAndLogout() {
  localStorage.clear(); // Clear storage when registering
  return <Register />;
}

function App() {
  return (
    <div className="min-h-screen bg-[#ffede2] font-inter">
      <BrowserRouter>
        <Routes>
          {/* Home page with protected route */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          
          {/* Login route */}
          <Route path="/login" element={<Login />} />
          
          {/* Register route with logout */}
          <Route path="/register" element={<RegisterAndLogout />} />
          
          {/* Logout route */}
          <Route path="/logout" element={<Logout />} />
          
          {/* Fallback route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
