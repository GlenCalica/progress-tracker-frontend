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

      MetricService.update(props.name, formData).then(
         (res) => console.log(res),
         (err) => console.log(err)
      );

      navigate(`/metric/${name}`);
   };

   return (
      <form className="p-6 rounded-xl bg-slate-200" onSubmit={onSubmit}>
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
         <button type="submit" className="w-36 my-2 p-3 rounded bg-slate-400">
            Update Metric
         </button>
      </form>
   );
}
