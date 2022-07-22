import React, { useEffect } from "react";
// import auth from '../../Firebase.init'
import auth from "../../Firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Spinner from "../Shared/Spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from, token]);
  if (loading) {
    return <Spinner />;
  }

  const signInPassword = (event) => {
    event.preventDefault();
    const email = event.target?.email?.value;
    const password = event.target?.password?.value;

    signInWithEmailPassword(email, password);
  };
  return (
    <div>
      <div className="w-96 mx-auto m-5 ">
        <div className="card bg-base-100 shadow-xl ">
          <form
            onSubmit={signInPassword}
            className=" grid grid-cols-1 gap-3 mx-auto  w-[100%] px-10"
          >
            <label htmlFor="email"> Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your Email"
              className="input  input-bordered input-primary  "
              required
            />

            <label htmlFor="password"> Password</label>

            <input
              type="password"
              name="password"
              placeholder="password"
              className="input  input-bordered input-primary w-[100%] "
              required
            />
            <input type="submit" value="Login" className="btn btn-secondary" />
          </form>
          <p className="p-5">
            Need have an account?{" "}
            <Link to="/login/register" className="text-primary">
              create Account
            </Link>
          </p>
          <div className="divider">OR</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
