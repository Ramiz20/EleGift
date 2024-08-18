import { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { IoIosBookmark } from "react-icons/io";
function Product({ item }) {
  const [bookMark, setBookMark] = useState(false);

  const [giftNow, setGiftNow] = useState(false);
  const changeGiftValue = () => {
    setGiftNow((giftNow) => !giftNow);
  };
  return (
    <>
      <div className="product-box">
        <img src={item.picture} />

        <div className="product-info">
          <div className="product-content">
            <div className="left-content">
              <h2>{item.name}</h2>
              <p>
                <BsCurrencyDollar />
                {item.priceRange.min} - {item.priceRange.max}
              </p>
              <p>
                {item.deliveryInfo.message} {item.deliveryInfo.date}
              </p>
            </div>
            <div className="right-content">
              <span onClick={() => setBookMark(!bookMark)}>
                {!bookMark ? <CiBookmark /> : <IoIosBookmark />}
              </span>
            </div>
          </div>
          <div className="product-price">
            <button
              onClick={changeGiftValue}
              style={{ backgroundColor: giftNow ? "#fa2a46" : "transparent" }}
            >
              Gift Now
            </button>

            <p>
              <BsCurrencyDollar />
              {item.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
