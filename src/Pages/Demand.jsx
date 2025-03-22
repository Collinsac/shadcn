import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import teamwork from "../assets/Images/teamwork.png";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useParams } from "react-router-dom";

const Demand = () => {
  const { value } = useParams();

  console.log(value);
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="max-w-[1300px] flex-1 flex gap-x-3 px-4 py-4">
        <div className="flex-1 p-4">
          <img src={teamwork} alt="image" className="scale-75" />
        </div>
        <div className="flex-1 p-4 flex gap-y-5 flex-col">
          <div className="flex gap-x-3 items-center justify-center">
            <h1 className="text-3xl">
              Demande {value === "new" ? null : "Renouvellement"} d'Adhesion
            </h1>
          </div>
          <Input placeholder="Noms et Prenoms *" />
          <Input placeholder="Declaration *" />
          <Input placeholder="Commentaries *" />
          <Input placeholder="Direction *" />
          <Input placeholder="Entreprise *" />
          <Input placeholder="Fonction *" />
          <Input placeholder="Description de titre *" />
          <Input placeholder="Firme de courtage *" />

          <div className="flex gap-x-10">
            <Input placeholder="Date *" />
            <Input placeholder="Signature *" />
          </div>

          <p className="text-center">
            Tous les champs portant un * sont obligatoires
          </p>
          <div className="flex gap-x-3 items-center justify-center">
            <input type="checkbox" name="" id="" />
            <p>J'accepte le code d'ethique et deontologie</p>
          </div>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="mx-auto flex mt-4 px-8 bg-yellow-500 hover:bg-yellow-600">
                Soumettre
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-center my-5">
                  Vous etes sur de Vouioir soumettre?
                </AlertDialogTitle>
                {/* <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription> */}
              </AlertDialogHeader>
              <div className="justify-between flex items-center">
                <AlertDialogAction className="p-0">
                  <Button className="mx-auto flex px-8 bg-yellow-500 hover:bg-yellow-600">
                    Oui
                  </Button>
                </AlertDialogAction>
                <AlertDialogCancel className="p-0">
                  <Button className="mx-auto flex px-8 bg-yellow-500 hover:bg-yellow-600">
                    non
                  </Button>
                </AlertDialogCancel>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Demand;
