import React from "react";
import { useParams } from "react-router-dom";

export default function Metric() {
   let param = useParams();

   return <h1>{param.name}</h1>;
}
