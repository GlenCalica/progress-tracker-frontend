import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import PopupWrapper from "../components/PopupWrapper";
import UpdateMetricForm from "../components/UpdateMetricForm";
import DeleteMetric from "../components/DeleteMetric";
import EntriesTable from "../components/EntriesTable";
import AddEntryForm from "../components/AddEntryForm";

import EntryService from "../services/entry.service";

export default function Metric(props) {
   const navigate = useNavigate();

   let param = useParams();

   //for UpdateMetricForm
   const [popup, setPopup] = useState(false);

   const togglePopup = () => {
      setPopup(!popup);
   };

   //for EntriesTable and AddEntryForm
   const [entries, setEntries] = useState([]);

   const updateEntries = () => {
      EntryService.get(param.name).then((res) => {
         setEntries(res);
      });
   };

   useEffect(() => {
      EntryService.get(param.name).then((res) => {
         setEntries(res);
      });

      //redirect if metric doesn't exist
      if (props.metrics !== null) {
         const metricNames = props.metrics.map((metric) => metric.name);

         if (!metricNames.includes(param.name)) {
            console.log("metric doesn't exist");
            navigate("/addmetric");
         }
      }
   }, [navigate, param.name, props.metrics]);

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
            <AddEntryForm metric={param.name} updateEntries={updateEntries} />
            <EntriesTable metric={param.name} entries={entries} />
         </section>
      </>
   );
}
