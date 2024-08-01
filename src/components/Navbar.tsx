import { NavbarProps } from "@/lib/props";
import { FC } from "react";
import "./style.css";
import { Avatar, AvatarImage } from "./ui/avatar";
import { TooltipIcon } from "./Sidebar";

const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="search-bar">
          <input placeholder="Search" />
          <i className="fa-solid fa-search"></i>
        </div>
        <div className="header-btn">
          <TooltipIcon tooltipText="Messages">
            <i className="fa-solid fa-envelope"></i>
          </TooltipIcon>
          <TooltipIcon tooltipText="Settings">
            <i className="fa-solid fa-gear"></i>
          </TooltipIcon>
          <TooltipIcon tooltipText="Notification">
            <i className="fa-solid fa-bell"></i>
          </TooltipIcon>
          <TooltipIcon tooltipText="Profile">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </TooltipIcon>
        </div>
      </div>
      <div className="app-container">{children}</div>
    </div>
  );
};

export default Navbar;
