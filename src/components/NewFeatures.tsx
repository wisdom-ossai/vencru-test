import PlayImg from "../assets/playImg.svg";
import Play from "../assets/play.svg";
import { Link } from "react-router-dom";

const NewFeatures = () => {
  return (
    <div className="p-4 mt-6 relative bg-gray-50">
      <h4 className="font-medium text-sm text-gray-900">
        New features available!
      </h4>
      <p className="font-normal text-sm text-gray-500 mb-4">
        Check out the new dashboard view. Pages now load faster.{" "}
      </p>
      <img src={PlayImg} alt="" className="rounded" />
      <button className="rounded-full absolute bottom-16 left-8 bg-transparent">
        <img src={Play} alt="" />
      </button>
      <div className="flex align-center mt-4 space-x-4">
        <p className="font-normal text-sm text-gray-500">Dismiss</p>
        <Link to="/" className="font-medium text-sm text-primary-700">
          What's New?
        </Link>
      </div>
    </div>
  );
};

export default NewFeatures;
