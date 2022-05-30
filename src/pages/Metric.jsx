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
            console.log(`navigating to /metric/${res[0].name}`);
            navigate(`/metric/${res[0].name}`);
         } else {
            navigate("/addmetric");
         }
      });
   };

   return (
      <>
         <MetricsNavbar />
         <section className="ml-64">
            <h1>{param.name}</h1>
            <UpdateMetricForm name={param.name} />
            <button onClick={deleteMetric}>Delete Metric</button>
         </section>
      </>
   );
}
