import { useState } from "react";

function Translator({ addToHistory, showTranslate }) {
  const [text, setText] = useState("");
  const [translate, setTranslate] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    if (text.length > 20) {
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
      if (vowel.includes(char) || char === "E" || char === "U") {
        result.push(char);
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
      className="relative mt-9 w-[800px] border-2 border-slate-800  pt-4 pb-7 rounded-xl bg-sky-700 text-center"
    >
      {showTranslate ? (
        <>
          <div className="w-[200px] h-[100px] absolute flex justify-center items-center z-10 bottom-[240px] left-[-40px] text-2xl">
            {translate}
          </div>
          <img
            className="absolute z-1 bottom-[200px] left-[-60px]"
            width="240px"
            src="./src/assets/word.png"
            alt="word"
          ></img>
        </>
      ) : (
        ""
      )}

      {error ? (
        <p className="absolute left-[100px] top-[5px] text-yellow-300">
          Please don't type more than 20 characters. The whale can't catch your
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
      ></input>
      <br></br>
      <button className="border-2 border-slate-800 mt-4 p-1 w-[200px] rounded-full bg-pink-300">
        Speak
      </button>
    </form>
  );
}

export default Translator;
