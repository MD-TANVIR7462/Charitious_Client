import { useEffect, useState } from "react";
import MainLayout from "./layout/MainLayout";


type Theme = "dark" | "light" | "system";

function App() {
  const [theme, setTheme] = useState<Theme | null>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? (storedTheme as Theme) : null;
  });

  useEffect(() => {
    if (!theme) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setTheme("light");
      } else {
        setTheme("system");
      }
    } else {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light", "system");
    } else if (theme === "system") {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add("system");
    } else {
      document.documentElement.classList.remove("dark", "system");
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
