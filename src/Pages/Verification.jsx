import React, { useState } from "react";

import user from "../assets/Images/user.png";
import OTPInput from "react-otp-input";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Verification = () => {
  const [otp, setOtp] = useState("");

  console.log(otp);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="p-4  py-20 bg-gray-50 flex-1 max-w-[600px] shadow-lg rounded-lg ">
        <img src={user} alt="icon" className="mx-auto" />
        <p className="text-center pt-4 font-bold text-xl">Verifer</p>
        <p className="text-center pt-2">Verifer</p>

        <div className=" flex items-center justify-center">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={<span className="px-2"></span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={
              " rounded-xl flex-1 text-black border-gray-500 border bg-gray-50 h-full"
            }
            containerStyle={"flex w-[60%] items-stretch h-14 my-4"}
          />
        </div>

        <p className="text-center pt-2">Verifer</p>

        <Link to={"/home"}>
          <Button className="mx-auto px-10 flex mt-4 bg-yellow-500 hover:bg-yellow-600">
            Suivant
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Verification;
