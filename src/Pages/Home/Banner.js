import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assests/images/banner-img.jpg";
const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("products");
  };
  return (
    <div class="hero min-h-screen bg-base-100">
      <div class=" hero-content flex-col lg:flex-row-reverse">
        <img src={img} class="max-w-xl rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 class="text-5xl font-bold">ELECTRIC GEAR</h1>
          <p class="py-6 text-xl">
            we are best electric tool manufacturer in the world, we have
            millions of client worldwide,meet the client what they tell us. We
            the number one brand in the world, we sell products
            Europe,USA,Canada,France,Germany, Italy, UK,Qutar and so many
          </p>
          <button class="btn bg-cyan-400 border-0">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
