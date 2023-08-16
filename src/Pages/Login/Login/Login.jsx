import loginImg from "../../../assets/images/login/login.svg";
import facebook from "../../../assets/icons/Facebook.png";
import google from "../../../assets/icons/google.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="mt-12 mb-36 grid grid-cols-1 mid:grid-cols-1 lg:grid-cols-2">
      <div className="flex ml-14 items-center">
        <img src={loginImg} alt="loginImage" />
      </div>
      <div>
        <div className="card h-screen max-w-xl	 flex-shrink-0  shadow-2xl bg-white">
          <div className="card-body mt-8 ">
            <h1 className="text-4xl text-center text-[#444444]">Login</h1>
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text text-dark font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                required
                className="input bg-white input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-dark font-semibold">
                  Confirm Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                required
                className="input bg-white input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn capitalize text-xl border-none outline-none text-white bg-[#FF3811]"
                type="submit"
                value="Login"
              />
            </div>

            <div>
              <h3 className="text-center my-4">or Sign In with</h3>
              <div className="text-center">
                <button className="mr-4">
                  <img src={facebook} alt="facebbok login" />
                </button>
                <button>
                  <img src={google} alt="facebbok login" />
                </button>
                <p className="mt-14">
                  Have an accounts?{" "}
                  <Link className="text-[#FF3811] font-bold" to="/signin">
                    Sign In
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

export default Login;
