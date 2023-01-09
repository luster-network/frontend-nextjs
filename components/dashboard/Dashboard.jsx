import React, {useState} from "react";
import Sidebar from "./Sidebar";

const Dashboard = ({Children}) => {

  return (
    <div>
      <div className="w-full min-h-[90vh] flex flex-row">
        <Sidebar />
        
        <div className="w-[100%]">
          {Children}
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
