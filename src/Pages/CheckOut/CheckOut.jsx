import Form from "../../components/Form/Form";
import IndicatorHeader from "../../components/IndicatorHeader/IndicatorHeader";

const CheckOut = () => {
  return (
    <div>
      <div className="mb-16">
        <IndicatorHeader
          title="Check Out"
          home="Home"
          serviceDetails="Check Out"
        />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default CheckOut;
