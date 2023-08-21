import Form from "../../components/Form/Form";
import IndicatorHeader from "../../components/IndicatorHeader/IndicatorHeader";

// eslint-disable-next-line react/prop-types
const CheckOut = ({ loadService }) => {
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
        <Form loadService={loadService} />
      </div>
    </div>
  );
};

export default CheckOut;
