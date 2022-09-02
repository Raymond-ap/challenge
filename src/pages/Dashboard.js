import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import { Detail } from "../components";
import { truncate } from "../utils";

const DUMMYDATA = [
  {
    initials: "io",
    firstName: '""<>img src="x onerror=("Error occured loading img"',
    company: "cloudstructure",
    title: "",
    email: "text@gmail.com",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "10/02/2022",
  },
  {
    initials: "A",
    firstName: "alert('document.domain)",
    company: "cloudstructure",
    title: "title",
    email: "text@gmail.com",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "",
  },
  {
    initials: "ts",
    firstName: "Amandeep sinhi",
    company: "cloudstructure",
    title: "",
    email: "",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "10/02/2022",
  },
  {
    initials: "ts",
    firstName: "Amandeep sinhi",
    company: "cloudstructure",
    title: "",
    email: "",
    ownedBy: "",
    createAt: "10/02/2022",
    lastComment: "",
  },
  {
    initials: "ym",
    firstName: "Amandeep sinhi",
    company: "cloudstructure",
    title: "",
    email: "text@gmail.com",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "10/02/2022",
  },
  {
    initials: "l",
    firstName: "Amandeep sinhi",
    company: "cloudstructure",
    title: "",
    email: "text@gmail.com",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "",
  },
  {
    initials: "aa",
    firstName: "Amandeep sinhi",
    company: "cloudstructure",
    title: "",
    email: "text@gmail.com",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "10/02/2022",
  },
  //
  {
    initials: "io",
    firstName: '""<>img src="x onerror=("Error occured loading img"',
    company: "cloudstructure",
    title: "",
    email: "text@gmail.com",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "10/02/2022",
  },
  {
    initials: "A",
    firstName: "alert('document.domain)",
    company: "cloudstructure",
    title: "title",
    email: "text@gmail.com",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "",
  },
  {
    initials: "ts",
    firstName: "Amandeep sinhi",
    company: "cloudstructure",
    title: "",
    email: "",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "10/02/2022",
  },
  {
    initials: "ts",
    firstName: "Amandeep sinhi",
    company: "cloudstructure",
    title: "",
    email: "",
    ownedBy: "",
    createAt: "10/02/2022",
    lastComment: "",
  },
  {
    initials: "ym",
    firstName: "Amandeep sinhi",
    company: "cloudstructure",
    title: "",
    email: "text@gmail.com",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "10/02/2022",
  },
  {
    initials: "l",
    firstName: "Amandeep sinhi",
    company: "cloudstructure",
    title: "",
    email: "text@gmail.com",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "",
  },
  {
    initials: "aa",
    firstName: "Amandeep sinhi",
    company: "cloudstructure",
    title: "",
    email: "text@gmail.com",
    ownedBy: "text",
    createAt: "10/02/2022",
    lastComment: "10/02/2022",
  },
];

export default function Dashboard() {
  const [showDetail, setShowDetail] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [selectedindex, setSelectedindex] = React.useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
    setShowDetail(true);
  };

  return (
    <>
      <div className="bg-white w-full">
        <div class="overflow-x-auto relative ">
          <table class="w-full text-sm text-left ">
            <thead class="text-x capitalize text-gray-400 font-normal border-b shadow-sm h-14">
              <tr className="text-center">
                <th scope="col" class="text-blue-600 py-3 px-6">
                  <div className="flex gap-2 items-center">
                    <input type={"checkbox"} className="outline-none mr-10" />
                    <div className="flex gap-2 items-center">
                      first name
                      <BsFilterLeft size={20} />
                    </div>
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div className="flex gap-2 items-center">
                    company
                    <BsFilterLeft size={20} />
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div className="flex gap-2 items-center">
                    title
                    <BsFilterLeft size={20} />
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div className="flex gap-2 items-center">
                    email
                    <BsFilterLeft size={20} />
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div className="flex gap-2 items-center">
                    owned by
                    <BsFilterLeft size={20} />
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  street
                </th>
                <th scope="col" class="py-3 px-6">
                  <div className="flex gap-2 items-center">
                    created
                    <BsFilterLeft size={20} />
                  </div>
                </th>
                <th scope="col" class="py-3 px-6">
                  <div className="flex gap-2 items-center">
                    last contacted
                    <BsFilterLeft size={20} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {DUMMYDATA.map((item, index) => (
                <tr
                  onClick={() => {
                    handleClick(item);
                    setSelectedindex(index);
                  }}
                  class={`border-b hover:bg-gray-300 hover:cursor-pointer ${
                    selectedindex === index && "bg-gray-300"
                  }`}
                  key={index}
                >
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                  >
                    <div className="flex gap-2 items-center">
                      <div className="mr-5 bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full ">
                        <p className="uppercase text-sm">{item?.initials}</p>
                      </div>
                      {truncate(item?.firstName, 20)}
                    </div>
                  </th>
                  <td class="py-4 px-6 capitalize">
                    {truncate(item?.company, 20)}
                  </td>
                  <td class="py-4 px-6 capitalize">
                    {item.title ? truncate(item?.title, 20) : "-"}
                  </td>
                  <td class="py-4 px-6 capitalize">
                    {item.email ? truncate(item?.email, 20) : "-"}
                  </td>
                  <td class="py-4 px-6 capitalize">
                    {item.ownedBy ? truncate(item?.ownedBy, 20) : "-"}
                  </td>
                  <td class="py-4 px-6 capitalize">
                    {item.street ? truncate(item?.street, 20) : "-"}
                  </td>
                  <td class="py-4 px-6 capitalize">
                    {item.createAt ? truncate(item?.createAt, 20) : "-"}
                  </td>
                  <td class="py-4 px-6 capitalize">
                    {item.createAt ? truncate(item?.lastComment, 20) : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showDetail && (
        <Detail selectedItem={selectedItem} setSelectedindex={setSelectedindex} setShowDetail={setShowDetail} />
      )}
    </>
  );
}
