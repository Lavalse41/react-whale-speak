function Image({ randomWhaleWord, isLoading, isHidden }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          className="absolute left-[290px] top-[-20px] z-10"
          width="230px"
          src="./src/assets/bubble.png"
          alt="bubble"
        ></img>
        {isHidden ? (
          <img
            className="absolute left-[347px] top-[7px] z-10"
            width="110px"
            src="./src/assets/lonely2.png"
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

export default Image;
