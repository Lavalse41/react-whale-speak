import { imageSrc } from "../data/imageSrc";

function Image({ randomWhaleWord, isLoading, isHidden }) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="absolute top-36 sm:top-40 w-[28rem] sm:w-[47rem] p-2"
        src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697700039/whale-speak/coral1_talzjf.png"
      ></img>
      <div className="relative">
        <img
          className="w-36 sm:w-[14.3rem] left-36 top-[-36] absolute sm:left-[19.375rem] sm:top-[-1.25rem] z-10"
          src={imageSrc.bubbleL}
          alt="bubble-left"
        ></img>
        {isHidden ? (
          <img
            className="w-16 sm:w-[6.8rem] absolute left-[11.5rem] top-[1rem] sm:left-[23rem] sm:top-[0.5rem] z-10"
            src={imageSrc.lonelyText}
            alt="lonely-text"
          ></img>
        ) : (
          ""
        )}
        <div className="absolute left-[22rem] sm:left-[24rem] top-[1rem] z-10">
          {isLoading ? (
            <div className="right-40 sm:left-4 lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <div className="font-ki_comic font-bold relative left-[-10.5rem] top-2 sm:top-2 sm:left-0 text-base sm:text-xl ">
              {randomWhaleWord}
            </div>
          )}
        </div>
        <img
          className="w-56 sm:w-[25rem] relative z-1 rounded-full"
          src="https://tenor.com/view/orca-dancing-dance-baby-orca-whale-gif-26287545.gif"
          alt="whale-image"
        ></img>
        <img
          className="absolute top-32 left-40 sm:top-[15rem] sm:left-[18rem] z-10 w-[10%]"
          src="https://res.cloudinary.com/dluc2m7kg/image/upload/v1697700039/whale-speak/coral2_xi6nef.png"
        ></img>
      </div>
    </div>
  );
}

export default Image;
