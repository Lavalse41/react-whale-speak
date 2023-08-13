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

export default History;
