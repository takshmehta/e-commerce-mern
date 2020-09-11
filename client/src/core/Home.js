import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Home" description="Welcome to the t-shirt store.">
      {/* <div className="row text-center"> */}
      <h1>All of tshirts.</h1>
      <div className="row text-center">
        {products.map((product, index) => {
          return (
            <div key={index} className="col-md-4">
              <Card product={product} />
            </div>
          );
        })}
      </div>
      {/* </div> */}
    </Base>
  );
}
