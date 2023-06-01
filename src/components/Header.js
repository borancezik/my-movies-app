import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-20 flex bg-gray-600 items-center justify-between">
      <div className="flex items-center justify-center w-[40%] h-full pl-3 text-white">
        <Link to="/">İzlenecekler</Link>
      </div>
      <div className="flex items-center justify-center gap-x-4 pr-3 w-[40%] h-full">
        <Link to="/watched">İzlenenler</Link>
        <button className="bg-pink-300 w-20 h-8 rounded-md">
          <Link to="/add">Ekle</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
