import loginImg from "../../../assets/images/login/login.svg";
import facebook from "../../../assets/icons/Facebook.png";
import google from "../../../assets/icons/google.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleLoginData = (event) => {
    event.preventDefault();
    const form = event.target;
    // const email = form.name.value;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name);
    console.log(email);
    console.log(password);
  };

  return (
    <div className="mt-12 mb-36 grid grid-cols-1 mid:grid-cols-1 lg:grid-cols-2">
      <div className="flex ml-14 items-center">
        <img src={loginImg} alt="loginImage" />
      </div>
      <div>
        <div className="card h-full max-w-xl	 flex-shrink-0  shadow-2xl bg-white">
          <div className="card-body mt-8 ">
            <h1 className="text-4xl text-center text-[#444444]">Sign Up</h1>

            <form onSubmit={handleLoginData}>
              <div className="form-control mt-6">
                <label className="label">
                  <span className="label-text text-dark font-semibold">
                    Name
                  </span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="input bg-white input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-dark font-semibold">
                    Email
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="input bg-white input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text text-dark font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Your password"
                  className="input bg-white input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn capitalize text-xl border-none outline-none mt-4 text-white bg-[#FF3811]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>

            <div>
              <h3 className="text-center my-4">or Sign In with</h3>
              <div className="text-center">
                <button className="mr-4">
                  <img src={facebook} alt="facebbok login" />
                </button>
                <button>
                  <img src={google} alt="facebbok login" />
                </button>
                <p className="mt-8">
                  Already have an account?{" "}
                  <Link className="text-[#FF3811] font-bold" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
