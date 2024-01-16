import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-screen w-screen z-10 relative  ">
      <div className="absolute inset-0 bg-[url('../public/bg.jpg')] bg-no-repeat bg-cover bg-top">
        <div className="h-full w-full backdrop-blur "></div>
      </div>
      <div className="z-10 relative text-white">
        <Navbar />
        <div className="flex justify-around mt-8">
          <div className="flex flex-col justify-center items-center w-[30vw] h-[80vh] gap-10 ">
            <h1 className="text-5xl text-center font-semibold">
              Welcome to <span className="text-orange-700">My Quiz App</span>
            </h1>
            <p className="text-xl text-center font-bold ">
              <span className="text-red-800">Programmers seem to be </span>
              changing the world.
            </p>

            <Link
              to="/quiz"
              className="text-slate-100 text-xl p-4 bg-slate-900 hover:bg-slate-400 rounded-2xl transition-all
              ease-in hover:text-black"
            >
              Start Quiz
            </Link>
          </div>
          <div>
            <img
              src="quizbg.jpg"
              alt="...."
              className="w-[50vw] h-[80vh] rounded-2xl hover:blur-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
