import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, rating, img }));
    handleToast(name);
  };

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-full h-[190px] rounded-md cursor-pointer transition-transform ease-in-out transform hover:scale-105"
      />
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center text-yellow-400">
          <AiFillStar className="mr-1" />
          <span>{rating}</span>
        </div>
        <span className="text-lg font-bold text-green-500">₹{price}</span>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-full py-2 text-sm font-medium text-black bg-lightblue rounded-lg mt-2 transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
