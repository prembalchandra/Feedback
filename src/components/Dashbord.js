import React from "react";
import Sidebar from "./Sidebar";
import DashboardRight from "./DashbordRight";

const Dashboard = () => {
  return (
    <section className="dashboard-wrapper">
      <div className="srcn-container">
        <div className="dashboard-wrapper-row row">
          <div className="sidebar-col-left">
            <Sidebar />
          </div>
          <div className="dashbord-right">
            <DashboardRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
