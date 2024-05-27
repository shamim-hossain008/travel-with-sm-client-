import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [spots, setSpots] = useState([]);

  // get form database

  useEffect(() => {
    fetch(`http://localhost:5010/myListSpot/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [user]);

  return (
    <div>
      <h2>My Tourist Spots</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {spots?.map((spot) => (
            <tr key={spot._id}>
              <td>{spot.name}</td>
              <td>{spot.location}</td>
              <td>{spot.description}</td>
              <td>
                <link to="/updatePage">
                  <button>Update</button>
                </link>

                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
