import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import ProductItems from "../components/ProductItems";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer1);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <PulseLoader color="#8AAAE5" height={40} />
        </div>
      ) : (
        <ProductItems />
      )}
    </>
  );
};

export default Home;
