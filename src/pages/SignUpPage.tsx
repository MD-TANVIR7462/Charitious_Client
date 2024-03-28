import {  useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "@/redux/api/api";
import toast from "react-hot-toast";
import { useState } from "react";
import { Codesandbox } from "lucide-react";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [createUser] = useCreateUserMutation();


  const singUPHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const UserData = {
      email,
      password,
      name,
    };
    createUser(UserData);
    toast.success("user Created! Login Now");
    navigate("/login");
    
  };
  return (

   <div className="flex h-[70dvh] md:h-[80dvh] w-full  items-center justify-center  bg-cover bg-no-repeat my-8">
   <div className="rounded-xl bg-gray-800 bg-opacity-50 px-[12dvh] py-[12dvh] shadow-lg backdrop-blur-md max-sm:px-8">
     <div className="text-white">
       <div className="mb-8 flex flex-col items-center">
         <Codesandbox size={40} />
         <h1 className="mb-2 text-2xl">Charitious</h1>
         <span className="text-gray-300">Enter Register Details</span>
       </div>
       <form onSubmit={singUPHandle}>
         <div className="mb-4 text-lg">
           <input
             className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-4 sm:px-12  py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
             type="name"
             name="name"
             placeholder="Name"
             required
                          onChange={(e)=>setName(e.target.value)}
           />
         </div>
         <div className="mb-4 text-lg">
           <input
             className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-4 sm:px-12  py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
             type="email"
             name="email"
             placeholder="Email"
             required
             onChange={(e)=>setEmail(e.target.value)}
           />
         </div>

         <div className="mb-4 text-lg">
           <input
             className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-4 sm:px-12 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
             type="Password"
             name="name"
             placeholder="Password"
             required
             onChange={(e)=>setPassword(e.target.value)}
           />
         </div>
       
         <div className="mt-8 flex justify-center text-lg">
           <button
             type="submit"
             className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
           >
             Register
           </button>
         </div>
       </form>
     </div>
   </div>
 </div>


  );
};

export default SignUpPage;
