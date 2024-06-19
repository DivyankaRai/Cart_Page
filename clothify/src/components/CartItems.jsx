import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../redux/actions/cartActions";

const ItemCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(incrementQty(id));
  };

  const handleDecrease = () => {
    if (qty > 1) {
      dispatch(decrementQty(id));
    }
  };

  const handleDelete = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="flex items-center p-4 border-b border-gray-300">
      <img src={img} alt={name} className="w-16 h-16 object-cover" />
      <div className="ml-4 flex-grow">
        <h2 className="font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">₹{price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button onClick={handleDecrease} className="px-2 py-1 bg-gray-500 text-white rounded">-</button>
          <span className="px-4">{qty}</span>
          <button onClick={handleIncrease} className="px-2 py-1 bg-gray-500 text-white rounded">+</button>
        </div>
        <p className="text-gray-600 mt-2">Total: ₹{(qty * price).toFixed(2)}</p>
      </div>
      <div>
        <button onClick={handleDelete} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
      </div>
    </div>
  );
};

export default ItemCard;
