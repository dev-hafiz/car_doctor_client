import { FaArrowRight } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
  const { title, img, price } = service || {};
  return (
    <div className="card card-compact w-[364px] bg-white shadow-xl ">
      <figure>
        <img
          className="w-[314px] h-[208] mt-6 rounded-xl "
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-[#444444]	font-bold">{title}</h2>

        <div className="card-actions justify-end flex items-center">
          <p className="text-xl font-bold text-[#FF3811]">Price : ${price}</p>
          <button className="btn  btn-active btn-link">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
