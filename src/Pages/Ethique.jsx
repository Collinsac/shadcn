import PDFComponent from "@/components/Custom/PDFComponent";
import { Button } from "@/components/ui/button";
import React from "react";
import { pdfjs } from "react-pdf";
import { useNavigate } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Ethique = () => {
  const navigate=useNavigate()
  return (
    <div className=" flex-1">
      <div className="h-[94.5vh] bg-gray-200 p-20 overflow-scroll">
        <PDFComponent />

        <Button className="mx-auto flex mt-4 bg-yellow-500 hover:bg-yellow-600"  onClick={()=>navigate("/home/quizz")}>
          Acceder au Quizz
        </Button>
      </div>
    </div>
  );
};

export default Ethique;
