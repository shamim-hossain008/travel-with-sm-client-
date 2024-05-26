const UpdatePage = () => {
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const spot = form.spot.value;
    const country = form.country.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const photo = form.photo.value;

    const newUpdate = {
      spot,
      country,
      location,
      description,
      cost,
      seasonality,
      time,
      visitors,
      photo,
    };
    console.log(newUpdate);
  };

  return (
    <div>
      <div className="min-h-screen text-center">
        <div className="card-body  items-center">
          <div className="shrink-0 bg-red-50 p-24 rounded-xl  shadow-2xl ">
            <h3 className="text-3xl text-extrabold text-pretty pb-3">
              Add Tourists Spot
            </h3>
            <p>
              Traveling is a passion for many, offering a chance to explore new
              cultures, landscapes, and experiences. From the sun-drenched
              beaches of the Maldives to the historic streets of Rome, here are
              some of the most popular tourist destinations worldwide.
            </p>
            <form onSubmit={handleUpdate}>
              {/* form row 1 */}

              {/* form  row 2*/}
              <div className="md:flex gap-2 ">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Tourists Spot Name </span>
                  </label>
                  <input
                    type="text"
                    name="spot"
                    placeholder="Tourists Spot Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Country Name</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              {/* form row 3 */}
              <div className="md:flex gap-2 ">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Short Description"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-2 ">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Average Cost</span>
                  </label>
                  <input
                    type="text"
                    name="cost"
                    placeholder="Average_Cost"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Seasonality</span>
                  </label>
                  <input
                    type="text"
                    name="seasonality"
                    placeholder="like Summer, Winter"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-2 ">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Travel Time</span>
                  </label>
                  <input
                    type="text"
                    name="time"
                    placeholder="Travel Time"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Total Visitors PerYear</span>
                  </label>
                  <input
                    type="text"
                    name="visitors"
                    placeholder="Total Visitors PerYear"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              {/* form photo URL row */}
              <div className="">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;
