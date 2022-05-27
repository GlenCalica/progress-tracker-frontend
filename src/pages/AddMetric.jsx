import { useState } from "react";

import MetricService from "../services/metric.service";

export default function AddMetric() {
   const [formData, setFormData] = useState({
      name: "",
   });

   const { name } = formData;

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = async (e) => {
      e.preventDefault();

      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));

      const metrics = await MetricService.get();
      const metricNames = metrics.map((metric) => metric.name);

      if (!metricNames.includes(name)) {
         const response = await MetricService.add(formData);
         console.log(response);
      } else {
         console.log("metric already exists");
      }
   };

   return (
      <form onSubmit={onSubmit}>
         <h1>Add Metric</h1>
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
         <button type="submit" className="w-36 my-2 p-3 rounded bg-slate-400">
            Add Metric
         </button>
      </form>
   );
}
