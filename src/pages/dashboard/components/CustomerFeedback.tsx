import Cards from "@/components/ui/Cards";
import { customerFeedback } from "../arrayOfItems";

const CustomerFeedback = () => {
  return (
    <Cards className="testimonial">
      <h3>Customer's Feedback</h3>
      {customerFeedback?.map((item: any, index: number) => (
        <div className="testimonial-body" key={index}>
          <div className="testimonial-header">
            <img src={item?.logo} alt="logo" />
            {item?.name}
          </div>
          <div className="ratings">
            {Array.from({ length: item.rating }).map((_, i) => (
              <i className="fa-solid fa-star" key={i}></i>
            ))}
          </div>
          <p>{item?.comment}</p>
        </div>
      ))}
    </Cards>
  );
};

export default CustomerFeedback;
