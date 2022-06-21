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
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-accent p-10">Our Products</h2>
        <Link
          to="/products"
          className="text-cyan-500 text-lg hover:text-cyan-200"
          p-10
        >
          See all Products &gt;
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
