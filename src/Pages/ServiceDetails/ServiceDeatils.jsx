import IndicatorHeader from "../../components/IndicatorHeader/IndicatorHeader";
import { useState } from "react";
import { useEffect } from "react";
import ServiceDetail from "./ServiceDetail";
import s1 from "../../../src/assets/images/stepIcon/step1.svg";
import s2 from "../../../src/assets/images/stepIcon/step2.svg";
import s3 from "../../../src/assets/images/stepIcon/step3.svg";
import { FaArrowRight } from "react-icons/fa";
import logo from "../../../src/assets/icons/logo2.png";
import document from "../../../src/assets/icons/daocument.png";
import { useLoaderData } from "react-router-dom";

const ServiceDeatils = () => {
  const loadService = useLoaderData();
  const [details, setDetails] = useState([]);

  const { img, title, description, price } = loadService || {};

  const services = loadService.facility;

  //Load details data
  useEffect(() => {
    fetch("details.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div>
      <IndicatorHeader
        title={"Service Details"}
        home={"Home"}
        serviceDetails={"ServiceDetails"}
      />
      <div className="grid my-28 gap-4 grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 ">
          <div className="max-w-3xl	">
            <img className="w-full" src={img} alt="Engine service" />
            <h2 className="text-3xl my-5 font-bold text-dark">{title}</h2>
            <p className="text-[#737373]">{description}</p>
          </div>
          <div className="grid gap-4 my-6   grid-cols-1 lg:grid-cols-2">
            {details.map((detail) => (
              <ServiceDetail key={detail._id} service={detail} />
            ))}
          </div>
          <p className="text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&rsquo;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&rsquo;t anything embarrassing hidden in
            the middle of text.
          </p>
          <div>
            <h2 className="text-3xl my-5 font-bold text-dark">
              Simple Steps to Process{" "}
            </h2>
            <p className="text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&rsquo;t anything embarrassing
              hidden in the middle of text.{" "}
            </p>
            <div className="my-6 grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div className="w-[235px] h-[277px] border-[#E8E8E8] py-6 px-4 rounded-lg border-2 text-center ">
                <img className="mx-auto mt-8" src={s1} alt="steps" />
                <h4 className="text-xl font-bold tetx-[#151515] uppercase mt-5 mb-3">
                  Step One
                </h4>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="w-[235px] h-[277px] border-[#E8E8E8] py-6 px-4 rounded-lg border-2 text-center ">
                <img className="mx-auto mt-8" src={s2} alt="steps" />
                <h4 className="text-xl font-bold tetx-[#151515] uppercase mt-5 mb-3">
                  Step Two
                </h4>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
              <div className="w-[235px] h-[277px] border-[#E8E8E8] py-6 px-4 rounded-lg border-2 text-center ">
                <img className="mx-auto mt-8" src={s3} alt="steps" />
                <h4 className="text-xl font-bold tetx-[#151515] uppercase mt-5 mb-3">
                  Step Three
                </h4>
                <p className="text-[#737373]">
                  It uses a dictionary of over 200 .
                </p>
              </div>
            </div>
          </div>

          {/* Video  */}
          {/* <video controls className="w-full">
            <source
              src="https://youtube.com/shorts/e6Gj-PrZcHo?feature=share"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div>
          {/* services */}
          <div className="bg-[#F3F3F3] p-10 rounded-lg">
            <h3 className="font-bold text-2xl pb-2 text-[#151515]">Services</h3>
            {services.map((service) => (
              <div
                key={service.name}
                className="flex justify-between w-[280px] bg-[#fff] hover:bg-[#ff35115a] items-center  text-dark my-2 rounded-lg cursor-pointer"
              >
                <h4 className="pl-3 font-semibold">{service?.name}</h4>
                <button className="btn  btn-active btn-link ">
                  <FaArrowRight className=" text-[#FF3811]" />
                </button>
              </div>
            ))}
          </div>
          {/* download  */}
          <div className="bg-dark p-10 my-5 rounded-lg">
            <h3 className="font-bold text-2xl pb-2 text-white">Download</h3>
            <div className="flex justify-between w-[280px]  items-center  text-dark my-2 rounded-lg cursor-pointer">
              <div>
                <img src={document} alt="document" />
              </div>
              <div className="flex flex-col ml-[-55px] mt-3">
                <h4 className="font-semibold text-white">Our Brochure</h4>
                <p className="text-white">Download</p>s
              </div>
              <div className="w-[50px] bg-[#FF3811] h-[50px] flex items-center justify-center rounded-lg">
                <button className="btn  btn-active btn-link ">
                  <FaArrowRight className="text-white " />
                </button>
              </div>
            </div>
            <div className="flex justify-between w-[280px]  items-center  text-dark my-2 rounded-lg cursor-pointer">
              <div>
                <img src={document} alt="document" />
              </div>
              <div className="flex flex-col ml-[-40px] mt-3">
                <h4 className="font-semibold text-white">Company Details</h4>
                <p className="text-white">Download</p>s
              </div>
              <div className="w-[50px] bg-[#FF3811] h-[50px] flex items-center justify-center rounded-lg">
                <button className="btn  btn-active btn-link ">
                  <FaArrowRight className="text-white " />
                </button>
              </div>
            </div>
          </div>
          {/* offer  */}
          <div className="bg-dark pt-10 pb-20 px-10 my-5  rounded-lg">
            <div className=" text-dark rounded-lg ">
              <img src={logo} className="mx-auto w-[130px] " alt="offer" />
              <h3 className="text-white text-center text-sm font-bold my-4">
                Need Help? We Are Here <br /> To Help You{" "}
              </h3>
            </div>
            <div className="bg-white w-[270px] mx-auto rounded-lg text-center pt-4 pb-8 px-8 relative">
              <h3 className="text-[#FF3811] text-center text-sm font-bold mt-3 mb-1">
                Car Doctor <span className="text-dark">Special</span>
              </h3>
              <p className="text-dark ">
                Save up to <span className="text-[#FF3811] ">60% off</span>
              </p>
              <button className="w-[170px] h[56px] bg-[#FF3811] text-white font-medium py-3 rounded-lg absolute bottom-[-23px] right-12">
                Get A Quote
              </button>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-dark mt-4 mb-3">
            Price $ {price}
          </h2>

          <button className="w-full h[56px] bg-[#FF3811] text-white font-medium py-3 rounded-md mt-2 ">
            Proceed Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDeatils;
