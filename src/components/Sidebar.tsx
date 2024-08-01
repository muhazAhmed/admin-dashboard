import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProps } from "@/lib/props";
import { FC } from "react";

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
  return (
    <div className="sidebar">
      <div className="top-icons">
        <i className="fa-solid fa-blog logo"></i>
        <TooltipIcon tooltipText="Home">
          <i className="fa-solid fa-home selected"></i>
        </TooltipIcon>
        <TooltipIcon tooltipText="Dashboard">
          <i className="fa-solid fa-square-poll-vertical"></i>
        </TooltipIcon>
        <TooltipIcon tooltipText="Tasks">
          <i className="fa-solid fa-clipboard-check"></i>
        </TooltipIcon>
        <TooltipIcon tooltipText="Wallet">
          <i className="fa-solid fa-wallet"></i>
        </TooltipIcon>
        <TooltipIcon tooltipText="Shop">
          <i className="fa-brands fa-shopify"></i>
        </TooltipIcon>
      </div>
      <div className="end-icons">
        <TooltipIcon tooltipText="Sign In">
          <i className="fa-solid fa-right-to-bracket"></i>
        </TooltipIcon>
      </div>
    </div>
  );
};

export default Sidebar;
