import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/actions/searchActions";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = useSelector((state) => state.search.search);

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mb-4 bg-lightblue">
      <Link to="/" className="text-4xl font-bold text-white hover:text-white-800 mx-8 mt-2">
        𝑪𝒍𝒐𝒕𝒉𝒊𝒇𝒚
      </Link>
      <div className="flex items-center">
        <input
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] ml-4 mt-2"
        />
        <FaShoppingCart
          onClick={handleCartClick}
          className="ml-4 mr-4 text-3xl text-white cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
