import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import barchartIcon from "../icons/bar-chart.svg";
import personIcon from "../icons/person.svg";
import settingsIcon from "../icons/settings.svg";

export default function Menu(props) {
   //Sets NavLink path to first metric or AddMetric page
   const [firstMetric, setFirstMetric] = useState("/addmetric");

   const location = useLocation();

   useEffect(() => {
      if (props.metrics !== null && props.metrics.length)
         setFirstMetric(`/metric/${props.metrics[0].name}`);
   }, [props.metrics]);

   return (
      <aside className="fixed top-0 bottom-0 left-0 w-56 p-4 bg-slate-900 border-r border-slate-600">
         <ul>
            <li className="mb-2 py-1 px-2">
               <NavLink to="/">
                  <h1 className="text-lg text-gray-100">Progress Tracker</h1>
               </NavLink>
            </li>
            <li>
               <NavLink
                  to={firstMetric}
                  className={
                     location.pathname.startsWith("/metric/") ||
                     location.pathname === "/addmetric"
                        ? "flex my-2 py-2 px-2 rounded-md bg-slate-800"
                        : "flex my-2 py-2 px-2 rounded-md hover:bg-slate-800"
                  }
               >
                  <img
                     src={barchartIcon}
                     alt="metrics icon"
                     className="h-5 px-2"
                  />
                  <p className="font-light text-gray-300">Metrics</p>
               </NavLink>
            </li>

            <li>
               <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                     isActive
                        ? "flex my-2 py-2 px-2 rounded-md bg-slate-800"
                        : "flex my-2 py-2 px-2 rounded-md hover:bg-slate-800"
                  }
               >
                  <img
                     src={personIcon}
                     alt="metrics icon"
                     className="h-5 px-2"
                  />
                  <p className="font-light text-gray-300">{props.name}</p>
               </NavLink>
            </li>
            <li className="absolute inset-x-4 bottom-0">
               <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                     isActive
                        ? "flex my-2 py-2 px-2 rounded-md bg-slate-800"
                        : "flex my-2 py-2 px-2 rounded-md hover:bg-slate-800"
                  }
               >
                  <img
                     src={settingsIcon}
                     alt="metrics icon"
                     className="h-5 px-2"
                  />
                  <p className="font-light text-gray-300">Settings</p>
               </NavLink>
            </li>
         </ul>
      </aside>
   );
}
