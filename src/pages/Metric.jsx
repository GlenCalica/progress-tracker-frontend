import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MetricService from "../services/metric.service";

export default function Metric() {
   const [formData, setFormData] = useState({
      name: "",
   });

   const { name } = formData;

   let param = useParams();
   const navigate = useNavigate();

   useEffect(() => {}, [param.name]);

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
      </>
   );
}
