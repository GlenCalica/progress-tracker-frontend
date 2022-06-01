import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetricService from "../services/metric.service";

export default function UpdateMetricForm(props) {
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

      if (name !== "") {
         MetricService.update(props.name, formData).then(
            (res) => {
               updateMetrics(props.name, name);
               navigate(`/metric/${name}`);
            },
            (err) => {
               console.log(err);
            }
         );
      }

      props.toggle();
   };

   const updateMetrics = (prevName, name) => {
      const metric = props.metrics.find((metric) => {
         return metric.name === prevName;
      });

      //I'm guessing this assigns by reference?
      const index = props.metrics.indexOf(metric);
      const metrics = props.metrics;

      //This changes props.metrics directly
      metrics[index].name = name;

      //Assign prevState to [...prevState] solely to update itself
      props.setMetrics((prevState) => [...prevState]);
   };

   return (
      <form onSubmit={onSubmit}>
         <div className="px-6 py-4 rounded-t-lg bg-slate-300">
            <h1 className="text-lg font-normal">Editing {props.name}</h1>
         </div>
         <div className="p-6">
            <label htmlFor="name">Metric Name</label>
            <br />
            <input
               type="name"
               id="name"
               name="name"
               value={name}
               onChange={onChange}
               className="w-full mt-1 p-2 rounded"
            />
            <button
               type="submit"
               className="w-24 mt-4 p-2 r-0 rounded bg-slate-400"
            >
               Save
            </button>
         </div>
      </form>
   );
}
