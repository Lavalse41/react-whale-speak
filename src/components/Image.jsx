import { imageSrc } from "../data/imageSrc";

function Image({ randomWhaleWord, isLoading, isHidden }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          className="absolute left-[310px] top-[-20px] z-10"
          width="230px"
          src={imageSrc.bubbleL}
          alt="bubble-left"
        ></img>
        {isHidden ? (
          <img
            className="absolute left-[367px] top-[7px] z-10"
            width="110px"
            src={imageSrc.lonelyText}
            alt="lonely-text"
          ></img>
        ) : (
          ""
        )}
        <div className="absolute left-[390px] top-[20px] z-10">
          {isLoading ? (
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <div className="font-ki_comic font-bold relative right-[10px] text-xl ">
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
