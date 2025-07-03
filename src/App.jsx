import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};

export default App;