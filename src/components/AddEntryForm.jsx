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

      console.log(props.metric);

      EntryService.add({
         metric: props.metric,
         ...formData,
      }).then((res) => {
         console.log(res);
      });

      setFormData({
         date: "",
         value: "",
      });
   };

   return (
      <>
         <form
            onSubmit={onSubmit}
            style={{ width: "32rem" }}
            className="my-6 p-6 rounded-xl bg-slate-200"
         >
            <h2>New Entry</h2>
            <div>
               <div className="my-4">
                  <label htmlFor="date">Date</label>
                  <br />
                  <input
                     type="date"
                     id="date"
                     name="date"
                     value={date}
                     onChange={onChange}
                     className="w-full mt-1 p-2 rounded"
                  />
               </div>

               <div className="my-4">
                  <label htmlFor="value">Value</label>
                  <br />
                  <input
                     type="text"
                     id="value"
                     name="value"
                     value={value}
                     onChange={onChange}
                     className="w-full mt-1 p-2 rounded"
                  />
               </div>
            </div>
            <button
               type="submit"
               className="w-36 my-2 p-3 rounded bg-slate-400"
            >
               Add Entry
            </button>
         </form>
      </>
   );
}
