import Link from "next/link";

const SideBarIcon = ({ icon, text = "tooltip", link, noNewTab = false }) => {
  return (
    <div className="sidebar-icon group">
      <Link href={link} rel="noopener noreferrer" target={!noNewTab ? "_blank" : ""}>{icon}</Link>
      <span className="sidebar-text group-hover:scale-100">{text}</span>
    </div>
  );
};
export default SideBarIcon;
