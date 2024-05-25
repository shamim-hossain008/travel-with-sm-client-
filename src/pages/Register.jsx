import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, email, password, photo);

    // Reset error message
    setRegisterError("");

    // Password validation
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer.");
      toast.error("Password should be at least 6 characters or longer.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one uppercase letter."
      );
      toast.error("Your password should have at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one lowercase letter."
      );
      toast.error("Your password should have at least one lowercase letter.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        const createdAt = result.user?.metadata?.creationTime;
        const user = { email, createdAt };

        fetch("http://localhost:5010/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("User has been created successfully");
              navigate("/profile");
            }
          });
      })
      .catch((error) => {
        toast.error("Something went wrong");
        setRegisterError("Something went wrong. Please try again.");
      });
  };

  return (
    <div>
      <h1 className="text-3xl my-10 text-center font-bold">
        Register Your Account
      </h1>
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="url"
            name="photo"
            placeholder="Photo URL"
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
            placeholder="Password"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        {registerError && (
          <p className="text-red-500 text-center mt-4">{registerError}</p>
        )}
        <p className="text-center mt-4">
          Already Have An Account?{" "}
          <Link className="text-red-500" to="/login">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
