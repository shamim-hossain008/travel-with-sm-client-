import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyList = () => {
  const user = localStorage.getItem("user");
  const [spots, setSpots] = useState([]);

  const parsedUser = JSON.parse(user);

  console.log(parsedUser.email);

  // get form database
  useEffect(() => {
    fetch(`http://localhost:5010/myListSpot/${parsedUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [user]);

  return (
    <div className="overflow-x-auto">
      <h1 className=" flex justify-center  text-bold text-3xl py-4">
        My Tourist Spots
      </h1>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {spots.map((spot) => (
            <tr key={spot._id}>
              <td>{spot.name}</td>
              <td>{spot.location}</td>
              <td>{spot.description}</td>
              <td>
                <Link to={`/updatePage/${spot._id}`}>
                  <button className="btn btn-success text-bold m-1">
                    Update
                  </button>
                </Link>

                <button
                  className="btn btn-error text-bold "
                  // onClick={() => handleDelete(spot._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
