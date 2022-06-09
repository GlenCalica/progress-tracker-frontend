import { useState, useEffect } from "react";
import EntryService from "../services/entry.service";

export default function EntriesTable(props) {
   const [entries, setEntries] = useState([]);

   useEffect(() => {
      EntryService.get(props.metric).then((res) => {
         setEntries(res);
      });
   }, [props.metric]);

   return (
      <>
         <table className="border-collapse border border-slate-900">
            <thead>
               <tr>
                  <th className="border border-slate-900">Date</th>
                  <th className="border border-slate-900">Value</th>
               </tr>
            </thead>
            <tbody>
               {entries
                  ? entries.map((entry) => (
                       <tr key={entry._id}>
                          <td className="border border-slate-900">
                             {entry.date}
                          </td>
                          <td className="border border-slate-900">
                             {entry.value}
                          </td>
                       </tr>
                    ))
                  : ""}
            </tbody>
         </table>
      </>
   );
}
