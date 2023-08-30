import { useState } from "react";
import Product from "./Product";
import { useEffect } from "react";

const OurProducts = () => {
  //Load product
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mb-14">
      <div className="text-center mx-auto max-w-2xl">
        <h3 className="text-xl font-bold text-[#FF512F]">Popular Products</h3>
        <h2 className="text-5xl font-bold my-4">Browse Our Products</h2>
        <p className="text-[#737373] my-4">
          The majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid mt-16 mb-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
