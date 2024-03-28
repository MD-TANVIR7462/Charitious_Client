import { useEffect, useState } from "react";
import { Codesandbox } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
const DashBoard = () => {
  const [toggle, setToggle] = useState(false); // Initially hide sidebar on small devices
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 768) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [windowWidth]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-l from-[#42275a] to-[#734b6d]">
      {/* Hamburger icon for small devices */}
      {windowWidth < 768 && (
        <button
          className="absolute top-4 right-4 z-50 btn btn-circle btn-outline text-gray-500 btn-sm"
          onClick={toggleMenu}
        >
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      )}

      {/* Sidebar */}
      {toggle && (
        <div className="absolute top-0 left-0 h-full w-56 bg-purple-200 rounded-r-3xl overflow-hidden z-40">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-3xl uppercase text-purple-500">
              <Codesandbox size={40} />
            </h1>
          </div>
          <ul className="flex flex-col py-4">
            {/* Sidebar links */}

            <li>
              <Link
                to={'/dashboard'}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text-sm font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/dashboard/supplies'}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-music"></i>
                </span>
                <span className="text-sm font-medium">All Supply</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/dashboard/create-supply'}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-drink"></i>
                </span>
                <span className="text-sm font-medium  ">Add Supply</span>
              </Link>
            </li>
            <div className="border-b border-purple-500 w-[83%] mx-auto " />
            <li>
              <Link
                to={"/"}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-shopping-bag"></i>
                </span>
                <span className="text-sm font-medium">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/relief-goods"}
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-chat"></i>
                </span>
                <span className="text-sm font-medium">ALl Relif</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Main content */}

      <div
        className={`flex-grow ${
          toggle ? "" : ""
        } w-[98%] mt-20  mx-auto   md:ml-[30dvh] border p-1 md:p-4 rounded-lg border-purple-500 md:w-[67%] lg:w-[73%] xl:w-[80%]  `}
      >
     <Outlet></Outlet>
   
      </div>
    </div>
  );
};

export default DashBoard;
