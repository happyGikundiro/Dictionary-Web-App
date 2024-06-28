import React from "react";
import Header from "../components/header";
import ContextProvider from "../context/context";
import SearchBar from "../components/searchBar";

const HomePage: React.FC = () => {
  return (
    <ContextProvider>
      <div className="px-10 sm:px-20 lg:px-60 space-y-8">
        {/* <div>homePage</div> */}
        <Header />
        <SearchBar />
      </div>
    </ContextProvider>
  );
};

export default HomePage;
