import React from "react";
import {
  BiSearch,
  IoIosAdd,
  IoMdNotifications,
  AiFillQuestionCircle,
  Header,
} from "../components";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-white relative z-40 py-3 px-5 shadow-gray-200 shadow-lg items-center w-full grid grid-cols-4">
        <div className="">
          <h1 className="text-xl font-bold text-black rounded-sm">People</h1>
        </div>
        <div className="mx-10 col-span-2">
          <div className="flex items-center bg-gray-100 px-2 py-2 rounded-full">
            <BiSearch size={20} color="#ccc" />
            <input
              type="text"
              className="mx-10 ml-2 w-full outline-none bg-gray-100"
              placeholder="Search by name, email, domain or phone number"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex flex-row items-center">
            <button className="outline-none mx-1">
              <IoIosAdd size={20} />
            </button>
            <button className="outline-none mx-1 bg-gray-700 text-white font-bold uppercase px-1.5 text-sm">
              p
            </button>
            <button className="outline-none mx-1 relative">
              <IoMdNotifications size={20} />
              <p className="absolute -top-2 -right-1 text-xs p-0.5 text-white bg-red-500 rounded-full">
                47
              </p>
            </button>
            <button className="outline-none mx-1">
              <AiFillQuestionCircle size={20} color="#ccc" />
            </button>
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
}

export default Navbar;
