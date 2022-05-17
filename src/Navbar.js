import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import barchart from "./icons/bar-chart.svg";
import person from "./icons/person.svg";
import settings from "./icons/settings.svg";

export default function Menu() {
   const [metrics, setMetrics] = useState([]);

   useEffect(() => {
      setMetrics(["Dummy 1", "Dummy 2"]);
   }, []);

   return (
      <aside className="fixed top-0 bottom-0 left-0 w-64 p-4 bg-slate-900 border-r border-slate-600">
         <ul>
            <li className="mb-2 py-1 px-2">
               <NavLink to="/">
                  <h1 className="text-lg text-gray-100">Progress Tracker</h1>
               </NavLink>
            </li>
            <li className="my-2 py-1 px-2 rounded-md hover:bg-slate-800">
               <NavLink to="/metrics" className="flex">
                  <img src={barchart} alt="metrics icon" className="h-6 px-2" />
                  <p className="font-light text-gray-300">Metrics</p>
               </NavLink>
            </li>
            <li>
               <ul className="pl-8">
                  {metrics.map((metric) => (
                     <li key={metric} className="font-light text-gray-100">
                        <NavLink to={"/metric/" + metric}>{metric}</NavLink>
                     </li>
                  ))}
               </ul>
            </li>
            <li className="my-2 py-1 px-2 rounded-md hover:bg-slate-800">
               <NavLink to="/profile" className="flex">
                  <img src={person} alt="metrics icon" className="h-6 px-2" />
                  <p className="font-light text-gray-300">Profile</p>
               </NavLink>
            </li>
            <li className="my-2 py-1 px-2 rounded-md hover:bg-slate-800 absolute inset-x-4 bottom-0">
               <NavLink to="/settings" className="flex">
                  <img src={settings} alt="metrics icon" className="h-6 px-2" />
                  <p className="font-light text-gray-300">Settings</p>
               </NavLink>
            </li>
         </ul>
      </aside>
   );
}
