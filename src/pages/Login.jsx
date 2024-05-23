import { getAuth } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { logInUser } = useContext(AuthContext);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const auth = getAuth();
  const location = useLocation();
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setRegisterError("");
    setSuccess("");

    


    logInUser(email, password).then((result) => {
      console.log(result.user);
      const user = {
        email,
        lastLoggedAt: result.user?.metadata?.lastSignInTime,
      };
      fetch("http://localhost:5010/users", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          console.error("Login error:", error.message);
        });
    });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current?.value;
    if (!email || password) {
      console.log("Please Provide email...!!", emailRef.current.value);
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      console.log("Please Provide a valid email");
      return;
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl my-10 text-center font-bold">
          Login Your Account
        </h1>
        <form onSubmit={handleLogIn} className="md:w-3/4 lg:w-1/2 mx-auto">
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
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a
                onClick={handleForgetPassword}
                href="#"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        {registerError && <p className="text-red-700">{registerError}</p>}
        {success && <p className="text-green-600 font-bold">{success}</p>}
        <p className="text-center mt-4">
          Don't Have An Account?{"  "}
          <Link className="text-red-500" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
