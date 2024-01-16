import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import MakeQuizQuestion from "./MakeQuizQuestions";
import classNames from "classnames";

const MakeQuiz = () => {
  const [qNo, setQNo] = useState(1);
  const inputClassesDiv = classNames(
    "w-[95vw] h-36 grid col-1 items-start justify-center mt-4"
  );
  const inputClasses = classNames(
    "focus:outline-none py-1 px-2 border-[1px] border-black rounded-2xl shadow-lg shadow-slate-700"
  );
  const optionClasses = classNames(
    "flex gap-4 items-end justify-start shadow-lg shadow-slate-700 rounded-2xl"
  );
  const [data, setData] = useState({
    Q1: { Question: "", Options: [], Answer: "" },
    Q2: { Question: "", Options: [], Answer: "" },
    Q3: { Question: "", Options: [], Answer: "" },
    Q4: { Question: "", Options: [], Answer: "" },
    Q5: { Question: "", Options: [], Answer: "" },
  });

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [visible, setVisible] = useState(0);
  const handleChange = (event) => {
    const { name, value, placeholder } = event.target;

    setData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        [placeholder]:
          placeholder === "Options"
            ? [...prevData[name][placeholder], value]
            : value,
      },
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setVisible(1);
  };

  const handleClick = () => {
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
      setQNo(qNo + 1);
    } else {
      alert("Max Number of Question Reached");
    }
  };
  return (
    <div className="h-screen overflow-x-hidden bg-gradient-to-r from-slate-200 to-slate-800">
      <Navbar />
      <h1 className="text-center text-2xl font-mono font-semibold mt-4 text-red-900">
        Create Your Own Quiz
      </h1>
      <form
        onSubmit={handleSubmit}
        className={visible === 0 ? "block" : "hidden"}
      >
        <div className={inputClassesDiv}>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Question 1 :</h3>
            <input
              type="text"
              name="Q1"
              onChange={handleChange}
              placeholder="Question"
              className={inputClasses}
            />
          </div>
          <div className={optionClasses}>
            <input
              type="text"
              name="Q1"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q1"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q1"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q1"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q1"
              onBlur={handleChange}
              placeholder="Answer"
              className={inputClasses}
            />
          </div>
        </div>
        <hr className="bg-blue-700 h-1" />
        <div className={inputClassesDiv}>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Question 2 :</h3>
            <input
              type="text"
              name="Q2"
              onChange={handleChange}
              placeholder="Question"
              className={inputClasses}
            />
          </div>
          <div className={optionClasses}>
            <input
              type="text"
              name="Q2"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q2"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q2"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q2"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q2"
              onBlur={handleChange}
              placeholder="Answer"
              className={inputClasses}
            />
          </div>
        </div>
        <hr className="bg-blue-700 h-1 " />
        <div className={inputClassesDiv}>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Question 3 :</h3>
            <input
              type="text"
              name="Q3"
              onChange={handleChange}
              placeholder="Question"
              className={inputClasses}
            />
          </div>
          <div className={optionClasses}>
            <input
              type="text"
              name="Q3"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q3"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q3"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q3"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q3"
              onBlur={handleChange}
              placeholder="Answer"
              className={inputClasses}
            />
          </div>
        </div>
        <hr className="bg-blue-700 h-1 " />
        <div className={inputClassesDiv}>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Question 4 :</h3>
            <input
              type="text"
              name="Q4"
              onChange={handleChange}
              placeholder="Question"
              className={inputClasses}
            />
          </div>
          <div className={optionClasses}>
            <input
              type="text"
              name="Q4"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q4"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q4"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q4"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q4"
              onChange={handleChange}
              placeholder="Answer"
              className={inputClasses}
            />
          </div>
        </div>
        <hr className="bg-blue-700 h-1 " />
        <div className={inputClassesDiv}>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Question 5 :</h3>
            <input
              type="text"
              name="Q5"
              onChange={handleChange}
              placeholder="Question"
              className={inputClasses}
            />
          </div>
          <div className={optionClasses}>
            <input
              type="text"
              name="Q5"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q5"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q5"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q5"
              onBlur={handleChange}
              placeholder="Options"
              className={inputClasses}
            />
            <input
              type="text"
              name="Q5"
              onChange={handleChange}
              placeholder="Answer"
              className={inputClasses}
            />
          </div>
        </div>
        <hr className="bg-blue-700 h-1 " />
        <div className="flex justify-center my-4">
          <button
            type="submit"
            className="py-2 bg-red-600 text-white font-semibold text-md text-center rounded-xl w-60 hover:bg-red-400 hover:text-black transition-all ease-linear"
          >
            Submit
          </button>
        </div>
      </form>
      <div className={visible === 1 ? "block" : "hidden"}>
        <MakeQuizQuestion
          Question={data[`Q${currentQuestion}`].Question}
          Options={data[`Q${currentQuestion}`].Options}
          Answer={data[`Q${currentQuestion}`].Answer}
          qNo={qNo}
        />
        <button
          onClick={handleClick}
          className="py-2 bg-blue-600 text-white font-semibold text-md text-center rounded-xl w-20  hover:bg-blue-950 transition-all ease-in ml-24 "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MakeQuiz;
