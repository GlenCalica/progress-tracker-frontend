import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MetricService from "../services/metric.service";

export default function AddMetric(props) {
   const [formData, setFormData] = useState({
      name: "",
   });

   const { name } = formData;

   const navigate = useNavigate();

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();

      //Find if metric already exists
      const metricNames = props.metrics.map((metric) => metric.name);

      if (!metricNames.includes(name)) {
         //Add new metric
         MetricService.add(formData).then((res) => {
            //Need to make an api call to get the new metric id
            MetricService.get().then((res) => {
               const newMetric = res.find((metric) => metric.name === name);
               props.setMetrics((prevState) => [...prevState, newMetric]);
               navigate(`/metric/${name}`);
            });
         });
      } else {
         console.log("metric already exists");
      }
   };

   return (
      <>
         <section className="ml-56">
            <h1>Add Metric</h1>
            <form onSubmit={onSubmit} className="p-6 rounded-xl bg-slate-200">
               <div className="my-4">
                  <label htmlFor="name">Name</label>
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
                  Add Metric
               </button>
            </form>
         </section>
      </>
   );
}
