import { Link } from "react-router-dom";
import useAuth from "../../Firbase/Hook/useAuth";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Form = ({ loadService }) => {
  const { _id, description, price, img, title } = loadService || {};

  // console.log(price)

  const { user } = useAuth();
  const handleLoginData = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const des = form.des.value;

    const order = {
      customarName: name,
      date,
      img,
      email,
      price,
      des,
      title,
      serviceID: _id,
    };

    //Post data to server
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your Service has been booked!!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mt-12 mb-36 w-full">
      <div className="card h-full	bg-[#F3F3F3]">
        <div className="card-body mt-8 ">
          <form onSubmit={handleLoginData}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="form-control ">
                <input
                  name="name"
                  type="text"
                  defaultValue={user.displayName}
                  className="input text-white input-bordered"
                  required
                />
              </div>
              <div className="form-control ">
                <input
                  name="date"
                  type="date"
                  className="input text-white input-bordered"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <div className="form-control ">
                <input
                  name="email"
                  type="email"
                  defaultValue={user.email}
                  className="input text-white input-bordered"
                  required
                />
              </div>
              <div className="form-control ">
                <input
                  name="price"
                  type="text"
                  defaultValue={price}
                  className="input text-white input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control my-4">
              <textarea
                name="des"
                type="text"
                defaultValue={description}
                className="input text-white input-bordered"
                required
                readOnly
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
