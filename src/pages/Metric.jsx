import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Metric() {
   let param = useParams();

   useEffect(() => {}, [param.name]);

   return <h1>{param.name}</h1>;
}
