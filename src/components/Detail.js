import React from "react";
import {
  AiOutlineArrowRight,
  AiOutlineStar,
  AiOutlineCopy,
} from "react-icons/ai";
import { GrShare } from "react-icons/gr";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { truncate } from "../utils";

const Detail = ({ setShowDetail, selectedItem, setSelectedindex }) => {
  const tabs = ["details", "activity", "related"];
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="z-50 absolute right-0 top-0 bottom-0 w-80 delay-700 transition duration-700 ease-in-out">
      <div
        className={`flex items-start  w-full justify-start  py-8 bg-[#fff] z-50 relative ease-linear shadow-xl`}
      >
        <div className="w-full ">
          <div className="px-4 flex flex-row items-center justify-between my-2">
            <button
              className="outline-none"
              onClick={() => {
                setSelectedindex(null);
                setShowDetail(false);
              }}
            >
              <AiOutlineArrowRight size={20} />
            </button>
            <div className="flex flex-row items-center gap-2">
              <button className="outline-none">
                <GrShare size={16} />
              </button>
              <button className="outline-none">
                <AiOutlineStar size={16} />
              </button>
              <button className="outline-none">
                <BiDotsVerticalRounded size={16} />
              </button>
            </div>
          </div>
          <div className="py-3 flex flex-row items-center px-4">
            <div className="mr-5 bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full ">
              <p className="uppercase text-sm">{selectedItem.initials}</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">
                {truncate(selectedItem.firstName, 30)}
              </p>
              <p className="text-sm text-gray-600">{selectedItem.company}</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between my-2 border-b">
            {tabs.map((tab, index) => (
              <button
                onClick={() => setActiveTab(index)}
                className={`px-4 text-xs pb-2 uppercase ${
                  activeTab === index
                    ? "text-black font-bold border-b-2 border-blue-700"
                    : "text-gray-600 font-medium"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <RenderDetail selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  );
};

const RenderDetail = ({ selectedItem }) => {
  return (
    <div className="px-4 py-5">
      <div className=" my-2">
        <div className="flex flex-row justify-between">
          <p className="text-sm font-medium text-gray-600 capitalize">
            name
            <span className="text-red-700 ml-1">*</span>
          </p>

          <button className="ml-5 outline-none">
            <AiOutlineCopy size={16} />
          </button>
        </div>
        <p className="text-xs font-medium mt-2">{selectedItem?.firstName}</p>
      </div>
      <div className=" my-5">
        <p className="mb-2 text-sm font-medium text-gray-600 capitalize">
          Company
        </p>
        <p className="text-sm font-medium capitalize">
          {selectedItem?.company}
        </p>
      </div>
      <div className=" my-5">
        <p className="mb-2 text-sm font-medium text-gray-600 capitalize">
          title
        </p>
        <input
          className="outline-none border-none text-xs capitalize"
          placeholder="add title"
        />
      </div>
      <div className=" my-5">
        <p className="mb-2 text-sm font-medium text-gray-600 capitalize">
          work email
        </p>
        <p className="text-sm font-medium capitalize">{selectedItem?.email}</p>
      </div>
      <div className=" my-5">
        <p className="mb-2 text-sm font-medium text-gray-600 capitalize">
          work phone
        </p>
        <p className="text-sm font-medium capitalize">{selectedItem?.phone}</p>
      </div>
      <div className=" my-5">
        <p className="mb-2 text-sm font-medium text-gray-600 capitalize">
          rating
        </p>
        <select className="outline-none border-none text-xs capitalize w-full">
          <option value={"--select ratings--"}>--select ratings--</option>
        </select>
      </div>
      <div className=" my-5">
        <p className="mb-2 text-sm font-medium text-gray-600 capitalize">
          status
        </p>
        <select className="outline-none border-none text-xs capitalize w-full">
          <option value={"--select status--"}>--select status--</option>
        </select>
      </div>
      <div className=" my-5">
        <p className="mb-2 text-sm font-medium text-gray-600 capitalize">
          recycled reasons
        </p>
        <select className="outline-none border-none text-xs capitalize w-full">
          <option value={"--select recycled reasons--"}>
            --select recycled reasons--
          </option>
        </select>
      </div>
      <div className=" my-5">
        <p className="mb-2 text-sm font-medium text-gray-600 capitalize">
          account owner
        </p>
        <p className="text-sm font-medium text-blue-400 capitalize">
          {selectedItem?.ownedBy}
        </p>
      </div>
      <div className="absolute right-10">
        <button className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full shadow-xl">
          <BsFillQuestionSquareFill size={20} color={"#fff"} />
        </button>
      </div>
    </div>
  );
};

export default Detail;
