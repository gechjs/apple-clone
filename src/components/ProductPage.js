import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { productId } = useParams();
  console.log(productId)

  const [fetchedData, setData] = useState([]);
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          new URL("../assets/iphone.json", import.meta.url)
        );
        const data = await response.json();
        setData(data.products);
      } catch (error) {
        console.error("Error ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center">
      <br />
      <br />
      <br />
      <h1 className="fs-5 m-3">iPhones</h1>
      <h2 className="m-3">The Best for the Brightest</h2>
      {fetchedData?.map((obj, index) => {
        const isEven = index % 2 === 0;
        const x = isEven ? 2 : 1;
        const y = isEven ? 1 : 2;

        return(
          obj.product_id == productId ? (
            <div key={obj.product_id}>
              <div className="row w-60">
                <div
                  className={`col-sm-12 col-md-6 order-${x} d-flex justify-content-center align-items-center`}
                >
                  <div>
                    <h1>{obj.product_name}</h1>
                    <h3>{obj.product_brief_description}</h3>
                    <div>{obj.starting_price}</div>
                    <div>{obj.price_range}</div>
                    <div>
                      <Link to={`/iphone/${obj.product_id}`}>learn more</Link>
                    </div>
                  </div>
                </div>
                <div className={`col-sm-12 col-md-6 order-${y}`}>
                  <img
                    className="w-50"
                    src={obj.product_img}
                    alt={obj.product_name}
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )
      })}
    </div>
  );
}

export default ProductPage;
