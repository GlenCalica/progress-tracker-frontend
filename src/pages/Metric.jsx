import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PopupWrapper from "../components/PopupWrapper";
import UpdateMetricForm from "../components/UpdateMetricForm";
import DeleteMetric from "../components/DeleteMetric";
import EntriesTable from "../components/EntriesTable";
import AddEntryForm from "../components/AddEntryForm";

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
            <DeleteMetric name={param.name} setMetrics={props.setMetrics} />
            <AddEntryForm metric={param.name} />
            <EntriesTable metric={param.name} />
         </section>
      </>
   );
}
