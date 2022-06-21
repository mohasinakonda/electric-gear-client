import React from "react";
import { Link } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import Spinner from "../Shared/Spinner";
import SampleProduct from "./SampleProduct";

const SampleProducts = () => {
  const [data, isLoading] = useProduct();
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div className="flex flex-between">
        <h2 className="text-2xl text-accent p-10">Our Products</h2>
        <Link to="/products" text-accent p-10>
          see all Products
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-5">
        {data
          .reverse()
          .slice(0, 6)
          .map((product) => (
            <SampleProduct key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default SampleProducts;
