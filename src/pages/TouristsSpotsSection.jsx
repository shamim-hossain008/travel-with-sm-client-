import { Link } from "react-router-dom";

const TouristsSpotsSection = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-bold text-4xl  bg-orange-100 text-center border border-cyan-600 px-4 py-2 rounded-full">
          Tourists Spots Section
        </h2>
      </div>
      <div>
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>Average Cost: 10</p>
            <p>Total Visitors Per Year: 2000</p>
            <p>Travel Time: 20 Jun 2024</p>
            <p>Seasonality: Samar</p>
            <div className="card-actions justify-end">
              <div className="card-actions justify-end">
                <Link to="/viewDetails">
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristsSpotsSection;
