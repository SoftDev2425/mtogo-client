import { useParams } from "react-router-dom";

const Restaurants = () => {
  // get the zip code from the query params
  const { zipCode } = useParams<{ zipCode: string }>();

  return (
    <div>
      Restaurants
      {zipCode}
    </div>
  );
};

export default Restaurants;
