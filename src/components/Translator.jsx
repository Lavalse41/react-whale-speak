import { useState } from "react";
import { imageSrc } from "../data/imageSrc";

function Translator({ addToHistory, showTranslate }) {
  const [text, setText] = useState("");
  const [translate, setTranslate] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    if (text.length > 35) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    const cleanText = text.trim().toUpperCase();
    // console.log(cleanText);

    const vowel = ["A", "E", "I", "O", "U"];
    let result = [];

    for (const char of cleanText) {
      if (vowel.includes(char)) {
        result.push(char);
      }
      if (char === "E") {
        result.push("E");
      }
      if (char === "U") {
        result.push("U");
      }
    }

    // console.log(result);
    if (
      !result.includes("A") &&
      !result.includes("E") &&
      !result.includes("I") &&
      !result.includes("O") &&
      !result.includes("U")
    ) {
      result.push("UUUUU");
    }

    if (result.length > 10) {
      result = result.slice(0, 11);
    }

    const resultString = result.join("");

    setTranslate(resultString);

    const id = crypto.randomUUID();
    const newTranslate = { id, text, result };
    addToHistory(newTranslate);
    setText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mt-9 w-80 sm:w-[38.8rem] border-2 border-slate-800 pt-4 pb-7 rounded-xl bg-sky-700 text-center"
    >
      {showTranslate ? (
        <>
          <div className="font-ki_comic font-bold w-[11rem] h-[6rem] absolute flex justify-center items-center z-10 bottom-[10rem] sm:bottom-[13rem] sm:left-[-2rem] left-[-2.5rem] text-base sm:text-2xl ">
            {translate}
          </div>
          <img
            className="w-32 sm:w-[13rem] left-[-1rem] bottom-[10rem] absolute z-1 sm:bottom-[11rem] sm:left-[-3rem]"
            src={imageSrc.bubbleR}
            alt="bubble-right"
          ></img>
        </>
      ) : (
        ""
      )}

      {error ? (
        <p className="relative sm:absolute text-sm top-3 left-0 sm:left-[5rem] sm:top-[0.5rem] text-yellow-300">
          Please don't type more than 35 characters. The whale can't catch your
          words.
        </p>
      ) : (
        ""
      )}

      <input
        type="text"
        value={text}
        placeholder="Enter what you want to tell him/her."
        onChange={(e) => setText(e.target.value)}
        className="text-sm sm:text-base relative border-2 border-slate-800 px-3 p-2 mt-4 w-64 sm:w-[22rem] rounded-lg sm:rounded-xl"
        maxLength={50}
      ></input>
      <br></br>
      <button className="mt-4 py-1 btn bg-pink-400 border-2 border-slate-800 w-[11rem] rounded-full">
        Speak
      </button>
    </form>
  );
}

export default Translator;
