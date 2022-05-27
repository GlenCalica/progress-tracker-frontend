import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import MetricService from "../services/metric.service";

import barchart from "../icons/bar-chart.svg";
import person from "../icons/person.svg";
import settings from "../icons/settings.svg";

export default function Menu(props) {
   const [metrics, setMetrics] = useState([]);

   useEffect(() => {
      if (props.user) {
         MetricService.get().then((res) => {
            setMetrics(res);
         });
      }
   }, [props.user]);

   return (
      <aside className="fixed top-0 bottom-0 left-0 w-64 p-4 bg-slate-900 border-r border-slate-600">
         <ul>
            <li className="mb-2 py-1 px-2">
               <NavLink to="/">
                  <h1 className="text-lg text-gray-100">Progress Tracker</h1>
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/metrics"
                  className={({ isActive }) =>
                     isActive
                        ? "flex my-2 py-2 px-2 rounded-md bg-slate-800"
                        : "flex my-2 py-2 px-2 rounded-md hover:bg-slate-800"
                  }
               >
                  <img src={barchart} alt="metrics icon" className="h-5 px-2" />
                  <p className="font-light text-gray-300">Metrics</p>
               </NavLink>
            </li>
            <li>
               <ul className="pl-8">
                  {metrics
                     ? metrics.map((metric) => (
                          <li
                             key={metric._id}
                             className="font-light text-sm py-2 text-gray-300"
                          >
                             <NavLink to={"/metric/" + metric.name}>
                                {metric.name}
                             </NavLink>
                          </li>
                       ))
                     : ""}
                  <li className="font-light text-sm py-2 text-gray-300">
                     + Create New Metric
                  </li>
               </ul>
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
                  <img src={person} alt="metrics icon" className="h-5 px-2" />
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
                  <img src={settings} alt="metrics icon" className="h-5 px-2" />
                  <p className="font-light text-gray-300">Settings</p>
               </NavLink>
            </li>
         </ul>
      </aside>
   );
}
