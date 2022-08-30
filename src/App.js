import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Metric from "./pages/Metric";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Navbar from "./components/Navbar";
import MetricsNavbar from "./components/MetricsNavbar";
import AddMetric from "./pages/AddMetric";

import NotFound from "./pages/NotFound";

import AuthService from "./services/auth.service";
import MetricService from "./services/metric.service";

function App() {
   const [currentUser, setCurrentUser] = useState({
      id: "",
      name: "",
      email: "",
   });

   const [metrics, setMetrics] = useState(null);

   useEffect(() => {
      const user = AuthService.getCurrentUser();

      if (user) {
         setCurrentUser(user);
      } else {
         console.log("user is null");
      }

      MetricService.get().then((res) => {
         setMetrics(res);
      });
   }, []);

   const wrapNavbar = (page) => {
      return (
         <>
            <Navbar name={currentUser.name} metrics={metrics} />
            <main className="ml-56 px-16 py-12">{page}</main>
         </>
      );
   };

   const wrapMetricsNavbar = (page) => {
      return wrapNavbar(
         <>
            <MetricsNavbar metrics={metrics} />
            {page}
         </>
      );
   };

   const clearData = () => {
      setCurrentUser({
         id: "",
         name: "",
         email: "",
      });

      setMetrics(null);
   };

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={wrapNavbar(<Home />)} />
            <Route
               path="/metric/:name"
               element={wrapMetricsNavbar(
                  <Metric metrics={metrics} setMetrics={setMetrics} />
               )}
            />
            <Route
               path="/profile"
               element={wrapNavbar(<Profile clearData={clearData} />)}
            />
            <Route path="/settings" element={wrapNavbar(<Settings />)} />
            <Route
               path="/login"
               element={
                  <Login setUser={setCurrentUser} setMetrics={setMetrics} />
               }
            />
            <Route
               path="/register"
               element={<Register setUser={setCurrentUser} />}
            />
            <Route
               path="/addmetric"
               element={wrapMetricsNavbar(
                  <AddMetric metrics={metrics} setMetrics={setMetrics} />
               )}
            />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
