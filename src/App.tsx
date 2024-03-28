import { useEffect, useState } from "react";
import MainLayout from "./layout/MainLayout";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "system") {
      document.documentElement.classList.add("system");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <div
      className={`${
        theme === "system" && "bg-gradient-to-bl  from-[#09203F] to-[#537895]"
      } 
        ${theme === "dark" && "bg-gradient-to-bl  from-[#1e0123] to-[#000000]"} 
        ${theme === "light" && "bg-gradient-to-l  from-[#42275a] to-[#734b6d]"} 
      
      
      `}
    >
      <MainLayout setTheme={setTheme}></MainLayout>
    </div>
  );
}

export default App;
// from-[#42275a] to-[#734b6d]
