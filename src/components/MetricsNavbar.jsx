import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MetricService from "../services/metric.service";

export default function MetricsNavbar() {
   const [metrics, setMetrics] = useState([]);

   useEffect(() => {
      MetricService.get().then((res) => {
         setMetrics(res);
      });
   });

   return (
      <aside className="fixed top-0 bottom-0 left-64 w-64 p-4 bg-slate-800 border-r border-slate-600">
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
               <NavLink to="/AddMetric">
                  <p className="font-light text-gray-300">
                     + Create New Metric
                  </p>
               </NavLink>
            </li>
         </ul>
      </aside>
   );
}
