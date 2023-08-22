import { FaStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Rating = ({ rating }) => {
  const maxRating = rating;

  return (
    <div>
      <div className="flex items-center">
        {Array.from({ length: maxRating }, (_, index) => (
          <FaStar key={index} color={index < rating ? "gold" : "gray"} />
        ))}
      </div>
    </div>
  );
};

export default Rating;
