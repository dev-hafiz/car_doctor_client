import img1 from "../../../../assets/images/banner/1.jpg";
import img2 from "../../../../assets/images/banner/2.jpg";
import img3 from "../../../../assets/images/banner/3.jpg";
import img4 from "../../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full" />
        <div className="absolute h-full flex justify-between items-center  w-1/2 bg-gradient-to-r from-[#000000] to-[rgba(21,21,21,0)]">
          <div className="space-y-7 pl-12">
            <h1 className="text-6xl	font-bold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn text-white bg-[#FF3811] mr-5">
                Discover More
              </button>
              <button className="btn btn-outline border-[#fff] text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute h-full flex justify-between items-center  w-1/2 bg-gradient-to-r from-[#000000] to-[rgba(21,21,21,0)]">
          <div className="space-y-7 pl-12">
            <h1 className="text-6xl	font-bold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn text-white bg-[#FF3811] mr-5">
                Discover More
              </button>
              <button className="btn btn-outline border-[#fff] text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute h-full flex justify-between items-center  w-1/2 bg-gradient-to-r from-[#000000] to-[rgba(21,21,21,0)]">
          <div className="space-y-7 pl-12">
            <h1 className="text-6xl	font-bold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn text-white bg-[#FF3811] mr-5">
                Discover More
              </button>
              <button className="btn btn-outline border-[#fff] text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute h-full flex justify-between items-center  w-1/2 bg-gradient-to-r from-[#000000] to-[rgba(21,21,21,0)]">
          <div className="space-y-7 pl-12">
            <h1 className="text-6xl	font-bold text-white">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn text-white bg-[#FF3811] mr-5">
                Discover More
              </button>
              <button className="btn btn-outline border-[#fff] text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
