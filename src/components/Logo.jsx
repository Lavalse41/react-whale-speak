import { imageSrc } from "../data/imageSrc";

function Logo() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <span className="text-5xl font-caprasimo text-sky-900">
          <span className="mr-4 inline-block">
            <img
              width="48"
              height="48"
              src={imageSrc.speechIcon}
              alt="speech-bubble"
            />
          </span>
          Whale Speak
          <span className="ml-4 inline-block">
            <img
              width="64"
              height="64"
              src={imageSrc.whaleIcon}
              alt="experimental-orca-color-pixels"
            />
          </span>
        </span>
      </div>

      <p className="mt-4 mb-9 text-2xl text-sky-800">
        Translate English to Whale Language
      </p>
    </div>
  );
}

export default Logo;
