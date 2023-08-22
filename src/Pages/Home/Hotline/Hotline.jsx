import calender from "../../../assets/icons/calender.svg";
import phone from "../../../assets/icons/person.svg";
import location from "../../../assets/icons/location.svg";
const Hotline = () => {
  return (
    <div className="bg-dark text-white mt-32 mb-24 rounded-lg ">
      <div className=" mx-24 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="  flex  items-center">
          <img src={calender} alt="calender" />
          <div className="ml-3">
            <p className="xs ">We are open monday-friday</p>
            <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
          </div>
        </div>
        <div className="  flex  items-center">
          <img src={phone} alt="phone" />
          <div className="ml-3">
            <p className="xs ">Have a question?</p>
            <p className="text-2xl font-bold">+2546 251 2658</p>
          </div>
        </div>
        <div className="  flex  items-center">
          <img src={location} alt="location" />
          <div className="ml-3">
            <p className="xs ">Need a repair? our address</p>
            <p className="text-2xl font-bold">Liza Street, New York</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotline;
