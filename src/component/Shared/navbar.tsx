import { logOut, userCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Codesandbox } from "lucide-react";
import toast from "react-hot-toast";
import { ModeToggle } from "./ModeToggle";

const Navbar = ({ setTheme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const accessToken = useAppSelector(userCurrentToken);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    toast.success("Log Out successfully & Returned Home");
    navigate("/");
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className=" h-[96] text-white max-w-[1440px] mx-auto shadow-lg ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            <Codesandbox size={40} /> Charitious
          </h1>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto lg:flex`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium text-white border md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <Link to={"/"}>
              <a href="#" className="block px-3 py-2" aria-current="page">
                Home
              </a>
            </Link>

            <Link to="/relief-goods">
              <a href="" className="block px-3 py-2" aria-current="page">
                All Relief
              </a>
            </Link>
            {!accessToken ? (
              <>
                <Link to="/login">
                  <a href="" className="block px-3 py-2">
                    Login
                  </a>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard">
                  <a href="#" className="block px-3 py-2">
                    Dashboard
                  </a>
                </Link>
                <li>
                  <a href="" className="block px-3 py-2" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </>
            )}

            <li className="ml-auto md:ml-0 ">
            <ModeToggle setTheme={setTheme}></ModeToggle>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
