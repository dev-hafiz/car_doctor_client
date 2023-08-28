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
          <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
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
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
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
