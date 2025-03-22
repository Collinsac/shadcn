import React from "react";
import { Link } from "react-router-dom";

const QuizzFin = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center flex-grow gap-y-3">
      <h2 className="text-5xl">Felicitations vous avez termine votre quizz</h2>
      <p className="text-lg">
        Votre Score est 100% telechargez votre attestation
        <Link to={"/home/declaration"}>
          <span className="underline ml-3">ici</span>
        </Link>
      </p>
      <p className="underline">au code ethique</p>
      <Link to={"/home/demand/new"} className="underline">
        Acceder
      </Link>
    </div>
  );
};

export default QuizzFin;
