import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const MyList = () => {
  const user = localStorage.getItem("user");
  const [spots, setSpots] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const parsedUser = JSON.parse(user);
  const navigate = useNavigate();

  console.log(parsedUser.email);

  // get form database
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/myListSpot/${parsedUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [user]);

  // delete specific spot by id
  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/spots/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setRefresh(!refresh);
          navigate("/");
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => toast.error(error.message));
  };

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
                  onClick={() => handleDelete(spot._id)}
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
