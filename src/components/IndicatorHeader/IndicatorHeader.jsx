import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const IndicatorHeader = ({ title, serviceDetails, home }) => {
  return (
    <div className="hero rounded-lg h-screen max-h-80	bg-hero-banner">
      <div className="hero-content pl-20 flex justify-start  w-full h-full rounded-lg  bg-gradient-to-r from-[#000000] to-[rgba(21,21,21,0)">
        <div>
          <h1 className="text-4xl  text-white font-bold">{title}</h1>
        </div>
      </div>
      <div className="text-white mt-[271px] w-72 py-3 px-4 bg-[#FF3811] z-20 flex  justify-center space-x-2">
        <Link to="/" className="mr-2 font-medium">
          {home}
        </Link>{" "}
        {"/"}
        <Link to="" className="font-medium">
          {serviceDetails}
        </Link>
      </div>
    </div>
  );
};

export default IndicatorHeader;
