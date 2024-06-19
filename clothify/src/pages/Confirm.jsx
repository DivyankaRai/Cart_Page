import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PulseLoader } from "react-spinners";
import { clearCart } from "../redux/actions/cartActions";

const Confirm = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer1);
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer2 = setTimeout(() => {
        dispatch(clearCart());
      }, 4000);

      return () => clearTimeout(timer2);
    }
  }, [loading, dispatch]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PulseLoader color="#8AAAE5" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful !!
          </h2>
          <p>Your order has been confirmed.</p>
          <h4>We are redirecting you to home page.</h4>
        </div>
      )}
    </div>
  );
};

export default Confirm;
