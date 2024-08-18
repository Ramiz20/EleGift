import "./Style/Style.css";
import Product from "./Product";
import { useState } from "react";
import Data from "./Data.json";
import Banner from "./Banner";
// import axios from "axios";
import Pagination from "./Pagination";

function MainContent() {
  const [add, setAdd] = useState(false);
  const [filterData, setFilterData] = useState(Data);
 
  const handleClick = (index,content) => {
    setAdd(index);
   
    setFilterData(Data.filter((d) => d.categories.includes(content)))
   
  };



  

  return (
    <>
      <main>
        <div className="main-content">
          <h1>Popular Gift Collections</h1>
          <div className="buttons">
            <ul>
              <li
                onClick={() => handleClick(1,"New")}
                className={add === 1 ? "active" : ""}
              >
                New Gift's
              </li>
              <li
                onClick={() => handleClick(2,"Top Rated")}
                className={add === 2 ? "active" : ""}
              >
                Top Rated Gift's
              </li>
              <li
                onClick={() => handleClick(3,"Trending")}
                className={add === 3 ? "active" : ""}
              >
                Trending Gift's
              </li>
              <li
                onClick={() => handleClick(4,"Best Offer")}
                className={add === 4 ? "active" : ""}
              >
                Best Offer Gift's
              </li>
            </ul>
           
          </div>
        </div>
        <div className="main-products">
          {filterData.map((item, id) => {
            return <Product key={id} item={item} />;
          })}
        </div>

        <Pagination/>
        <Banner />
      </main>
    </>
  );
}

export default MainContent;
