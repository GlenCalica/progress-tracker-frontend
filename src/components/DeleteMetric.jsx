import { useNavigate } from "react-router-dom";

import MetricService from "../services/metric.service";

export default function DeleteMetric(props) {
   const navigate = useNavigate();

   const deleteMetric = () => {
      MetricService.delete(props.name).then(
         (res) => {
            props.setMetrics((prevState) =>
               prevState.filter((metric) => metric.name !== props.name)
            );
            navigate("/addmetric");
         },
         (err) => console.log(err)
      );
   };

   return (
      <button
         className="w-36 my-2 p-3 rounded bg-slate-400"
         onClick={deleteMetric}
      >
         Delete Metric
      </button>
   );
}
