import { headerChips } from "../arrayOfItems";
import Cards from "../../../components/ui/Cards";

const HeaderChips = () => {
  return (
    <div className="layer-one">
      {headerChips?.map((item: any, index: number) => (
        <Cards className="header-card" key={index}>
          <div className="header-card-item">
            <i
              className={item?.icon}
              style={{
                backgroundColor: item?.iconBgColor,
                color: item?.iconColor,
              }}
            ></i>
            <p>{item?.label}</p>
          </div>
          <div className="header-card-count">
            <h5>{item?.count}</h5>
            <p
              style={
                item?.profit === "up"
                  ? { color: "#12d112" }
                  : { color: "#F25E5E" }
              }
            >
              <i className={`fa-solid fa-caret-${item?.profit}`}></i>{" "}
              {item?.percent}
            </p>
          </div>
        </Cards>
      ))}
    </div>
  );
};

export default HeaderChips;
