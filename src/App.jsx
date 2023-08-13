import { useState, useEffect } from "react";
import { randomWords } from "./randomWords.js";
import "./index.css";

function App() {
  const [prevTranslate, setPrevTranslate] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showTranslate, setShowTranslate] = useState(false);
  const [randomWhaleWord, setRandomWhaleWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  function addToHistory(newTranslate) {
    setPrevTranslate((prevTranslate) => [...prevTranslate, newTranslate]);
    setIsHidden(false);
    setIsLoading(true);

    const myTimeout = setTimeout(() => {
      randomWhaleTalk();
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(myTimeout);
  }

  function randomWhaleTalk() {
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    setRandomWhaleWord(randomWords[randomIndex]);
  }

  useEffect(() => {
    console.log(prevTranslate);
    if (prevTranslate.length > 0) {
      setShowHistory(true);
      setShowTranslate(true);
    } else {
      setShowHistory(false);
    }
  }, [prevTranslate]);

  function handleDeletePrevTranslate(id) {
    const newPrevTranslate = prevTranslate.filter((item) => item.id !== id);
    setPrevTranslate(newPrevTranslate);
  }

  return (
    <div className="pt-9 bg-sky-100 w-screen h-screen flex flex-col items-center">
      <Logo
        randomWhaleWord={randomWhaleWord}
        isLoading={isLoading}
        isHidden={isHidden}
      />
      <Translator addToHistory={addToHistory} showTranslate={showTranslate} />
      {showHistory ? (
        <History
          prevTranslate={prevTranslate}
          onDeletePrevTranslate={handleDeletePrevTranslate}
        />
      ) : (
        ""
      )}
    </div>
  );
}

function Logo({ randomWhaleWord, isLoading, isHidden }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-5xl font-caprasimo text-sky-900">
          <span className="mr-4 inline-block">
            <img
              width="48"
              height="48"
              src="./src/assets/icons8-speech-bubble-50.png"
              alt="speech-bubble"
            />
          </span>
          Whale Speak
          <span className="ml-4 inline-block">
            <img
              width="64"
              height="64"
              src="./src/assets/whale-icon.png"
              alt="experimental-orca-color-pixels"
            />
          </span>
        </span>
      </div>

      <p className="mt-4 mb-9 text-2xl text-sky-800">
        Translate English to Whale Language
      </p>

      <div className="relative">
        <img
          className="absolute left-[290px] top-[-20px] z-10"
          width="230px"
          src="./src/assets/bubble.png"
          alt="bubble"
        ></img>
        {isHidden ? (
          <img
            className="absolute left-[340px] top-[10px] z-10"
            width="130px"
            src="./src/assets/lonely.png"
            alt="lonely"
          ></img>
        ) : (
          ""
        )}
        <div className="absolute left-[370px] top-[20px] z-10">
          {isLoading ? (
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <div className="relative right-[10px] text-xl ">
              {randomWhaleWord}
            </div>
          )}
        </div>
        <img
          className="relative z-1 rounded-full"
          width="400px"
          src="https://tenor.com/view/orca-dancing-dance-baby-orca-whale-gif-26287545.gif"
          alt="whale-image"
        ></img>
      </div>
    </div>
  );
}

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
    console.log(cleanText);

    const vowel = ["A", "E", "I", "O", "U"];
    let result = [];

    for (let i = 0; i < cleanText.length; i++) {
      for (let j = 0; j < vowel.length; j++) {
        if (cleanText[i] === vowel[j]) {
          result.push(vowel[j]);
        }
      }
      if (cleanText[i] === "E") {
        result.push(cleanText[i]);
      }
      if (cleanText[i] === "U") {
        result.push(cleanText[i]);
      }
    }

    console.log(result);
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

function History({ prevTranslate, onDeletePrevTranslate }) {
  return (
    <div className="mt-5 py-5 px-6 w-[800px] py-6 rounded-xl bg-sky-200">
      <h2 className="text-lg">History</h2>
      <div className="overflow-auto max-h-[80px]">
        <ul>
          {prevTranslate.map((item) => (
            <li
              key={item.id}
              className="flex flex-row justify-between text-sky-900"
            >
              <span className="w-[200px]">{item.text}</span>
              <span className="w-[200px]">{item.result}</span>
              <button
                onClick={() => onDeletePrevTranslate(item.id)}
                className="text-pink-600"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
