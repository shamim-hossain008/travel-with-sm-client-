import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouristsSpotsSection = () => {
  const [spots, setSpots] = useState([]);

  // get form database
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/get-all-spots`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-10">
      <div className="flex justify-center">
        <h2 className="text-bold text-4xl  bg-orange-100 text-center border border-cyan-600 px-4 py-2 rounded-full">
          Tourists Spots Section
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-20">
        {spots.slice(0, 6).map((item) => (
          <div key={item._id} className="card w-96 glass">
            <figure>
              <img className="h-72" src={item.photo} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tourists_Spot_Name: {item.spot}</h2>
              <p>Country Name : {item.country}</p>
              <p> Location : {item.location}</p>
              <div className="card-actions justify-end">
                <div className="card-actions justify-end">
                  <Link to={`/viewDetails/${item._id}`}>
                    <button className="btn btn-primary">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpotsSection;
