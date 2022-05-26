import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Metrics from "./pages/Metrics";
import Metric from "./pages/Metric";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

import Login from "./pages/Login";
import Register from "./pages/Register";

import NotFound from "./pages/NotFound";

import AuthService from "./services/auth.service";

function App() {
   const [currentUser, setCurrentUser] = useState({
      id: "",
      name: "",
      email: "",
   });

   const { id, name, email } = currentUser;

   useEffect(() => {
      const user = AuthService.getCurrentUser();

      if (user) {
         setCurrentUser(user);
      } else {
         console.log("user is null");
      }
   }, []);

   const wrapNavbar = (page) => {
      return (
         <>
            <Navbar user={currentUser} />
            <main className="ml-64 px-16 py-12">{page}</main>
         </>
      );
   };

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={wrapNavbar(<Home />)} />
            <Route path="/metrics" element={wrapNavbar(<Metrics />)} />
            <Route path="/metric/:name" element={wrapNavbar(<Metric />)} />
            <Route path="/profile" element={wrapNavbar(<Profile />)} />
            <Route path="/settings" element={wrapNavbar(<Settings />)} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
