import React, { useContext } from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import { Context } from "../context/context";
import SearchResult from "../components/searchResult";

const HomePage: React.FC = () => {
  const { mode } = useContext(Context);
  return (
    <div
      className={` ${
        mode ? "bg-[#1F1F1F]" : "bg-white"
      } px-5 sm:px-20 lg:px-60 xl:px-80 2xl:px-100 pt-10 space-y-8 sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300`}
    >
      <Header />
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default HomePage;
