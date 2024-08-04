import { CardProps } from "@/lib/props";
import { FC } from "react";

const cardStyles = {
  container: {
    borderRadius: "10px",
    padding: "10px",
    minWidth: "10vw",
    minHeight: "23vh",
    backgroundColor: "var(--card)",
    color: "#fff",
  },
};

const Cards: FC<CardProps> = ({ children, className, id, style }) => {
  return (
    <div
      className={`${className} card`}
      id={id}
      style={{ ...cardStyles?.container, ...style }}
    >
      {children}
    </div>
  );
};

export default Cards;
