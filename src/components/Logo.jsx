function Logo({ randomWhaleWord, isLoading, isHidden }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-5xl font-caprasimo text-sky-900">
          <span className="mr-4 inline-block">
            <img
              width="48"
              height="48"
              src="./src/assets/speech-icon.png"
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

export default Logo;
