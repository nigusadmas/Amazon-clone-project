import React, { useState, useContext } from "react";
import logoImage from "./img/logo.png";
import classes from "./Auth.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/actionTypes";

import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();

  // console.log(email, password);
  // console.log(user);
  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);

    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      // firebase auth
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate("/");
        })
        .catch((error) => {
          setError(error.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.logo}>
      <Link to="/">
        <div>
          {/* image */}
          <img src={logoImage} alt="LogoImage" />
        </div>
      </Link>

      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="Email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="example@xxx.com"
            />
          </div>
          <div>
            <label htmlFor="Password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_signin_btn}
          >
            {loading.signIn ? (
              <ClipLoader color="#36d7b7" size={19} />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Agreement  */}
        <p>
          By signing in you agree to the Amazone clone condition of use and &
          Sales. Please see our Privacy Notice, our Cookies Notice & our
          Interest Based Aids Notices.
        </p>

        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login_registration_btn}
        >
          {loading.signUp ? (
            <ClipLoader color="#36d7b7" />
          ) : (
            "Create Your Amazon Account"
          )}
        </button>

        {error && (
          <small style={{ paddingTop: "11px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
