import { Link } from "react-router-dom";

const Form = () => {
  const handleLoginData = (event) => {
    event.preventDefault();
    const form = event.target;
    // const email = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div className="mt-12 mb-36 w-full">
      <div className="card h-full	bg-[#F3F3F3]">
        <div className="card-body mt-8 ">
          <form onSubmit={handleLoginData}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="form-control ">
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="input bg-white input-bordered"
                  required
                />
              </div>
              <div className="form-control ">
                <input
                  name="password"
                  type="password"
                  placeholder="Your password"
                  className="input bg-white input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div className="form-control ">
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="input bg-white input-bordered"
                  required
                />
              </div>
              <div className="form-control ">
                <input
                  name="password"
                  type="password"
                  placeholder="Your password"
                  className="input bg-white input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control my-4">
              <textarea
                name="textarea"
                type="text"
                placeholder="Your message"
                className="input bg-white input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6 pb-12">
              <input
                className="btn  capitalize text-xl border-none outline-none text-white bg-[#FF3811]"
                type="submit"
                value="Order confirm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
