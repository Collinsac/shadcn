import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import user from "../assets/Images/user.png";
import { Link } from "react-router-dom";
const Auth = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="p-4  py-20 bg-gray-50 flex-1 max-w-[600px] shadow-lg rounded-lg ">
        <img src={user} alt="icon" className="mx-auto" />
        <p className="text-center pt-4">CONNEXION</p>
        <div className="mx-auto max-w-[400px] ">
          <p className="text-xs mt-4 mb-2">Email/Login</p>
          <Input required />
          {/*  */}
          <p className="text-xs mt-4 mb-2">Mot de passe</p>
          <Input type="password" required />

          <Link to={"/home"}>
            <Button className="mx-auto flex mt-4 bg-yellow-500 hover:bg-yellow-600">
              Connexion
            </Button>
          </Link>

          <p className="text-sm mt-5 text-center text-gray-400">
            Vous n'avez pas encore de compte? inscrivez-vous
            <span className="underline">ici</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
