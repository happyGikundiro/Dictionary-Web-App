import React, { useContext } from "react";
import Header from "../components/header";
// import ContextProvider from "../context/context";
import SearchBar from "../components/searchBar";
import { Context } from "../context/context";

const HomePage: React.FC = () => {
  const { mode } = useContext(Context);
  return (
    // <ContextProvider>
    <div
      className={` ${
        mode ? "bg-[#1F1F1F]" : "bg-white"
      } px-10 sm:px-20 lg:px-60 pt-10 space-y-8 sm:bg-yellow-300 md:bg-green-300 lg:bg-pink-300 xl:bg-blue-300 2xl:bg-red-300 h-screen`}
    >
      {/* <div>homePage</div> */}
      <Header />
      <SearchBar />
    </div>
    // </ContextProvider>
  );
};

export default HomePage;
