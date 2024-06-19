import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductItems = () => {
  const [foodData, setFoodData] = useState([]);
  const search = useSelector((state) => state.search.search);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setFoodData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleToast = (name) => toast.success(`${name} added to cart`);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-center mx-12 my-10 ">
        {foodData
          .filter((food) => food.title.toLowerCase().includes(search.toLowerCase()))
          .map((food) => (
            <ProductCard
              key={food.id}
              id={food.id}
              name={food.title}
              price={food.price}
              desc={food.description}
              rating={food.rating.rate}
              img={food.image}
              handleToast={handleToast}
            />
          ))}
      </div>
    </>
  );
};

export default ProductItems;
