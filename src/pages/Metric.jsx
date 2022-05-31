import { useNavigate, useParams } from "react-router-dom";

import MetricService from "../services/metric.service";

import MetricsNavbar from "../components/MetricsNavbar";
import UpdateMetricForm from "../components/UpdateMetricForm";

export default function Metric() {
   const navigate = useNavigate();
   let param = useParams();

   const deleteMetric = () => {
      MetricService.delete(param.name).then(
         (res) => redirect(),
         (err) => console.log(err)
      );
   };

   const redirect = () => {
      MetricService.get().then((res) => {
         if (res.length) {
            navigate(`/metric/${res[0].name}`);
         } else {
            navigate("/addmetric");
         }
      });
   };

   return (
      <>
         <MetricsNavbar />
         <section className="ml-56">
            <h1>{param.name}</h1>
            <UpdateMetricForm name={param.name} />
            <button
               className="w-36 my-2 p-3 rounded bg-slate-400"
               onClick={deleteMetric}
            >
               Delete Metric
            </button>
         </section>
      </>
   );
}
