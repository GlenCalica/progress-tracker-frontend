import React from "react";
import barchart from "./icons/bar-chart.svg";
import person from "./icons/person.svg";
import settings from "./icons/settings.svg";

export default function Menu() {
   return (
      <aside className="fixed top-0 bottom-0 left-0 w-64 p-4 bg-gray-400">
         <ul>
            <li className="my-2 py-1 px-2">Progress Tracker</li>
            <li className="flex my-2 py-1 px-2 rounded-md hover:bg-gray-500">
               <img src={barchart} alt="metrics icon" className="h-6 px-2" />
               <p>Metrics</p>
            </li>
            <li className="flex my-2 py-1 px-2 rounded-md hover:bg-gray-500">
               <img src={person} alt="metrics icon" className="h-6 px-2" />
               <p>Profile</p>
            </li>
            <li className="flex my-2 py-1 px-2 rounded-md hover:bg-gray-500">
               <img src={settings} alt="metrics icon" className="h-6 px-2" />
               <p>Settings</p>
            </li>
         </ul>
      </aside>
   );
}
