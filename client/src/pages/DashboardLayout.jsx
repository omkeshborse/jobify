import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import SmallSidebar from "../componets/SmallSidebar";
import BigSidebar from "../componets/BigSidebar";
import Navbar from "../componets/Navbar";
const DashboardLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div className="">
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export default DashboardLayout;
