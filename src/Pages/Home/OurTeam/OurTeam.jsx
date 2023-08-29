import c1 from "../../../assets/images/teamCarousel/c1.png";
import c2 from "../../../assets/images/teamCarousel/c2.png";
import c3 from "../../../assets/images/teamCarousel/c3.png";
import f from "../../../assets/images/socialIcon/f.png";
import t from "../../../assets/images/socialIcon/t.png";
import g from "../../../assets/images/socialIcon/g.png";
import i from "../../../assets/images/socialIcon/in (2).png";

const OurTeam = () => {
  return (
    <div className="mb-24">
      <div className="text-center mx-auto max-w-2xl">
        <h3 className="text-xl font-bold text-[#FF512F]">Team</h3>
        <h2 className="text-5xl font-bold my-4">Meet Our Team</h2>
        <p className="text-[#737373] my-4">
          The majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="carousel w-full">
        <div id="slideFirst" className="carousel-item relative w-full">
          <div className="flex flex-cols-1 items-center space-x-16 ml-20">
            <div className="card w-72 bg-white shadow-xl">
              <figure className="px-10 pt-10">
                <img src={c1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-[#444444] font-bold text-2xl mt-[-20px]">
                  Thomas Henry
                </h2>
                <p className="text-[#737373] font-semibold">
                  Branded Tyre Expert
                </p>
                <div className="space-x-3 ">
                  <button>
                    <img src={f} alt="" />
                  </button>
                  <button>
                    <img src={t} alt="" />
                  </button>
                  <button>
                    <img src={g} alt="" />
                  </button>
                  <button>
                    <img src={i} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-72 bg-white shadow-xl">
              <figure className="px-10 pt-10">
                <img src={c2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-[#444444] font-bold text-2xl mt-[-20px]">
                  Marshal John
                </h2>
                <p className="text-[#737373] font-semibold">
                  Dent Paint Expert
                </p>
                <div className="space-x-3 ">
                  <button>
                    <img src={f} alt="" />
                  </button>
                  <button>
                    <img src={t} alt="" />
                  </button>
                  <button>
                    <img src={g} alt="" />
                  </button>
                  <button>
                    <img src={i} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-72 bg-white shadow-xl">
              <figure className="px-10 pt-10">
                <img src={c3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-[#444444] font-bold text-2xl mt-[-20px]">
                  Max Alfred
                </h2>
                <p className="text-[#737373] font-semibold">Engine Expert</p>
                <div className="space-x-3 ">
                  <button>
                    <img src={f} alt="" />
                  </button>
                  <button>
                    <img src={t} alt="" />
                  </button>
                  <button>
                    <img src={g} alt="" />
                  </button>
                  <button>
                    <img src={i} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slideNext" className="btn btn-circle">
              ❮
            </a>
            <a href="#slideNext" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slideNext" className="carousel-item relative w-full">
          <div className="flex flex-cols-1 items-center space-x-16 ml-20">
            <div className="card w-72 bg-white shadow-xl">
              <figure className="px-10 pt-10">
                <img src={c1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-[#444444] font-bold text-2xl mt-[-20px]">
                  Thomas Henry
                </h2>
                <p className="text-[#737373] font-semibold">
                  Branded Tyre Expert
                </p>
                <div className="space-x-3 ">
                  <button>
                    <img src={f} alt="" />
                  </button>
                  <button>
                    <img src={t} alt="" />
                  </button>
                  <button>
                    <img src={g} alt="" />
                  </button>
                  <button>
                    <img src={i} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-72 bg-white shadow-xl">
              <figure className="px-10 pt-10">
                <img src={c3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-[#444444] font-bold text-2xl mt-[-20px]">
                  Max Alfred
                </h2>
                <p className="text-[#737373] font-semibold">Engine Expert</p>
                <div className="space-x-3 ">
                  <button>
                    <img src={f} alt="" />
                  </button>
                  <button>
                    <img src={t} alt="" />
                  </button>
                  <button>
                    <img src={g} alt="" />
                  </button>
                  <button>
                    <img src={i} alt="" />
                  </button>
                </div>
              </div>
            </div>

            <div className="card w-72 bg-white shadow-xl">
              <figure className="px-10 pt-10">
                <img src={c2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="text-[#444444] font-bold text-2xl mt-[-20px]">
                  Marshal John
                </h2>
                <p className="text-[#737373] font-semibold">
                  Dent Paint Expert
                </p>
                <div className="space-x-3 ">
                  <button>
                    <img src={f} alt="" />
                  </button>
                  <button>
                    <img src={t} alt="" />
                  </button>
                  <button>
                    <img src={g} alt="" />
                  </button>
                  <button>
                    <img src={i} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slideFirst" className="btn btn-circle">
              ❮
            </a>
            <a href="#slideFirst" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
