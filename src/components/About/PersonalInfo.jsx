import React from "react";
import ProfilePic from "../../assets/profilepic.svg";
import Email from "../../assets/email.svg";
import Call from "../../assets/call.svg";
import Location from "../../assets/location.svg";
import Grad from "../../assets/grad.svg";

function PersonalInfo() {
  return (
    <>
    <div className="flex flex-col justify-center w-full h-auto ml-10 mt-10 gap-3 text-lg sm:items-start">
      <div className="flex gap-4 text-black dark:text-white ">
        <img src={ProfilePic} alt="profilepic" /> <span>Sahil Andhare</span>
      </div>

      {/* <div className="sm:flex sm:gap-10"> */}

      <div className="flex gap-4 text-black dark:text-white ">
        <img src={Email} alt="email" /> <span>sahil172002@gmail.com</span>
      </div>
      <div className="flex gap-4 text-black dark:text-white ">
        <img src={Call} alt="call" /> <span>+91 8888XXXXXX</span>
        {/* </div> */}
      </div>
      <div className="flex gap-4 text-black dark:text-white  ">
        <img src={Location} alt="location" />
        <span>Pune, Maharashtra, India</span>
      </div>
      <div className="flex gap-4 text-black dark:text-white ">
        <img src={Grad} alt="grad" />
        <span>B.E in - Information and Technology
        </span>
      </div>
    </div>
    </>
  );
}

export default PersonalInfo;
