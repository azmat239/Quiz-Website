import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let navClasses = classNames("hover:bg-red-800 p-4 text-white rounded-2xl");

  return (
    <div className="flex gap-16 h-14 w-screen bg-slate-400 justify-between items-center p-4">
      <img src="logo.png" alt="..." className="w-[5vw] h-[5vh] rounded-full" />
      <div className="flex gap-6">
        <Link to="/" className={navClasses}>
          Home
        </Link>
        <Link to="/createQuiz" className={navClasses}>
          createQuiz
        </Link>
        <Link to="/quiz" className={navClasses}>
          Take A Quiz
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
