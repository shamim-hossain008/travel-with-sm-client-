import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser, setUser, user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(email, password, photo);

    // check password
    // if (password.length < 6) {
    //   setRegisterError("Password should be at least 6 characters or longer.");
    //   return;
    // } else if (!/[A-Z]/.test(password)) {
    //   setRegisterError(
    //     "Your Password should have at least one upper case characters."
    //   );
    //   return;
    // } else if (!accepted) {
    //   setRegisterError("Please accept our terms and condition!");
    //   return;
    // }

    createUser(email, password)
      .then((result) => {
        console.log(result);
        setUser(result.user);

        const createdAt = result.user?.metadata?.creationTime;
        const user = { email, createdAt: createdAt };
        fetch("http://localhost:5010/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              //TODO: show toast
              // navigate("/");
              toast.success("User have been created successfully");
            }
          });
      })
      .catch(toast.error("Something went wrong"));
  };
  return (
    <div>
      <h1 className="text-3xl my-10 text-center font-bold">
        Register Your Account
      </h1>
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="photo url"
            placeholder="Photo URL"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p className="text-center mt-4">
          Already Have An Account?
          <Link className="text-red-500" to="/login">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
