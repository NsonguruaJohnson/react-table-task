import '../myStyles.css'

export default function Table({ data }) {
    return (
      
    <table  className="border-spacing-10 table">
            <thead className="bg-[#E8F4FF] w-full">
        <tr className="">
          <th>
            <input type="checkbox" name="" id="" />
          </th>
          <th>&nbsp;</th>
          <th className="text-left px-4">Product&nbsp;Name</th>
          <th>Status</th>
          <th>Qty</th>
          <th>Category</th>
          <th>On&nbsp;Sale</th>
          <th>Vendor</th>
        </tr>
      </thead>
      <tbody className="px-12 ">
        {data?.length > 0 &&
          data?.map((el, i) => (
            <tr className=" table_row " key={i}  >
              <td className="px-4">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="">
                <img
                  width="130px"
                  height="130px"
                  src={el.images}
                  className="border border-[#637381] rounded m-0"
                />
              </td>
              <td className="py-4">                
                <div className="flex-col text-left px-4">
                  <h4>{el.name}</h4>
                  <p className="text-gray-400">&nbsp;</p>
                  <p className="text-gray-400">&nbsp;</p>
                </div>
              </td>
              {/* <td>{el.name}</td> */}
              <td className=" px-12">{el.status}</td>
              <td className=" px-12">{el.quantity}</td>
              <td className=" px-12">{el.category}</td>
              <td className=" px-12">{el.onSale ? "Yes" : "No"}</td>
              <td className=" px-12">{el.vendor}</td>
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
