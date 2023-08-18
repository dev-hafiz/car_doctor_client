// eslint-disable-next-line react/prop-types
const ServiceDetail = ({ service }) => {
  const { title, des } = service || {};
  return (
    <div className="w-[364px] border-2 border-t-orange border-r-[#F3F3F3] border-b-[#F3F3F3] border-l-[#F3F3F3] rounded-2xl bg-[#F3F3F3] p-10">
      <h2 className="text-xl font-bold text-[#444444]">{title}</h2>
      <p className="text-[#737373]">{des}</p>
    </div>
  );
};

export default ServiceDetail;
