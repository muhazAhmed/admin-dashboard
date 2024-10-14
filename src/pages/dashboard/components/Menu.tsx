import Cards from "@/components/ui/Cards";
import { menuItems } from "../arrayOfItems";

const Menu = () => {
  return (
    <Cards className="menu">
      {menuItems?.map((item: any, index: number) => (
        <div className="menu-items" key={index}>
          <h3>
            <i
              className={item?.icon}
              style={{
                backgroundColor: item?.iconBgColor,
                color: item?.iconColor,
              }}
            ></i>{" "}
            {item?.label}
          </h3>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      ))}
    </Cards>
  );
};

export default Menu;
