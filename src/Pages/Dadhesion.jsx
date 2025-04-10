import Line from "@/components/Custom/Line";
import Signature from "@/components/Custom/Signature";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { XCircleIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dadhesion = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 p-10">
      {/* page 1 */}
      <div className="bg-gray-50 rounded-md p-8 w-[70%] mx-auto">
        {/* header */}
        <div className="p-3 relative">
          <p className="text-2xl text-center">
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing.
          </p>
          <p className="absolute bottom-0 mb-3 font-bold">Lorem, ipsum.</p>
        </div>
        {/* gold page */}
        <div className="border-2 flex flex-col gap-y-4 bg-white border-yellow-500 rounded-tl-md rounded-br-md p-6 my-4">
          <div className="flex">
            <p>Je Soussigne(e), </p>
            <p className="flex-1 border-b border-black"></p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et
            esse molestiae dolores repudiandae rerum quia mollitia iste commodi
            veritatis unde quod laborum a culpa ullam dicta sit natus suscipit
            beatae, soluta architecto, tempore explicabo? Totam sequi itaque
            necessitatibus magnam.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos non
            magnam voluptas fuga ea accusamus porro, placeat ullam voluptatem
            eligendi distinctio recusandae iure voluptate hic, quam officiis
            libero assumenda tenetur eos enim. Eius aliquid exercitationem
            necessitatibus in modi, ducimus voluptatibus maiores aperiam sequi.
            Pariatur impedit tempore facilis quae rerum! Dicta vero cum
            asperiores vitae doloribus dolorum doloremque officiis illo
            obcaecati cumque consequuntur culpa, similique iure tempora soluta
            reprehenderit quasi, omnis fugit sint! Exercitationem magni,
            molestias ad repudiandae sapiente, magnam officiis consequatur
            recusandae quibusdam maiores adipisci facere itaque deleniti fuga
            reprehenderit odio? Tempore quisquam blanditiis vitae laudantium
            consequuntur qui illo iste.
          </p>

          <Line />
          <Line />
          <Line />
          <Line />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos non
            magnam voluptas fuga ea accusamus porro, placeat ullam voluptatem
            eligendi distinctio recusandae iure voluptate hic, quam officiis
            libero assumenda tenetur eos enim. Eius aliquid exercitationem
            necessitatibus in modi, ducimus voluptatibus maiores aperiam sequi.
            Pariatur impedit tempore facilis quae rerum! Dicta vero cum
            asperiores vitae doloribus dolorum doloremque officiis illo
            obcaecati cumque consequuntur culpa, similique iure tempora soluta
            reprehenderit quasi, omnis fugit sint! Exercitationem magni,
            molestias ad repudiandae sapiente, magnam officiis consequatur
            recusandae quibusdam maiores adipisci facere itaque deleniti fuga
            reprehenderit odio? Tempore quisquam blanditiis vitae laudantium
            consequuntur qui illo iste.
          </p>

          <div className="mx-10">
            <table className="w-full border-2 rounded-tr-lg rounded-bl-lg border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border-2 py-3">Description</th>
                  <th className="border-2">Firme de courtage</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-5 border"></td>
                  <td className="p-5 border"></td>
                </tr>

                <tr>
                  <td className="p-5 border"></td>
                  <td className="p-5 border"></td>
                </tr>

                <tr>
                  <td className="p-5 border"></td>
                  <td className="p-5 border"></td>
                </tr>

                <tr>
                  <td className="p-5 border"></td>
                  <td className="p-5 border"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* page 2 */}

      <div className="bg-gray-50 rounded-md p-8 w-[70%] mx-auto mt-4">
        <div className="border-2 flex flex-col gap-y-4 bg-white border-yellow-500 rounded-tl-md rounded-br-md p-6 my-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aspernatur, impedit animi excepturi voluptatibus rem consectetur
            libero magnam dolorum aut maxime doloribus fugit debitis laboriosam
            dicta atque quam? Dolorem cupiditate, repudiandae distinctio
            sapiente, id qui eius odio expedita harum voluptatum iste.
          </p>

          <div className="flex">
            <p>Lorem, ipsum dolor. </p>
            <p className="flex-1 border-b border-black"></p>
          </div>

          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />
          <Line />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            porro temporibus ea ipsa corrupti, quod ex amet consequuntur est
            ullam provident reiciendis? Perferendis animi saepe aspernatur
            provident ipsam necessitatibus reiciendis.
          </p>

          <Signature />
        </div>
      </div>

      <div className="flex items-center justify-between p-4 mx-auto max-w-[1000px]">
        <Button
          className=" bg-yellow-500 hover:bg-yellow-600"
          onClick={() => navigate(-1)}
        >
          Retour
        </Button>

        <AlertDialog>
          <AlertDialogTrigger>
            <Button className=" bg-yellow-500 hover:bg-yellow-600">
              Vailder
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-center my-5">
                Vous etes sur de vouloir valider ?
              </AlertDialogTitle>
            </AlertDialogHeader>
            <div className="justify-between flex items-center">
              <AlertDialogAction className="p-0">
                <Button className="mx-auto flex px-8 bg-yellow-500 hover:bg-yellow-600">
                  Oui
                </Button>
              </AlertDialogAction>

              <AlertDialogAction className="p-0">
                <Button className="mx-auto flex px-8 bg-yellow-500 hover:bg-yellow-600">
                  Non
                </Button>
              </AlertDialogAction>

              <AlertDialogCancel className="p-0 px-2 absolute right-2 bg-transparent border-none shadow-none top-0">
                <XCircleIcon size={3} />
              </AlertDialogCancel>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Dadhesion;
