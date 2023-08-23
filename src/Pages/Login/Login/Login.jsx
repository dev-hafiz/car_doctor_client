import loginImg from "../../../assets/images/login/login.svg";
import facebook from "../../../assets/icons/Facebook.png";
import google from "../../../assets/icons/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Firbase/Hook/useAuth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { signInWithGoogle, loginWithEmailAndPassword, signInWithFacebook } =
    useAuth();

  const handleLoginData = (event) => {
    event.preventDefault();
    const form = event.target;
    // const email = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailAndPassword(email, password);
  };

  return (
    <div className="mt-12 mb-36 grid grid-cols-1 mid:grid-cols-1 lg:grid-cols-2">
      <div className="flex ml-14 items-center">
        <img src={loginImg} alt="loginImage" />
      </div>
      <div>
        <div className="card h-full max-w-xl	 flex-shrink-0  shadow-2xl bg-white">
          <div className="card-body mt-8 ">
            <h1 className="text-4xl text-center text-[#444444]">Login</h1>

            <form onSubmit={handleLoginData}>
              <div className="form-control mt-6">
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
            </form>

            <div>
              <h3 className="text-center my-4">or Sign In with</h3>
              <div className="text-center">
                <button onClick={signInWithFacebook} className="mr-4">
                  <img src={facebook} alt="facebbok login" />
                </button>
                <button onClick={() => signInWithGoogle(location, navigate)}>
                  <img src={google} alt="google login" />
                </button>
                <p className="mt-8">
                  Don&rsquo;t have an accounts?{" "}
                  <Link className="text-[#FF3811] font-bold" to="/signup">
                    Sign Up
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
