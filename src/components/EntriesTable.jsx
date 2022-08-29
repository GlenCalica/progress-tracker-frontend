import EntryService from "../services/entry.service";

import updateIcon from "../icons/pencil.svg";
import deleteIcon from "../icons/trash.svg";

export default function EntriesTable(props) {
   const deleteEntry = (id) => {
      EntryService.delete(props.metric, id).then(
         (res) => props.updateEntries(),
         (err) => console.log(err)
      );
   };

   return (
      <>
         <div className="my-6 p-6 rounded-xl bg-slate-100">
            <table className="">
               <thead>
                  <tr>
                     <th className="p-2">Date</th>
                     <th className="p-2">Value</th>
                  </tr>
               </thead>
               <tbody>
                  {props.entries
                     ? props.entries
                          .sort(
                             (entry1, entry2) =>
                                new Date(entry2.date) - new Date(entry1.date)
                          )
                          .map((entry) => (
                             <tr key={entry._id}>
                                <td className="p-2">
                                   {new Date(entry.date).toLocaleDateString(
                                      "en-US",
                                      {
                                         month: "short",
                                         day: "numeric",
                                         year: "numeric",
                                      }
                                   )}
                                </td>
                                <td className="p-2">{entry.value}</td>
                                <td>
                                   <img
                                      src={updateIcon}
                                      alt="update"
                                      className="h-4"
                                   />
                                </td>
                                <td onClick={() => deleteEntry(entry._id)}>
                                   <img
                                      src={deleteIcon}
                                      alt="delete"
                                      className="h-4"
                                   />
                                </td>
                             </tr>
                          ))
                     : ""}
               </tbody>
            </table>
         </div>
      </>
   );
}
