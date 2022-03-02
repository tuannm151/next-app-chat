import React from "react";
import {
  GoogleOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { auth } from "../../firebase/firebase-config.js";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to DotsChat!</h2>
        <div
          className="login-button google"
          onClick={() => signInWithRedirect(auth, new GoogleAuthProvider())}
        >
          <GoogleOutlined />
          <span>Sign in with Google</span>
        </div>
        <div
          className="login-button facebook"
          onClick={() => signInWithRedirect(auth, new FacebookAuthProvider())}
        >
          <FacebookOutlined />
          <span>Sign in with Facebook</span>
        </div>
        <div className="login-button twitter">
          <TwitterOutlined />
          <span>Sign in with Twitter</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
