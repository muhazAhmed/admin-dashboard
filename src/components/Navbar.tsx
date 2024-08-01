import { NavbarProps } from "@/lib/props";
import { FC } from "react";
import "./style.css";
import { Avatar, AvatarImage } from "./ui/avatar";
import { TooltipIcon } from "./Sidebar";
import { motion } from "framer-motion";

const Navbar: FC<NavbarProps> = ({ children }) => {
  const navbarVariants = {
    hidden: { y: "-100%" },
    visible: { y: 0 },
  };

  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="navbar">
      <motion.div
        className="navbar-content"
        initial="hidden"
        animate="visible"
        variants={navbarVariants}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
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
      </motion.div>
      <motion.div
        className="app-container"
        initial="hidden"
        animate="visible"
        variants={fadeVariant}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Navbar;
