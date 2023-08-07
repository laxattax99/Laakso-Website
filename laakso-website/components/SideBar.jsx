import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SideBarIcon from "./SideBarIcon";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsPersonVcard } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="flex flex-col fixed h-screen top-0 left-0 w-24 shadow-lg bg-gray-800">
      <SideBarIcon
        icon={<AiOutlineHome size="28" />}
        text="Home"
        link="/"
        noNewTab
      />
      <Divider />
      <SideBarIcon
        icon={<FaLinkedinIn size="28" />}
        text="My LinkedIn"
        link="https://www.linkedin.com/in/colin-laakso/"
      />
      <Divider />
      <SideBarIcon
        icon={<FaGithub size="28" />}
        text="My GitHub"
        link="https://github.com/laxattax99/"
      />
      <Divider />
      <SideBarIcon
        icon={<AiOutlineMail size="28" />}
        text="Send an Email"
        link="mailto:laxattack99@live.com"
      />
      <Divider />
      <SideBarIcon
        icon={<BsPersonVcard size="28" />}
        text="My Resume"
        link="/Resume"
        noNewTab
      />
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
