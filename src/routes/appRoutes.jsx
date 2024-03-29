import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import App from "../App.jsx";
import Login from '../components/login.jsx'
import RequireAuth from './requireAuth.jsx'

const LandingPage = lazy(() => import("../pages/landing_page.jsx")); 
const UserProfile = lazy(() => import("../pages/profile.jsx")); 
const AppRoutes = () => {
  return (
    <Router basename="">
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<App />} >
            <Route path="home" element={<Suspense fallback="Loading..."><LandingPage /></Suspense>} />
            <Route path="profile" element={<Suspense fallback="Loading..."><UserProfile /> </Suspense>} />
          </Route>
        </Route>
        <Route path="*" component={<>404 Not Found!</>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
