import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="pt-9 bg-sky-100 w-screen h-screen flex flex-col items-center">
      <Logo />
      <Translator />
      <History />
    </div>
  );
}

function Logo() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-caprasimo">Whale Speak</h1>
      <p className="text-2xl">Translate English to Whale language</p>
    </div>
  );
}

function Translator() {
  const [text, setText] = useState("");
  return (
    <div className="mt-9 w-[800px] py-6 rounded-xl bg-sky-700 text-center">
      <div className="text-2xl text-slate-50 ">text</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 mt-4 w-[400px] rounded-xl"
      ></input>
      <br></br>
      <button className="mt-4 p-1 w-[200px] rounded-full bg-pink-300">
        Speak
      </button>
    </div>
  );
}

function History() {
  return (
    <div className="mt-7 py-6 px-6 w-[800px] py-6 rounded-xl bg-sky-200">
      <h2 className="text-lg">History</h2>
      <ul>
        <li className="flex flex-row justify-between text-sky-900">
          <span>text 1</span>
          <span>translate 1</span>
          <button className="text-pink-600">❌</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
