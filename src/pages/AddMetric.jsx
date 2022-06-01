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

      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));

      //checks if metric exists and adds it
      MetricService.get()
         .then((res) => res.map((metric) => metric.name))
         .then((res) => {
            if (!res.includes(name)) {
               MetricService.add(formData).then((res) => {
                  updateMetrics();
                  navigate(`/metric/${name}`);
               });
            } else {
               console.log("metric already exists");
            }
         });
   };

   const updateMetrics = () => {
      MetricService.get().then((res) => {
         const newMetric = res.find((metric) => {
            return metric.name === name;
         });
         props.setMetrics((prevState) => [...prevState, newMetric]);
      });
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
