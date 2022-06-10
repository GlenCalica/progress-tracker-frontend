import { useState } from "react";

import EntryService from "../services/entry.service";

export default function AddEntryForm(props) {
   const [formData, setFormData] = useState({
      date: "",
      value: "",
   });

   const { date, value } = formData;

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();

      EntryService.add({
         metric: props.metric,
         ...formData,
      });

      setFormData({
         date: "",
         value: "",
      });

      props.updateEntries();
   };

   return (
      <>
         <form
            onSubmit={onSubmit}
            style={{ width: "26rem" }}
            className="my-6 p-6 rounded-xl bg-slate-200"
         >
            <h2 className="font-bold text-xl">New Entry</h2>
            <div className="flex flex-wrap">
               <div>
                  <label htmlFor="date">Date</label>
                  <br />
                  <input
                     type="date"
                     id="date"
                     name="date"
                     value={date}
                     onChange={onChange}
                     className="w-34 mt-1 p-2 rounded"
                  />
               </div>

               <div className="mx-4">
                  <label htmlFor="value">Value</label>
                  <br />
                  <input
                     type="text"
                     id="value"
                     name="value"
                     value={value}
                     onChange={onChange}
                     className="w-24 mt-1 p-2 rounded"
                  />
               </div>
               <button
                  type="submit"
                  className="self-end w-20 h-10 rounded bg-slate-400"
               >
                  Add
               </button>
            </div>
         </form>
      </>
   );
}
