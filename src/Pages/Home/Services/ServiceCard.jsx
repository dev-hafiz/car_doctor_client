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
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
