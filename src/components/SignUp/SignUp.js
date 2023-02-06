import React, { useRef } from "react";
import "./SignUp.scss";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
       console.log(userCredential)
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          type={"email"}
          placeholder="Email or phone number"
        />
        <input ref={passwordRef} type={"password"} placeholder="Password" />
        <button onClick={handleSignIn}>Sign In</button>
        <h4>
          <span className="signup__gray">New to Netflix ?</span>{" "}
          <span className="signup__link" onClick={handleRegister}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;
