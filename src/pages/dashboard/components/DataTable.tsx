import Cards from "@/components/ui/Cards";
import { dataTable, NonDeliveredStatus } from "../../dashboard/arrayOfItems";

const DataTable = () => {
  return (
    <Cards className="data-table">
      <h3>Recent Orders</h3>
      <div className="table-body">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order No.</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dataTable?.map((item: any, index: number) => (
              <tr key={index}>
                <td
                  className="dda"
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <img src={item?.logo} alt="logo" />
                  {item?.customer}
                </td>
                <td>{item?.orderNo}</td>
                <td>{item?.amount}</td>
                <td>
                  <span
                    style={{
                      backgroundColor: NonDeliveredStatus.includes(item?.status)
                        ? "red"
                        : "green",
                    }}
                  >
                    {item?.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Cards>
  );
};

export default DataTable;
