const MyList = () => {
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
          {/* {touristSpots.map((spot) => (
            <tr key={spot._id}>
              <td>{spot.name}</td>
              <td>{spot.location}</td>
              <td>{spot.description}</td>
              <td>
              <link to='/updatePage'> <button onClick={() => handleUpdate(spot._id)}>Update</button> </link>
                
                <button onClick={() => handleDelete(spot._id)}>Delete</button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
