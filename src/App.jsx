import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [prevTranslate, setPrevTranslate] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showTranslate, setShowTranslate] = useState(false);

  function addToHistory(newTranslate) {
    setPrevTranslate((prevTranslate) => [...prevTranslate, newTranslate]);
  }
  // setShowHistory(prevTranslate.length > 0 ?? !showHistory);

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
      <Logo />
      <Translator
        addToHistory={addToHistory}
        showTranslate={showTranslate}
      ></Translator>
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

function Logo() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-caprasimo text-sky-900">Whale Speak</h1>
      <p className="mt-3 mb-9 text-2xl text-sky-800">
        Translate English to Whale Language
      </p>

      <div className="relative">
        <img
          className="absolute left-[290px] top-[-20px] z-10"
          width="230px"
          src="./src/assets/lonely.png"
          alt="im-lonely"
        ></img>
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

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    const vowel = ["a", "e", "i", "o", "u"];
    let result = [];

    for (let i = 0; i < text.trim().length; i++) {
      for (let j = 0; j < vowel.length; j++) {
        if (text[i] === vowel[j]) {
          result.push(vowel[j]);
        }
      }
    }
    result = result.join("").toUpperCase();

    setTranslate(result);

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
        <div className="w-[200px] h-[100px] absolute flex justify-center items-center z-10 bottom-[240px] left-[-40px] text-2xl">
          {translate}
        </div>
      ) : (
        ""
      )}

      <img
        className="absolute z-1 bottom-[200px] left-[-60px]"
        width="240px"
        src="./src/assets/word.png"
        alt="word"
      ></img>
      <input
        type="text"
        value={text}
        placeholder="Enter what you want to tell him/her."
        onChange={(e) => setText(e.target.value)}
        className="border-2 border-slate-800 px-3 p-2 mt-4 w-[400px] rounded-xl"
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
      <div className="overflow-auto max-h-[108px]">
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
