export default function PopupWrapper(props) {
   return (
      <>
         {props.show ? (
            <>
               <div
                  onClick={props.toggle}
                  className="fixed h-screen w-screen top-0 left-0 z-30 opacity-25 bg-slate-100"
               ></div>
               <div
                  style={{
                     top: "50%",
                     left: "50%",
                     transform: "translate(-50%, -50%)",
                  }}
                  className="fixed z-40 rounded-lg bg-slate-200"
               >
                  <button
                     onClick={props.toggle}
                     className="fixed top-2 right-2 p-2 rounded shadow-lg bg-slate-400"
                  >
                     Close
                  </button>
                  {props.item}
               </div>
            </>
         ) : (
            ""
         )}
      </>
   );
}
