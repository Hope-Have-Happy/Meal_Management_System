import { useState } from "react";
import {
  BiSolidDashboard,
  BiSolidFoodMenu,
  BiSolidUserCircle,
} from "react-icons/bi";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsPersonFillAdd,
} from "react-icons/bs";
import { FaHistory, FaListOl, FaUsers } from "react-icons/fa";
import { FaBowlFood, FaCoins, FaMoneyBill, FaUsersGear } from "react-icons/fa6";
import { GiHotMeal, GiMeal } from "react-icons/gi";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { MdAccountBalance, MdPayments } from "react-icons/md";

export default function DashboardLayout() {
  const [open, setOpen] = useState(true);

  const Menus = [
    {
      title: "Dashboard",
      icon: <BiSolidDashboard />,
    },
    {
      title: "Manage User",
      icon: <FaUsersGear />,
      submenu: true,
      submenuItems: [
        { title: "Add New User", icon: <BsPersonFillAdd /> },
        { title: "Users List", icon: <FaUsers /> },
      ],
    },
    {
      title: "Manage Meal",
      icon: <GiHotMeal />,
      submenu: true,
      submenuItems: [
        { title: "Meal Register", icon: <GiMeal /> },
        { title: "Meals List", icon: <BiSolidFoodMenu /> },
        { title: "Meal Rate Set", icon: <HiMiniReceiptPercent /> },
      ],
    },
    {
      title: "Meal Booking",
      icon: <FaBowlFood />,
      submenu: true,
      submenuItems: [
        { title: "Advance Meal Booking", icon: <GiMeal /> },
        { title: "Booked Meals List", icon: <BiSolidFoodMenu /> },
      ],
      space: true,
    },
    {
      title: "Payments",
      icon: <MdPayments />,
      submenu: true,
      submenuItems: [
        { title: "Add New Payment", icon: <FaCoins /> },
        { title: "Payments History", icon: <FaHistory /> },
      ],
    },
    {
      title: "Accounts",
      icon: <MdAccountBalance />,
      submenu: true,
      submenuItems: [
        { title: "Record Daily Market Expenses", icon: <FaMoneyBill /> },
        { title: "Daily Market Expense List", icon: <FaListOl /> },
      ],
    },
    {
      title: "Settings",
      icon: <IoSettingsSharp />,
      space: true,
    },
    {
      title: "Profile",
      icon: <BiSolidUserCircle />,
    },
    {
      title: "Logout",
      icon: <IoLogOut />,
    },
    // Add more menu items here
  ];

  const [submenuOpen, setSubmenuOpen] = useState(
    Array(Menus.length).fill(false)
  );

  // Function to handle submenu click and close previously open submenu
  const handleSubmenuClick = (index) => {
    const newSubmenuOpen = [...submenuOpen];
    for (let i = 0; i < newSubmenuOpen.length; i++) {
      if (i !== index) {
        newSubmenuOpen[i] = false; // Close all other submenus
      }
    }
    newSubmenuOpen[index] = !newSubmenuOpen[index]; // Toggle the clicked submenu
    setSubmenuOpen(newSubmenuOpen);
  };

  return (
    <div className='flex min-h-full h-screen'>
      {/* Side-Bar */}
      <div
        className={`dark:bg-slate-800 bg-slate-200  p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}>
        {/* Sidebar Toggle Button */}
        <BsArrowLeftShort
          className={`dark:bg-white bg-slate-300 dark:text-slate-800 text-slate-700 text-3xl rounded-full absolute -right-3 top-9 shadow-inner border border-slate-800 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        {/* Logo */}
        <div className='inline-flex'>
          <BiSolidFoodMenu className='dark:bg-amber-300 bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 dark:text-slate-800' />
          <h1
            className={`dark:text-white text-slate-800 origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0 text-[0px]"
            }`}>
            Meal Manage
          </h1>
        </div>

        {/* Menus */}
        <ul className='pt-2'>
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 dark:hover:bg-slate-500 hover:bg-[#bfbdbd] rounded-md ${
                  menu.space ? "mt-9" : "mt-2"
                } ${submenuOpen[index] && "dark:bg-slate-500 bg-[#bfbdbd]"}`}
                onClick={() => handleSubmenuClick(index)}>
                <span className='text-2xl block float-left'>{menu.icon}</span>
                <span
                  className={`text-base flex-1 duration-300 ${
                    !open && "scale-0 text-[0px]"
                  }`}>
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <span>
                    <BsChevronDown />
                  </span>
                )}
              </li>
              {menu.submenu && submenuOpen[index] && open && (
                <ul className='pt-2'>
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <a href='#' key={subIndex}>
                      <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 dark:hover:bg-slate-500 hover:bg-[#bfbdbd] rounded-md '>
                        <span className='text-lg block float-left'>
                          {submenuItem.icon}
                        </span>
                        {submenuItem.title}
                      </li>
                    </a>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      {/* Outlet */}
      <div className='p-7'>
        <h1 className='text-2xl font-semibold'>Home</h1>
      </div>
    </div>
  );
}
