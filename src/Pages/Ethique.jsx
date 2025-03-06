import PDFComponent from "@/components/Custom/PDFComponent";
import React from "react";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Ethique = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <div className="h-[600px] bg-gray-200 rounded-md p-20 overflow-scroll ">
        <PDFComponent />
      </div>
    </div>
  );
};

export default Ethique;
