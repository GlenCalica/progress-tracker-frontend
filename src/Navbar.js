import React from "react";
import { Link } from "react-router-dom";

import barchart from "./icons/bar-chart.svg";
import person from "./icons/person.svg";
import settings from "./icons/settings.svg";

export default function Menu() {
   return (
      <aside className="fixed top-0 bottom-0 left-0 w-64 p-4 bg-slate-900">
         <ul>
            <li className="mb-2 py-1 px-2">
               <Link to="/">
                  <h1 className="text-lg text-gray-100">Progress Tracker</h1>
               </Link>
            </li>
            <li className="my-2 py-1 px-2 rounded-md hover:bg-gray-500">
               <Link to="/metrics" className="flex">
                  <img src={barchart} alt="metrics icon" className="h-6 px-2" />
                  <p className="font-light text-gray-300">Metrics</p>
               </Link>
            </li>
            <li className="my-2 py-1 px-2 rounded-md hover:bg-gray-500">
               <Link to="/profile" className="flex">
                  <img src={person} alt="metrics icon" className="h-6 px-2" />
                  <p className="font-light text-gray-300">Profile</p>
               </Link>
            </li>
            <li className="my-2 py-1 px-2 rounded-md hover:bg-gray-500">
               <Link to="/settings" className="flex">
                  <img src={settings} alt="metrics icon" className="h-6 px-2" />
                  <p className="font-light text-gray-300">Settings</p>
               </Link>
            </li>
         </ul>
      </aside>
   );
}
