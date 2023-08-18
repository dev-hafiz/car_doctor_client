const IndicatorHeader = () => {
  return (
    <div className="hero rounded-lg h-screen max-h-80	bg-hero-banner">
      <div className="hero-content pl-20 flex justify-start  w-full h-full rounded-lg  bg-gradient-to-r from-[#000000] to-[rgba(21,21,21,0)">
        <div>
          <h1 className="text-4xl  text-white font-bold">Service Details</h1>
        </div>
        <div className="text-white flex items-center space-x-2">
          <p className="mr-2">Home</p> {"/"}
          <p>ServiceDetails</p>
        </div>
      </div>
    </div>
  );
};

export default IndicatorHeader;
