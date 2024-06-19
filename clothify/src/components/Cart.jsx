import React from "react";
import ItemCard from "./CartItems";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  const showEmptyCart = () => (
    <div className="w-full flex items-center justify-center mt-5">
      <div className="max-w-lg w-full bg-lightblue p-8 rounded-lg shadow-lg text-center">
        <img
          src="https://media.tenor.com/iFi3jJDlevMAAAAi/shopping-buy.gif"
          alt="Empty cart GIF"
          className="w-48 h-auto mx-auto"
        />
        <h2 className="text-xl font-bold text-gray-800 mt-4">
          Your shopping bag is Empty
        </h2>
        <h3 className="text-gray-800 mt-2">
          <Link to="/" className="text-black underline">
            Start Shopping
          </Link>
        </h3>
      </div>
    </div>
  );

  return (
    <div className="w-full p-3">
      {cartItems.length > 0 ? (
        <>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">My Order</span>
          </div>
          {cartItems.map((food) => (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          ))}
          <div className="mt-5">
            <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
            <h3 className="font-semibold text-gray-800">
              Total Amount: ₹{totalPrice.toFixed(2)}
            </h3>
            <hr className="my-2" />
            <button
              onClick={() => navigate("/confirm")}
              className="bg-lightblue font-bold px-4 py-2 text-white rounded-lg mt-3"
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        showEmptyCart()
      )}
    </div>
  );
};

export default Cart;
