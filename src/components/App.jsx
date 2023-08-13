import { useState, useEffect } from "react";
import { randomWords } from "../randomWords.js";
import Logo from "./Logo.jsx";
import Image from "./Image.jsx";
import Translator from "./Translator.jsx";
import History from "./History.jsx";
import "../index.css";

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
      <Logo />
      <Image
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
      <div className="absolute text-sm bottom-[20px] right-[30px] text-slate-400">
        icons from icons8
      </div>
    </div>
  );
}

export default App;
