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
      className="relative mt-9 w-[700px] border-2 border-slate-800  pt-4 pb-7 rounded-xl bg-sky-700 text-center"
    >
      {showTranslate ? (
        <>
          <div className="font-ki_comic font-bold w-[200px] h-[100px] absolute flex justify-center items-center z-10 bottom-[240px] left-[-40px] text-2xl">
            {translate}
          </div>
          <img
            className="absolute z-1 bottom-[200px] left-[-60px]"
            width="240px"
            src={imageSrc.bubbleR}
            alt="bubble-right"
          ></img>
        </>
      ) : (
        ""
      )}

      {error ? (
        <p className="absolute text-sm left-[80px] top-[5px] text-yellow-300">
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
        className="relative border-2 border-slate-800 px-3 p-2 mt-4 w-[400px] rounded-xl"
        maxLength={50}
      ></input>
      <br></br>
      <button className="border-2 border-slate-800 mt-4 p-1 w-[200px] rounded-full bg-pink-300">
        Speak
      </button>
    </form>
  );
}

export default Translator;
