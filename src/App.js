import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar";

import Home from "./Home";
import Metrics from "./Metrics";
import Settings from "./Settings";
import Profile from "./Profile";

function App() {
   return (
      <BrowserRouter>
         <Navbar />
         <main className="ml-64 px-16 py-12">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/metrics" element={<Metrics />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/settings" element={<Settings />} />
            </Routes>
         </main>
      </BrowserRouter>
   );
}

export default App;
