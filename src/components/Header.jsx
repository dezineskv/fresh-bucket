import React from "react";
import "../styles/global.css";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-row text-white">
      <div className="container mx-auto p-4" style={{ maxWidth: "1440px" }}>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          <div className="max-w[200px] p-6">
            <Link to="/">
              <img src="/images/logo_white.png" alt="logo" />
            </Link>
          </div>
          <div
            className="w-[360px] flex flex-row justify-between content-start p-6"
          >
            <div className="flex justify-between w-full">
              <div className="flex flex-row gap-4 w-full items-center nav-links">
                <Link to="/">
                  <div className="">Home</div>
                </Link>
                <div className="">&nbsp;Product </div>
                <div className="">&nbsp;Blog</div>
                <div className="">Pages</div>
                <div className="">Contact</div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="header-search p-6">
              <SearchBox />
            </div>
            <div>
              <img src="/images/profileicon.png" alt="profile icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
