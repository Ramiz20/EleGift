import "./Style/Style.css";
import { useState } from "react";


function Pagination() {
    const [pagination, setPagination] = useState(1);
    
    const handleClick = (key) => {
        setPagination(key);
      };
    return (  <>
     <div className="pagination">
          <ul>
            <li
              onClick={() => handleClick(1)}
              className={pagination === 1 ? "active" : ""}
            >
              1
            </li>
            <li
              onClick={() => handleClick(2)}
              className={pagination === 2 ? "active" : ""}
            >
              2
            </li>
            <li
              onClick={() => handleClick(3)}
              className={pagination === 3 ? "active" : ""}
            >
              3
            </li>
            <li
              onClick={() => handleClick(4)}
              className={pagination === 4 ? "active" : ""}
            >
              4
            </li>
            <li
              onClick={() => handleClick(5)}
              className={pagination === 5 ? "active" : ""}
            >
              5
            </li>
          </ul>
        </div>
    </>);
}

export default Pagination;