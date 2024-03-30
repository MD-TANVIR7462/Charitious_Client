/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "@/redux/api/api";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import toast from "react-hot-toast";
import { useState } from "react";
import { Codesandbox } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginUserMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hangleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const UserLoginInfo = {
      email,
      password,
    };

    try {
      const res = await login(UserLoginInfo).unwrap();
      const user = verifyToken(res?.token);
      dispatch(setUser({ user: user, token: res?.token }));
      toast.success("User successfully Login");
      navigate("/");
    } catch (error: any) {
      if (
        error.data?.statusCode === 401 &&
        error.data?.message === "Invalid email"
      ) {
        toast.error("Invalid email. Please check your email and try again.");
      } else {
        toast.error("Wrong email or No User Created Yet");
      }
    }
  };

  return (
    <div className="flex h-[70dvh] md:h-[80dvh] w-full  items-center justify-center  bg-cover bg-no-repeat my-8">
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-[12dvh] py-[12dvh] shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <Codesandbox size={40} />
            <h1 className="mb-2 text-2xl">Charitious</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form onSubmit={hangleLogin}>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-4 sm:px-12  py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="email"
                name="name"
                required
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-4 sm:px-12 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="Password"
                name="name"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="w-full text-center">
              {" "}
              <span className="text-gray-300">
                New Here ?{" "}
                <Link
                  to={"/register"}
                  className="cursor-pointer hover:text-purple-700 text-purple-500 "
                >
                  Resister
                </Link>
              </span>
            </p>
            <div className="mt-8 flex justify-center text-lg">
              <button
                type="submit"
                className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
