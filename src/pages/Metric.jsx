import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PopupWrapper from "../components/PopupWrapper";
import UpdateMetricForm from "../components/UpdateMetricForm";

import MetricService from "../services/metric.service";

export default function Metric(props) {
   const [popup, setPopup] = useState(false);

   const navigate = useNavigate();

   let param = useParams();

   useEffect(() => {
      const metricNames = props.metrics.map((metric) => metric.name);

      if (!metricNames.includes(param.name)) {
         console.log("metric doesn't exist");
         navigate("/addmetric");
      }
   });

   const deleteMetric = () => {
      MetricService.delete(param.name).then(
         (res) => {
            props.setMetrics((prevState) =>
               prevState.filter((metric) => metric.name !== param.name)
            );
            navigate("/addmetric");
         },
         (err) => console.log(err)
      );
   };

   const togglePopup = () => {
      setPopup(!popup);
   };

   return (
      <>
         <section className="ml-56">
            <h1>{param.name}</h1>
            <button
               onClick={togglePopup}
               className="w-36 my-2 p-3 rounded bg-slate-400"
            >
               Edit
            </button>
            <PopupWrapper
               show={popup}
               toggle={togglePopup}
               item={
                  <UpdateMetricForm
                     name={param.name}
                     metrics={props.metrics}
                     setMetrics={props.setMetrics}
                     toggle={togglePopup}
                  />
               }
            />

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
