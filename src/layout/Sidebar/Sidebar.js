import React from "react";
import {
  BsBuilding,
  BsFillFileBarGraphFill,
  BsThreeDots,
  HiOutlineChevronDoubleRight,
  IoMdBriefcase,
  RiTaskFill,
  MdEmail,
  AiFillHome,
  AiFillLock,
  AiFillSetting,
  BiTargetLock,
  FaUserAlt,
  IoMdClose,
} from "../../components";
import { BiMenuAltRight } from "react-icons/bi";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {open ? (
        <div
          className={`flex flex-col w-72 px-4 py-8 bg-[#311d40] z-50 relative ease-linear`}
        >
          <div className="flex justify-between">
            <div className="flex items-center">
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                className="w-11 h-11 rounded-full"
              />
              <div className="mx-2">
                <p className="text-base text-white font-semibold capitalize">
                  kelly cheng
                </p>
                <p className="text-sm text-gray-400 font-semibold capitalize">
                  copper
                </p>
              </div>
            </div>
            <div>
              <button className="outline-none" onClick={() => setOpen(!open)}>
                <IoMdClose size={20} color="#fff" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <a
                className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-50 hover:bg-opacity-25 rounded-md"
                href="#"
              >
                <AiFillHome size={15} />

                <span className="mx-4 text-sm font-medium">Dashboard</span>
              </a>
              <hr className="my-2 border-gray-200 dark:border-gray-600" />
              <a
                className=" mt-5 flex items-center px-4 py-2 text-gray-400  rounded-md hover:bg-gray-50 hover:bg-opacity-25"
                href="#"
              >
                <BiTargetLock size={15} />
                <span className="mx-4 text-sm font-medium flex-1">Leads</span>
                <AiFillLock size={15} />
              </a>
              <a
                className="mt-4 flex items-center px-4 py-2 text-white bg-gray-50 bg-opacity-25 rounded-md"
                href="#"
              >
                <FaUserAlt size={15} />
                <span className="mx-4 text-sm font-medium">People</span>
              </a>
              <a
                className=" mt-5 flex items-center px-4 py-2 text-gray-400  rounded-md hover:bg-gray-50 hover:bg-opacity-25"
                href="#"
              >
                <BsBuilding size={15} />
                <span className="mx-4 text-sm font-medium flex-1">
                  Companies
                </span>
              </a>
              <a
                className=" mt-5 flex items-center px-4 py-2 text-gray-400  rounded-md hover:bg-gray-50 hover:bg-opacity-25"
                href="#"
              >
                <HiOutlineChevronDoubleRight size={15} />
                <span className="mx-4 text-sm font-medium flex-1">
                  Pipelines
                </span>
              </a>
              <a
                className=" mt-5 flex items-center px-4 py-2 text-gray-400  rounded-md hover:bg-gray-50 hover:bg-opacity-25"
                href="#"
              >
                <IoMdBriefcase size={15} />
                <span className="mx-4 text-sm font-medium flex-1">
                  Projects
                </span>
              </a>
              <hr className="my-2 border-gray-200 dark:border-gray-600" />
              <a
                className=" mt-5 flex items-center px-4 py-2 text-gray-400  rounded-md hover:bg-gray-50 hover:bg-opacity-25"
                href="#"
              >
                <RiTaskFill size={15} />
                <span className="mx-4 text-sm font-medium flex-1">Task</span>
              </a>
              <a
                className=" mt-5 flex items-center px-4 py-2 text-gray-400  rounded-md hover:bg-gray-50 hover:bg-opacity-25"
                href="#"
              >
                <MdEmail size={15} />
                <span className="mx-4 text-sm font-medium flex-1">
                  My Tracked Emails
                </span>
              </a>
              <a
                className=" mt-5 flex items-center px-4 py-2 text-gray-400  rounded-md hover:bg-gray-50 hover:bg-opacity-25"
                href="#"
              >
                <BsFillFileBarGraphFill size={15} />
                <span className="mx-4 text-sm font-medium flex-1">
                  Legacy Reports
                </span>
              </a>
              <hr className="my-2 border-gray-200 dark:border-gray-600" />

              <a
                className="mb-10 mt-5 flex items-center px-4 py-2 text-gray-400  rounded-md hover:bg-gray-50 hover:bg-opacity-25"
                href="#"
              >
                <AiFillSetting size={15} />
                <span className="mx-4 text-sm font-medium flex-1">
                  Settings
                </span>
              </a>
            </nav>

            <div className="absolute bottom-0 w-full">
              <div className="flex justify-between items-center px-4 -px-2 my-3">
                <h4 className="text-xl mx-2 flex-1 font-medium text-gray-800 dark:text-gray-200 hover:underline">
                  :Copper
                </h4>
                <div className="pr-5">
                  <BsThreeDots size={20} color={"#fff"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`flex items-start px-4 justify-start w-16 py-8 bg-[#311d40] z-50 ease-linear relative`}
        >
          <button className="outline-none" onClick={() => setOpen(!open)}>
            <BiMenuAltRight size={25} color="#fff" />
          </button>
        </div>
      )}
    </>
  );
}
