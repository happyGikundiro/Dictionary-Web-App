import React, { useContext } from "react";
import Header from "../components/header";
import SearchBar from "../components/searchBar";
import { Context } from "../context/context";
import SearchResult from "../components/searchResult";

const HomePage: React.FC = () => {
  const { mode, currentFont } = useContext(Context);

  return (
    <div
      className={`${
        currentFont === "sans-serif"
          ? "font-sans-serif"
          : currentFont === "serif"
          ? "font-serif"
          : "font-mono"
      } ${
        mode ? "bg-[#050505]" : "bg-white"
      } px-5 sm:px-20 lg:px-60 xl:px-80 2xl:px-100 pt-10 space-y-8 min-h-screen`}
    >
      <Header />
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default HomePage;
