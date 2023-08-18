import IndicatorHeader from "../../components/IndicatorHeader/IndicatorHeader";
import engineService from "../../../src/assets/images/services/EngineService.png";
import { useState } from "react";
import { useEffect } from "react";
import ServiceDetail from "./ServiceDetail";

const ServiceDeatils = () => {
  const [details, setDetails] = useState([]);
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
            <img className="w-full" src={engineService} alt="Engine service" />
            <h2 className="text-3xl my-5 font-bold text-dark">
              Unique Car Engine Service
            </h2>
            <p className="text-[#737373]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which do not look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn&rsquo;t anything embarrassing
              hidden in the middle of text.{" "}
            </p>
          </div>
          <div className="grid gap-4 my-6   grid-cols-1 lg:grid-cols-2">
            {details.map((detail) => (
              <ServiceDetail key={detail._id} service={detail} />
            ))}
          </div>
        </div>
        <div className="border-4 border-orange">
          <h2>right</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceDeatils;
