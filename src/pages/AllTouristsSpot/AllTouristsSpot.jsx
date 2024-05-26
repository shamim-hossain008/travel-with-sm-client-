import { Link } from "react-router-dom";

const AllTouristsSpot = () => {
  return (
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
  );
};

export default AllTouristsSpot;
