import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-4/5 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-3/5 absolute border-white border-8 right-4 top-1/2 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 w-[336px] ">
          <h3 className="text-[#FF3811] mb-3 font-bold text-xl">About</h3>
          <h1 className="text-5xl font-bold ">
            We are qualified <br />& of experience <br />
            in this field
          </h1>
          <p className="py-6 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn mt-8 bg-[#FF3811]  border-none text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
