import { NavLink } from "react-router-dom";

export default function MetricsNavbar(props) {
   return (
      <aside className="fixed top-0 bottom-0 left-56 w-56 py-6 px-8 bg-slate-800 border-r border-slate-600">
         <h1 className="text-base text-gray-100">Metrics</h1>
         <ul>
            {props.metrics
               ? props.metrics.map((metric) => (
                    <li
                       key={metric._id}
                       className="font-light text-sm truncate py-2 text-gray-300"
                    >
                       <NavLink to={"/metric/" + metric.name}>
                          {metric.name}
                       </NavLink>
                    </li>
                 ))
               : ""}
            <li className="font-light text-sm py-2 text-gray-300">
               <NavLink to="/addmetric">
                  <p className="font-light text-gray-300">
                     + Create New Metric
                  </p>
               </NavLink>
            </li>
         </ul>
      </aside>
   );
}
