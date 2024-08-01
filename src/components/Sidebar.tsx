import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProps } from "@/lib/props";
import { FC, useState } from "react";
import { motion } from "framer-motion";

export const TooltipIcon: FC<TooltipProps> = ({ tooltipText, children }) => (
  <TooltipProvider>
    <Tooltip delayDuration={200}>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState<number>(0);

  const handleSelection = (index: number) => {
    setSelectedMenu(index);
  };

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
  };

  const iconArray = [
    { name: "fa-solid fa-home", tooltip: "Home", id: 0 },
    { name: "fa-solid fa-square-poll-vertical", tooltip: "Dashboard", id: 1 },
    { name: "fa-solid fa-clipboard-check", tooltip: "Tasks", id: 2 },
    { name: "fa-solid fa-wallet", tooltip: "Wallet", id: 3 },
    { name: "fa-brands fa-shopify", tooltip: "Shop", id: 4 },
    { name: "fa-solid fa-right-to-bracket", tooltip: "Sign In", id: 5 },
  ];

  return (
    <motion.div
      className="sidebar"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="top-icons">
        <i className="fa-solid fa-blog logo"></i>
        {iconArray.slice(0, -1).map((icon) => (
          <TooltipIcon key={icon.id} tooltipText={icon.tooltip}>
            <i
              className={`${icon.name} ${
                selectedMenu === icon.id ? "selected" : ""
              }`}
              onClick={() => handleSelection(icon.id)}
            ></i>
          </TooltipIcon>
        ))}
      </div>
      <div className="end-icons">
        <TooltipIcon tooltipText={iconArray[5].tooltip}>
          <i
            className={`${iconArray[5].name} ${
              selectedMenu === iconArray[5].id ? "selected" : ""
            }`}
            onClick={() => handleSelection(iconArray[5].id)}
          ></i>
        </TooltipIcon>
      </div>
    </motion.div>
  );
};

export default Sidebar;
