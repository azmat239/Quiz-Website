import React from "react";
import Navbar from "../Components/Navbar";
import { useState } from "react";

const Quiz = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState();
  const [visible, setVisible] = useState(0);
  const [score, setScore] = useState(0);
  const data = [
    {
      Question:
        " Which flies a green, white, and orange (in that order) tricolor flag?",
      Options: ["Ireland", "Ivory Coast", "Italy"],
      Answer: "Ireland",
    },
    {
      Question: "What company makes the Xperia model of smartphone?",
      Options: ["Samsung", "Sony ", "Nokia"],
      Answer: "Sony",
    },
    {
      Question: "Which city is home to the Brandenburg Gate?",
      Options: ["Vienna", "Zurich", "Berlin"],
      Answer: "Berlin",
    },
  ];
  const handleClick = (index) => {
    if (index >= data.length) {
      alert("No More Question");
    } else {
      setActiveIndex(index);
    }
  };

  const handleInputChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleCheck = (index) => {
    setVisible(index);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (data[activeIndex].Answer === selectedOption) {
      setScore(score + 1);
    }
  };
  return (
    <div>
      <Navbar />
      <div
        className={
          visible === 0
            ? "block bg-gradient-to-r from-slate-200 to-slate-800 h-screen"
            : "hidden bg-gradient-to-r from-slate-200 to-slate-800 h-screen"
        }
      >
        <h1 className="text-center text-2xl pt-10">
          Question : {data[activeIndex].Question}
        </h1>
        <form onSubmit={handleSubmit}>
          {data[activeIndex].Options.map((option, index) => {
            return (
              <div key={index} className="ml-48 text-lg mt-10">
                <input
                  type="radio"
                  name={data[activeIndex].Question}
                  value={option}
                  onChange={handleInputChange}
                />
                {option}
              </div>
            );
          })}
          <button
            type="Submit"
            className="py-2 bg-green-600 text-white font-semibold text-md text-center rounded-xl w-20 hover:bg-green-400 hover:text-black transition-all ease-in relative top-10 left-48"
          >
            Submit
          </button>
        </form>
        <button
          onClick={() => handleClick(activeIndex + 1)}
          className="py-2 px-1 mt-4 bg-blue-600 text-white font-semibold text-md text-center rounded-xl w-20 hover:bg-blue-400 transition-all ease-in relative top-10 left-48"
        >
          Next
        </button>
        <button
          onClick={() => handleCheck(1)}
          className="py-2 px-4 mx-2 bg-slate-600 text-white font-semibold text-md text-center rounded-xl  hover:bg-slate-800 hover:text-black transition-all ease-in relative top-10 left-48"
        >
          Check Answer
        </button>
      </div>

      <div className={visible === 1 ? "block" : "hidden"}>
        <div className="h-[90vh] w-screen bg-gradient-to-r from-slate-700 to-black  text-5xl text-white font-extrabold flex justify-center items-center ">
          Your Score : {score}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
