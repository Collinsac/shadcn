import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
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
import { Link, useParams } from "react-router-dom";

import { format } from "date-fns";
import { Calendar as CalendarIcon, PlusCircle, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Demand = () => {
  const { value } = useParams();

  const [date, setDate] = useState();
  const [fields, setFields] = useState([
    {
      id: 1,
      value: "",
    },
  ]);

  const [fieldsDec, setFieldsDec] = useState([
    {
      id: 1,
      value: "",
    },
  ]);

  const [fieldsCourtage, setFieldsCourtage] = useState([
    {
      id: 1,
      value: "",
    },
  ]);

  const addField = (state) => {
    !state
      ? setFields((prev) => [...prev, { id: prev.length + 1, value: "" }])
      : state === "one"
      ? setFieldsCourtage((prev) => [
          ...prev,
          { id: prev.length + 1, value: "" },
        ])
      : setFieldsDec((prev) => [...prev, { id: prev.length + 1, value: "" }]);
  };

  const deleteField = (id, state) => {
    !state
      ? setFields((prev) => prev.filter((field) => id !== field.id))
      : state === "one"
      ? setFieldsCourtage((prev) => prev.filter((field) => id !== field.id))
      : setFieldsDec((prev) => prev.filter((field) => id !== field.id));
  };

  const chageFieldValue = (id, value, state) => {
    !state
      ? setFields((prev) => {
          let array = [...prev];
          array[id - 1].value = value;
          return array;
        })
      : state === "one"
      ? setFieldsCourtage((prev) => {
          let array = [...prev];
          array[id - 1].value = value;
          return array;
        })
      : setFieldsDec((prev) => {
          let array = [...prev];
          array[id - 1].value = value;
          return array;
        });
  };

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

          <div className="relative">
            <Input placeholder="Declaration *" />

            <PlusCircle
              className="absolute right-5 top-1/2 -translate-y-1/2"
              size={20}
              strokeWidth={2}
              onClick={() => addField(true)}
            />
          </div>

          {/* add feilds */}

          {fieldsDec.map((field) => (
            <div key={field.id} className="relative">
              <XCircle
                className="absolute -left-8 top-1/2 -translate-y-1/2"
                size={20}
                strokeWidth={2}
                onClick={() => deleteField(field.id, true)}
              />
              <Input
                value={field.value}
                onChange={(e) =>
                  chageFieldValue(field.id, e.target.value, true)
                }
              />
            </div>
          ))}

          <Input placeholder="Commentaries *" />
          <Input placeholder="Direction *" />
          <Input placeholder="Entreprise *" />
          <Input placeholder="Fonction *" />

          <div className="relative">
            <Input placeholder="Description de titre *" />
            <PlusCircle
              className="absolute right-5 top-1/2 -translate-y-1/2"
              size={20}
              strokeWidth={2}
              onClick={() => addField()}
            />
          </div>

          {/* add feilds */}

          {fields.map((field) => (
            <div key={field.id} className="relative">
              <XCircle
                className="absolute -left-8 top-1/2 -translate-y-1/2"
                size={20}
                strokeWidth={2}
                onClick={() => deleteField(field.id)}
              />
              <Input
                value={field.value}
                onChange={(e) => chageFieldValue(field.id, e.target.value)}
              />
            </div>
          ))}

          <div className="relative">
            <Input placeholder="Firme de courtage *" />
            <PlusCircle
              className="absolute right-5 top-1/2 -translate-y-1/2"
              size={20}
              strokeWidth={2}
              onClick={() => addField("one")}
            />
          </div>

          {/* add feilds */}

          {fieldsCourtage.map((field) => (
            <div key={field.id} className="relative">
              <XCircle
                className="absolute -left-8 top-1/2 -translate-y-1/2"
                size={20}
                strokeWidth={2}
                onClick={() => deleteField(field.id, true)}
              />
              <Input
                value={field.value}
                onChange={(e) =>
                  chageFieldValue(field.id, e.target.value, true)
                }
              />
            </div>
          ))}

          <div className="flex gap-x-10">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[280px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <div className="flex items-center gap-x-3 ml-auto">
              <p>Signature *</p>
              <input type="checkbox" name="" id="" />
            </div>
          </div>

          <p className="text-center">
            Tous les champs portant un * sont obligatoires
          </p>
          <div className="flex gap-x-3 items-center justify-center">
            <input type="checkbox" name="" id="" />
            <p>J'accepte le code d'ethique et deontologie</p>
          </div>

          <div className="flex items-center justify-center gap-x-16">
            {value !== "new" && (
              <Button className="flex mt-4 px-8 bg-yellow-500 hover:bg-yellow-600">
                Modifier
              </Button>
            )}

            <AlertDialog>
              <AlertDialogTrigger>
                <Button className="flex mt-4 px-8 bg-yellow-500 hover:bg-yellow-600">
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
                  <Link
                    to={
                      value === "new"
                        ? "/home/dadhesion"
                        : "/home/renouvellementdadhesion"
                    }
                  >
                    <AlertDialogAction className="p-0">
                      <Button className="mx-auto flex px-8 bg-yellow-500 hover:bg-yellow-600">
                        Oui
                      </Button>
                    </AlertDialogAction>
                  </Link>

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
    </div>
  );
};

export default Demand;
