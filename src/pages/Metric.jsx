import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import MetricService from "../services/metric.service";

export default function Metric() {
   const [formData, setFormData] = useState({
      name: "",
   });

   const { name } = formData;

   let param = useParams();
   const navigate = useNavigate();

   const [metrics, setMetrics] = useState([]);

   useEffect(() => {
      MetricService.get().then((res) => {
         setMetrics(res);
      });
   });

   const deleteMetric = () => {
      MetricService.delete(param.name).then(
         (res) => console.log(res),
         (err) => console.log(err)
      );

      navigate("/");
   };

   // const updateMetric = () => {
   //    MetricService.update(param.name, data).then(
   //       (res) => console.log(res),
   //       (err) => console.log(err)
   //    );

   //    navigate("/");
   // }

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();

      MetricService.update(param.name, formData).then(
         (res) => console.log(res),
         (err) => console.log(err)
      );

      navigate("/");
   };

   return (
      <>
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
                  + Create New Metric
               </li>
            </ul>
         </aside>
         <section className="ml-64">
            <h1>{param.name}</h1>
            <form onSubmit={onSubmit}>
               <div className="my-4">
                  <label htmlFor="name">New Name</label>
                  <br />
                  <input
                     type="name"
                     id="name"
                     name="name"
                     value={name}
                     onChange={onChange}
                     className="w-full mt-1 p-2 rounded"
                  />
               </div>
               <button
                  type="submit"
                  className="w-36 my-2 p-3 rounded bg-slate-400"
               >
                  Update Metric
               </button>
            </form>
            <button onClick={deleteMetric}>Delete Metric</button>
         </section>
      </>
   );
}
