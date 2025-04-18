import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import user from "../assets/Images/user.png";
import { Link, useNavigate } from "react-router-dom";
const Auth = () => {
  const [isInscription, setisInscription] = useState(false);
  const [selectValue, setSelectValue] = useState("RH");
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();
  const HandleSubmit = () => {
    if (
      selectValue === "RH" &&
      email.includes("@cbcgroupcomercialbank.com") &&
      !isInscription
    ) {
      seterror("");
      navigate(`${isInscription ? "/home" : "/verification"}`);
    } else {
      seterror("Address email invalid !");
      // navigate(`${!isInscription ? "/home" : "/verification"}`);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="p-4  py-20 bg-gray-50 flex-1 max-w-[600px] shadow-lg rounded-lg ">
        <img src={user} alt="icon" className="mx-auto" />
        <p className="text-center pt-4">
          {isInscription ? "INSCRIPTION" : "CONNEXION"}
        </p>
        <div className="mx-auto max-w-[400px] ">
          <p className="text-xs mt-4 mb-2">Code Client</p>
          <div className="flex gap-x-4">
            <Input required />
            <Input required className="w-20" />
          </div>

          {isInscription && (
            <>
              {/*  */}
              <p className="text-xs mt-4 mb-2">nom Ges</p>
              <select
                name=""
                id=""
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                className="w-full bg-gray-50 shadow-sm py-2 rounded-md border text-gray-300 text-sm"
              >
                <option value="RH">RH</option>
                <option value="Autre">Autre</option>
              </select>

              {selectValue === "Autre" && (
                <>
                  <p className="text-xs mt-4 mb-2">Autres</p>
                  <Input
                    required
                    placeholder="Veuillez preciser le nom du gestionnaire"
                    className="placeholder:text-gray-300"
                  />
                </>
              )}

              {/*  */}
              <p className="text-xs mt-4 mb-2">Email</p>
              <Input
                required
                placeholder={`${
                  selectValue === "RH" ? "@cbcgroupcomercialbank.com" : ""
                }`}
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="placeholder:text-gray-300"
              />

              <p className="text-red-600 text-sm py-1">{error}</p>
            </>
          )}

          {isInscription && (
            <>
              {/*  */}
              <p className="text-xs mt- mb-2">Noms et prenoms</p>
              <Input type="text" required />

              {/*  */}
              <p className="text-xs mt-4 mb-2">Numero de telephone</p>
              <Input type="tel" required />
            </>
          )}

          <Button
            className="mx-auto flex mt-4 bg-yellow-500 hover:bg-yellow-600"
            onClick={() => {
              navigate();
              HandleSubmit();
            }}
          >
            {isInscription ? "Inscription" : "Connexion"}
          </Button>

          <p className="text-sm mt-5 text-center text-gray-400">
            {isInscription
              ? "Vous avez de compte? connecte-vous"
              : "Vous n'avez pas encore de compte? inscrivez-vous"}

            <span
              className="underline ml-2 cursor-pointer"
              onClick={() => setisInscription((prev) => !prev)}
            >
              ici
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
