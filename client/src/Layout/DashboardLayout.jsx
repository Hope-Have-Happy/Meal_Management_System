import { useEffect, useState } from "react";
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
import { IoMdListBox } from "react-icons/io";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { MdAccountBalance, MdPayments } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const [isScreenSmallerThan1040px, setIsScreenSmallerThan1040px] = useState(
    window.innerWidth < 1040
  );

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setIsScreenSmallerThan1040px(newWindowWidth < 1040);
    };

    // Add an event listener to update the window dimensions when the window is resized.
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isScreenSmallerThan1040px]);

  const Menus = [
    {
      title: "Dashboard",
      icon: <BiSolidDashboard />,
      route: "/dashboard",
    },
    {
      title: "Manage User",
      icon: <FaUsersGear />,
      submenu: true,
      submenuItems: [
        {
          title: "Add New User",
          icon: <BsPersonFillAdd />,
          route: "/dashboard/add-new-user",
        },
        {
          title: "Users List",
          icon: <FaUsers />,
          route: "/dashboard/users-list",
        },
      ],
    },
    {
      title: "Manage Meal",
      icon: <GiHotMeal />,
      submenu: true,
      submenuItems: [
        {
          title: "Meal Register",
          icon: <GiMeal />,
          route: "/dashboard/meal-register",
        },
        {
          title: "Meals List",
          icon: <BiSolidFoodMenu />,
          route: "/dashboard/meal-list",
        },
        {
          title: "Set Meal Rate",
          icon: <HiMiniReceiptPercent />,
          route: "/dashboard/meal-rate-set",
        },
      ],
    },
    {
      title: "Meal Booking",
      icon: <FaBowlFood />,
      submenu: true,
      submenuItems: [
        {
          title: "Advance Meal Booking",
          icon: <GiMeal />,
          route: "/dashboard/advance-meal-booking",
        },
        {
          title: "Booked Meals List",
          icon: <BiSolidFoodMenu />,
          route: "/dashboard/booked-meal-list",
        },
      ],
      space: true,
    },
    {
      title: "Payments",
      icon: <MdPayments />,
      submenu: true,
      submenuItems: [
        {
          title: "Add New Payment",
          icon: <FaCoins />,
          route: "/dashboard/add-new-payment",
        },
        {
          title: "All Payments List",
          icon: <IoMdListBox />,
          route: "/dashboard/all-payments-list",
        },
        {
          title: "Payments History",
          icon: <FaHistory />,
          route: "/dashboard/payment-history",
        },
      ],
    },
    {
      title: "Accounts",
      icon: <MdAccountBalance />,
      submenu: true,
      submenuItems: [
        {
          title: "Record Daily Market Expenses",
          icon: <FaMoneyBill />,
          route: "/dashboard/record-daily-market-expenses",
        },
        {
          title: "Daily Market Expense List",
          icon: <FaListOl />,
          route: "/dashboard/daily-market-expenses-list",
        },
      ],
    },
    {
      title: "Settings",
      icon: <IoSettingsSharp />,
      route: "/dashboard/settings",
      space: true,
    },
    {
      title: "Profile",
      icon: <BiSolidUserCircle />,
      route: "/dashboard/profile",
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
    <div className='flex min-h-full relative'>
      {/* Side-Bar */}
      <div
        className={`${
          isScreenSmallerThan1040px && "h-full"
        }  dark:bg-slate-800 bg-slate-200 fixed h-full shadow-[10px_1px_4px_-2px_rgba(0,0,0,0.37)] z-[99]`}>
        <div
          className={`p-5 pt-8 ${
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
            <BiSolidFoodMenu
              className={`dark:bg-amber-300 bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 dark:text-slate-800 ${
                !open && "w-[55px]"
              }`}
            />
            <h1
              className={`dark:text-white text-slate-800 origin-left font-medium text-xl md:text-2xl duration-300 ${
                !open && "scale-0 text-[0px]"
              }`}>
              Meal Manage
            </h1>
          </div>

          {/* Menus */}
          <ul className='pt-2'>
            {Menus.map((menu, index) => (
              <>
                {menu.route ? (
                  <Link to={menu.route}>
                    <li
                      key={index}
                      className={`dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 dark:hover:bg-slate-500 hover:bg-[#bfbdbd] rounded-md ${
                        menu.space ? "mt-9" : "mt-2"
                      } ${
                        submenuOpen[index] && "dark:bg-slate-500 bg-[#bfbdbd]"
                      }`}
                      onClick={() => handleSubmenuClick(index)}>
                      <span className='text-2xl block float-left'>
                        {menu.icon}
                      </span>
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
                  </Link>
                ) : (
                  <li
                    key={index}
                    className={`dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 dark:hover:bg-slate-500 hover:bg-[#bfbdbd] rounded-md ${
                      menu.space ? "mt-9" : "mt-2"
                    } ${
                      submenuOpen[index] && "dark:bg-slate-500 bg-[#bfbdbd]"
                    }`}
                    onClick={() => handleSubmenuClick(index)}>
                    <span className='text-2xl block float-left'>
                      {menu.icon}
                    </span>
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
                )}

                {/* sub menus */}
                {menu.submenu && submenuOpen[index] && open && (
                  <ul className='pt-2'>
                    {menu.submenuItems.map((submenuItem, subIndex) => (
                      <Link to={submenuItem?.route} key={subIndex}>
                        <li className='dark:text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 dark:hover:bg-slate-500 hover:bg-[#bfbdbd] rounded-md '>
                          <span className='text-lg block float-left'>
                            {submenuItem.icon}
                          </span>
                          {submenuItem.title}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>

      {/* Outlet */}
      <div
        className={`${
          isScreenSmallerThan1040px
            ? "pl-28 pr-[34px] py-[34px]"
            : `${
                open
                  ? "pl-[320px] pr-[28px] py-[34px]"
                  : "pl-[108px] pr-[28px] py-[34px]"
              } `
        } w-full duration-300 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-500 dark:to-slate-700 bg-slate-200 min-h-screen h-full`}>
        <Outlet />
        {/* <h1 className='text-2xl font-semibold '>Home</h1> */}
      </div>
    </div>
  );
}
