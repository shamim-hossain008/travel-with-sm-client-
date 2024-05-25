const AddTouristsSpot = () => {
  const handleAddMyList = () => {};

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
            <form>
              {/* form maine and quantity row */}
              <div className="md:flex gap-2 ">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="User Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text"> User Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="User Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              {/* form supplier row */}
              <div className="md:flex gap-2 ">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Tourists Spot Name </span>
                  </label>
                  <input
                    type="text"
                    name="spot name"
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
                    name="country name"
                    placeholder="Country Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              {/* form category and details row */}
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
                    name="shortDescription"
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
                    name="travel time"
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
                    name="Visitors"
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
                <button className="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
