import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [paginationData, setPaginationData] = useState([1,2,3,4]);
  const [page, setPage] = useState(1);

  let url = `https://60a8e2a620a641001730664e.mockapi.io/api/products/?page=${page}&limit=5`;
  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setTableData(response.data);
    } catch (err) {
      console.log({ err });
    } finally {
      setLoading(false);
    }
  };

  // Handle Page Change
  // const handlePageChange = () => {
  //   // setPage((e) => {
  //   //   page = e.target.value;
  //   // });
  // };

  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="py-3">
        <form className="flex justify-between">
          <input className="border-[#637381]-600 border-2  bg-[#F9F9FB] rounded" type="text" placeholder=" Product Name or SKU" />
          <input type="text" placeholder="Vendor Name or Vendor SKU" />
          <input type="text" placeholder="On Sale" />
          <input type="text" placeholder="Stock Status" />
          <input type="text" placeholder="Product Status" />
          <input type="text" placeholder="mm/dd/yy - mm/dd/yy" />
          <button className="rounded bg-[#021E4A] text-white p-2">Apply</button>
        </form>
      </div>

      {loading ? (
        <h4>Loading ...</h4>
      ) : (
          <>
            <Table data={tableData} />
            <Pagination data={paginationData} page={setPage} currentPage={page} />
        </>
      )}
    </div>
  );
}

export default App;
