import { useState } from "react";

export default function Pagination({ data, page, currentPage }) {
    const [totalPage] = useState(5);
    const activePage = "bg-[#ADC3E9]";

  return (
    <div>
      <ul className="flex items-center mt-5">
        <li
          onClick={() => page(currentPage - 1)}
          disabled={currentPage === 1}
          className="cursor-pointer border border-[#ADC3E9] w-[58px] py-2 border-tl-[4px] border-bl-[4px]"
        >
          Prev
        </li>
        {data?.length > 0 &&
          data.map((el, i) => (
            <li
              key={i}
              onClick={() => page(el)}
              className={`${
                currentPage === el ? 'bg-[#ADC3E9]' : ''
              } cursor-pointer border border-[#ADC3E9] w-[35px] py-2`}
            >
              {el}
            </li>
          ))}
        {/* <li
          onClick={() => page(2)}
          className="cursor-pointer border border-[#ADC3E9] w-[35px] py-2"
        >
          2
        </li>
        <li
          onClick={() => page(3)}
          className="cursor-pointer border border-[#ADC3E9] w-[35px] py-2"
        >
          3
        </li>
        <li
          onClick={() => page(4)}
          className="cursor-pointer border border-[#ADC3E9] w-[35px] py-2"
        >
          4
        </li> */}
        <li
          onClick={() => page(currentPage + 1)}
          disabled={currentPage === totalPage}
          className={`${
            currentPage === totalPage ? "cursor-none" : "cursor-pointer"
          } border border-[#ADC3E9] w-[58px] py-2 border-tr-[4px] border-br-[4px]`}
        >
          Next
        </li>
      </ul>
      {/* <p>current {currentPage} total {totalPage} he</p> */}
      {/* {<p>check {(currentPage === 5)}</p>}  */}
    </div>
  );
}
