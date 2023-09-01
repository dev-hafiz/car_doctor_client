import errorImg from "../../assets/images/error.png";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src={errorImg} alt="errorPage" />
    </div>
  );
};

export default ErrorPage;
