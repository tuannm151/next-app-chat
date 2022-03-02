import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { saveUser, logout } from "../store/slices/authSlice";
import { useRouter } from "next/router";

const Auth = () => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && !isAuthenticated) {
        const curUser = {
          uid: user.uid,
          email: user.email,
          photoURL: user.photoURL,
          displayName: user.displayName,
        };
        dispatch(saveUser(curUser));
        router.push("/chats");
      }
      if (!user) {
        dispatch(logout());
      }
    });
  }, [isAuthenticated, dispatch, router]);
  return null;
};

export default React.memo(Auth);
