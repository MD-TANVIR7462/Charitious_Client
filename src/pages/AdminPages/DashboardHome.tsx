import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: " 2021", uv: 40400, pv: 1400, amt: 2400 },
  { name: " 2022", uv: 40300, pv: 2200, amt: 2300 },
  { name: " 2023", uv: 50100, pv: 2100, amt: 2100 },
  { name: " 2024", uv: 50200, pv: 2200, amt: 2300 },
];

const DashboardHome = () => {
  const [chartWidth, setChartWidth] = useState(600); 

  useEffect(() => {
    const handleResize = () => {
    
      if (window.innerWidth >= 1200) {
        setChartWidth(600);


      } else if (window.innerWidth >= 900) {
        setChartWidth(500); 
      } 
       else if (window.innerWidth >= 640) {
        setChartWidth(400); 
      } 
       else if (window.innerWidth >= 400) {
        setChartWidth(340); 
      } 
      
      else {
        setChartWidth(300); 
      }
    };


    window.addEventListener("resize", handleResize);


    handleResize();


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col ml-2 sm:ml-5 md:ml-10 mt-5 sm:mt-10 md:mt-24">
      <h1 className="text-4xl text-white font-bold pb-4 sm:pb-6 md:pb-8 lg:pb-10">
        Our Relief Chart
      </h1>
      <div className="w-full sm:w-3/5 md:w-2/4 lg:w-1/3 xl:w-1/2">
        <LineChart
          width={chartWidth}
          height={300}
          data={data}
          margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid
            stroke="#ccc"
            strokeDasharray="5 5"
            className="text-white"
          />
          <XAxis dataKey="name" tick={{ fill: "#fff" }} />
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default DashboardHome;
