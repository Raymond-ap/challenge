import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { FaUserAlt, AiFillSetting, FiSearch, BsFilter } from "../components";

function Header() {
  return (
    <div className="py-3 border-b border-gray-300 px-5 lg:flex lg:flex-row items-center justify-between">
      <div className="flex gap-5">
        <select className="text-sm capitalize text-black px-2 py-1.5 rounded-md border border-gray-400 outline-none">
          <option value={"all people(156663)"}>all people(156663)</option>
        </select>
        <button className="outline-none w-32 justify-center uppercase px-3 py-1 rounded-full text-xs font-semibold bg-blue-700 hover:bg-blue-600 text-white flex items-center flex-row">
          <span className="flex-1">add new</span>
          <BiChevronDown size={20} />
        </button>
      </div>
      <div className="flex flex-row items-center gap-4 lg:mt-0 mt-5">
        <button className="outline-none">
          <FiSearch color="#6b7280" size={15} />
        </button>
        <button className="outline-none">
          <FaUserAlt color="#6b7280" size={15} />
        </button>
        <button className="outline-none">
          <AiFillSetting color="#6b7280" size={18} />
        </button>
        <button className="outline-none flex flex-row items-center gap-1">
          <BsFilter color="#6b7280" size={20} />
          <span className="text-xs text-[#6b7280] font-bold">FIlter</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
