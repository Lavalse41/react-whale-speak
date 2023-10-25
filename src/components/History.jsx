function History({ prevTranslate, onDeletePrevTranslate }) {
  return (
    <div className="mt-5 py-5 px-6 w-80 sm:w-[38.8rem] py-6 rounded-xl bg-sky-200">
      <h2 className="text-lg">History</h2>
      <div className="overflow-auto max-h-[80px]">
        <ul>
          {prevTranslate.map((item) => (
            <li
              key={item.id}
              className="flex flex-row justify-between items-start text-sky-900"
            >
              <span className="break-words whitespace-normal w-24 sm:w-[23.125rem]">
                {item.text}
              </span>
              <span className="break-words whitespace-normal ml-4 w-20 sm:w-[12.5rem]">
                {item.result}
              </span>
              <button
                onClick={() => onDeletePrevTranslate(item.id)}
                className="text-pink-600 ml-4 mr-2"
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

export default History;
