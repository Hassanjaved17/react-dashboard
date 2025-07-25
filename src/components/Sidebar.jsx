import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { SlCalender } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiProjectorLine } from "react-icons/ri";
import { IoMdGitNetwork } from "react-icons/io";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaSquarespace } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";
import { FaHeadphones } from "react-icons/fa";
import { VscFileSubmodule } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa";

const Sidebar = () => {

  const [openSubMenu, setOpenSubMenu] = useState(false)

  return (
    <>
      <div className="">
        <img src="./logo.png" />
      </div>
      <div className="sidebar fixed top-0 left-0 z-[100] w-[15%]">
        <Link to="/">
          <div className="px-4 py-4 logoWrapper">
            <img src="./logo.png" />
          </div>
        </Link>

        <div className="px-1 sidebarTabs md:ms-2">
          <ul className="p-0 m-0 list-none">
            <li>
              <Button>
                <span className="icon w-[30px] h-[30px] flex items-center justify-center text-[#3872FA]">
                  <VscFileSubmodule />
                </span>
                File Manager
              </Button>
            </li>
            <li onClick={() => setOpenSubMenu(!openSubMenu)}>
              <Button>
                <span className="icon w-[30px] h-[30px] flex items-center justify-center text-[#3872FA]">
                  <SlCalender />
                </span>
                Appointment
                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md ms-8 text-[#3872FA]">
                  {openSubMenu ? <FaAngleDown /> : <FaAngleRight />}
                </span>
              </Button>
            </li>

            <li className={`ms-4 ${openSubMenu ? '' : 'hidden'}`}>
              <Button>
                &bull; Appointment 1
              </Button>

              <Button>
                &bull; Appointment 2

              </Button>

              <Button>
                &bull; Appointment 3
              </Button>
            </li>


            <li>
              <Button>
                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md text-[#3872FA]">
                  <IoBagHandleOutline />
                </span>
                Executive
              </Button>
            </li>
            <li>
              <Button>
                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md text-[#3872FA]">
                  <RiProjectorLine />
                </span>
                Project
              </Button>
            </li>
            <li>
              <Button>
                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md text-[#3872FA]">
                  <IoMdGitNetwork />
                </span>
                Job Board
              </Button>
            </li>
            <li>
              <Button>
                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md text-[#3872FA]">
                  <LuCircleDollarSign />
                </span>
                Financial
              </Button>
            </li>
            <li>
              <Button>
                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md text-[#3872FA]">
                  <FaSquarespace />
                </span>
                Logistics
              </Button>
            </li>
            <li>
              <Link to="/products">
                <Button>
                  <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md text-[#3872FA]">
                    <AiOutlineShoppingCart />
                  </span>
                  Products
                </Button>
              </Link>
            </li>
            <li>
              <Button>
                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md text-[#3872FA]">
                  <SiSimpleanalytics />
                </span>
                Analytics
              </Button>
            </li>
            <li>
              <Button>
                <span className="icon w-[30px] h-[30px] flex items-center justify-center rounded-md text-[#3872FA]">
                  <FaHeadphones />
                </span>
                Support
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
