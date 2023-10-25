import { imageSrc } from "../data/imageSrc";

function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-3xl sm:text-5xl font-caprasimo text-sky-900">
          <span className="mr-4 inline-block">
            <img
              src={imageSrc.speechIcon}
              alt="speech-bubble"
              className="w-8 h-8 sm:w-12 sm:h-12"
            />
          </span>
          Whale Speak
          <span className="ml-4 inline-block">
            <img
              width="64"
              height="64"
              src={imageSrc.whaleIcon}
              alt="experimental-orca-color-pixels"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
          </span>
        </span>
      </div>

      <p className="mt-4 mb-9 text-lg sm:text-2xl text-sky-800">
        Translate English to Whale Language
      </p>
    </div>
  );
}

export default Logo;
