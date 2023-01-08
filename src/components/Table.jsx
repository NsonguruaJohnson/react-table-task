export default function Table({ data }) {
  return (
    <table  className="table-fixed border-spacing-10">
      <thead className="bg-[#E8F4FF]">
        <tr className="">
          <th>
            <input type="checkbox" name="" id="" />
          </th>
          <th>&nbsp;</th>
          <th>Product&nbsp;Name</th>
          <th>Status</th>
          <th>Qty</th>
          <th>Category</th>
          <th>On&nbsp;Sale</th>
          <th>Vendor</th>
        </tr>
      </thead>
      <tbody className="px-10">
        {data?.length > 0 &&
          data?.map((el, i) => (
            <tr key={i}>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>
                <img
                  width="75"
                  height="75"
                  src={el.images}
                  className="border border-[#637381] rounded"
                />
              </td>
              <td>{el.name}</td>
              <td>{el.status}</td>
              <td>{el.quantity}</td>
              <td>{el.category}</td>
              <td>{el.onSale ? "Yes" : "No"}</td>
              <td>{el.vendor}</td>
            </tr>
          ))}
        {data?.length === 0 && (
          <tr>
            <td colSpan="8">No Data Available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
