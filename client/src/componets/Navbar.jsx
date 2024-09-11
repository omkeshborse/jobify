import Wrapper from "../assets/wrappers/Navbar";
import Logo from "../componets/Logo"
import { FaAlignLeft } from "react-icons/fa";
import { useDahsboardContext } from "../pages/DashboardLayout";
const Navbar = () => {
    const { toggleSideBar } = useDahsboardContext(); ;
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSideBar}>
            <FaAlignLeft />
        </button>
        <div>
            <Logo />
            <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
            Toogle/Logout
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
