import type { NextPage } from "next";
import Nav from "../components/Nav"
import GroupChard from "../components/GroupChard"
import GroupChardMax from "../components/GroupChardMax"
import CarChart from "../components/CarChart"
import CarChartMax from "../components/CarChartMax"
import CarCharunit from "../components/CarChartunit"
import GroupChartunit from "../components/GroupChardunit"

const Graficas: NextPage = () => {
    return (
      
      <div>

        <Nav></Nav>

      <div className="grid grid-cols-2">
        <div className="w-[400px]">
      <CarCharunit></CarCharunit>
        </div>
        <div className="w-full">
      <GroupChartunit></GroupChartunit>
        </div>
      </div>
      <div className="border-t-4 border-black "></div>

      <div className="grid grid-cols-2">
        <div className="w-[400px]">
      <CarChart></CarChart>
        </div>
        <div className="w-full">
      <GroupChard></GroupChard>
        </div>
      </div>
      <div className="border-t-4 border-black "></div>
      <div className="grid grid-cols-2">
        <div className="w-[400px]">
      <CarChartMax></CarChartMax>
        </div>
        <div className="w-full">
      <GroupChardMax></GroupChardMax>
        </div>
      </div>
      
  
      </div>
  
    );
  };
  
  export default Graficas;