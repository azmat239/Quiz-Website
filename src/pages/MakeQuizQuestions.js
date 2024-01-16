import React, { useState } from "react";

const MakeQuizQuestions = ({ Question, Options, Answer, qNo }) => {
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(0);
  var value;
  const valueChangeHandler = (event) => {
    value = event.target.value;
  };
  const handleCheck = (index) => {
    setVisible(index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === Answer) {
      setScore(score + 1);
    }
  };
  return (
    <div>
      <div className={visible === 0 ? "block" : "hidden"}>
        <p className="text-center text-red-800">
          Please Submit First And Then Go To Next Question{" "}
        </p>
        <form onSubmit={handleSubmit}>
          <h1 className="ml-24 text-2xl mt-10">
            Question {qNo} : {Question}
          </h1>
          <div className="flex flex-col justify-center h-[30vh] w-screen m-10">
            {Options.map((option, index) => {
              return (
                <div className="flex ml-24 h-[10vh] gap-2" key={index}>
                  <input
                    type="radio"
                    name={Question}
                    value={option}
                    onChange={valueChangeHandler}
                    className="w-4"
                  />
                  <div className="flex justify-center items-center text-xl">
                    {option}
                  </div>
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="py-2 bg-green-600 text-white font-semibold text-md text-center rounded-xl w-20 hover:bg-green-400 hover:text-black transition-all ease-in relative top-10 left-48"
          >
            Submit
          </button>

          <button
            onClick={() => handleCheck(1)}
            className="py-2 px-4 mx-2 bg-slate-600 text-white font-semibold text-md text-center rounded-xl  hover:bg-slate-800 hover:text-black transition-all ease-in relative top-10 left-48"
          >
            Check Answer
          </button>
        </form>
      </div>
      <div className={visible === 1 ? "block" : "hidden"}>
        <div className="h-[90vh] w-screen bg-gradient-to-r from-slate-700 to-black  text-5xl text-white font-extrabold flex justify-center items-center ">
          Your Score : {score}
        </div>
        <button onClick={() => handleCheck(0)}>Back</button>
      </div>
    </div>
  );
};

export default MakeQuizQuestions;
