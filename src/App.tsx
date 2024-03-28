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
      className={`bg-gradient-to-bl ${
        theme === "system" && "from-[#09203F] to-[#537895]"
      } 
        ${theme === "dark" && "from-[#1e0123] to-[#000000]"} 
        ${theme === "light" && "from-[#42275a] to-[#734b6d]"} 
      
      
      `}
    >
      <MainLayout setTheme={setTheme}></MainLayout>
    </div>
  );
}

export default App;
