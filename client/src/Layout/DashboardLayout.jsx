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
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { MdAccountBalance, MdPayments } from "react-icons/md";

export default function DashboardLayout() {
  const [open, setOpen] = useState(true);
  const [isScreenSmallerThan768px, setIsScreenSmallerThan768px] = useState(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setIsScreenSmallerThan768px(newWindowWidth < 768);
      if (isScreenSmallerThan768px) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    // Add an event listener to update the window dimensions when the window is resized.
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isScreenSmallerThan768px]);

  const Menus = [
    {
      title: "Dashboard",
      icon: <BiSolidDashboard />,
      route: "/admin-dashboard",
    },
    {
      title: "Manage User",
      icon: <FaUsersGear />,
      submenu: true,
      submenuItems: [
        {
          title: "Add New User",
          icon: <BsPersonFillAdd />,
          route: "/add-new-user",
        },
        { title: "Users List", icon: <FaUsers />, route: "/users-list" },
      ],
    },
    {
      title: "Manage Meal",
      icon: <GiHotMeal />,
      submenu: true,
      submenuItems: [
        { title: "Meal Register", icon: <GiMeal />, route: "/meal-register" },
        {
          title: "Meals List",
          icon: <BiSolidFoodMenu />,
          route: "/meal-list",
        },
        {
          title: "Meal Rate Set",
          icon: <HiMiniReceiptPercent />,
          route: "/meal-rate-set",
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
          route: "/advance-meal-booking",
        },
        {
          title: "Booked Meals List",
          icon: <BiSolidFoodMenu />,
          route: "/booked-meal-list",
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
          route: "add-new-payment",
        },
        {
          title: "Payments History",
          icon: <FaHistory />,
          route: "/payment-history",
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
          route: "/record-daily-market-expenses",
        },
        {
          title: "Daily Market Expense List",
          icon: <FaListOl />,
          route: "/daily-market-expenses-list",
        },
      ],
    },
    {
      title: "Settings",
      icon: <IoSettingsSharp />,
      route: "/settings",
      space: true,
    },
    {
      title: "Profile",
      icon: <BiSolidUserCircle />,
      route: "/profile",
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
          isScreenSmallerThan768px && "h-full"
        }  dark:bg-slate-800 bg-slate-200 fixed h-full`}>
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
                <a href={menu?.route}>
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
                </a>
                {/* sub menus */}
                {menu.submenu && submenuOpen[index] && open && (
                  <ul className='pt-2'>
                    {menu.submenuItems.map((submenuItem, subIndex) => (
                      <a href={submenuItem?.route} key={subIndex}>
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
      </div>

      {/* Outlet */}
      <div
        className={`${
          isScreenSmallerThan768px
            ? "px-28 py-[34px]"
            : `${
                open
                  ? "pl-[320px] pr-[28px] py-[34px]"
                  : "pl-[108px] pr-[28px] py-[34px]"
              } `
        } w-full duration-300 bg-slate-200`}>
        <h1 className='text-2xl font-semibold h-[1000px]'>Home</h1>
      </div>
    </div>
  );
}
