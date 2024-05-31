import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const router = useParams();
  const { id } = router;

  const [spot, setSpot] = useState({});
  const {
    spot: name,
    country,
    location,
    description,
    cost,
    seasonality,
    time,
    visitors,
    photo,
  } = spot;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/get-single-spot/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data);
        
      })
      .catch((error) => toast.error(error.message));
  }, [id]);

  return (
    <div>
      <div className="card card-side w-4/6 h-full mx-auto bg-base-100 shadow-2xl">
        <figure>
          <img className="" src={photo} alt={photo} />
        </figure>
        <div className="card-body w-3/6">
          <h2 className="card-title">{name}</h2>
          <p>
            <strong>Country:</strong> {country}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Cost:</strong> {cost}
          </p>
          <p>
            <strong>Seasonality:</strong> {seasonality}
          </p>
          <p>
            <strong>Time:</strong> {time}
          </p>
          <p>
            <strong>Visitors:</strong> {visitors}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
