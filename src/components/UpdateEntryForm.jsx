import EntryService from "../services/entry.service";

export default function UpdateEntryForm(props) {
   const { _id, date, value } = props.entryForm;

   const onChange = (e) => {
      props.setEntryForm((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();

      EntryService.update(props.metric, _id, { value }).then((res) =>
         props.updateEntries()
      );

      props.togglePopup();
   };

   return (
      <form
         onSubmit={onSubmit}
         style={{ width: "26rem" }}
         className="rounded-xl bg-slate-200"
      >
         <div className="px-6 py-4 rounded-t-lg bg-slate-300">
            <h1 className="text-lg font-normal">Update Entry</h1>
         </div>
         <div className="flex flex-wrap p-6">
            <div>
               <label htmlFor="date">Date</label>
               <br />
               <input
                  type="text"
                  id="date"
                  name="date"
                  value={new Date(date).toLocaleDateString("en-US", {
                     month: "short",
                     day: "numeric",
                     year: "numeric",
                  })}
                  onChange={onChange}
                  className="w-32 mt-1 p-2 rounded bg-slate-300"
                  readOnly
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
               Update
            </button>
         </div>
      </form>
   );
}
