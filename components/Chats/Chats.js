import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../../firebase/firebase-config.js";
import { signOut } from "firebase/auth";
import axios from "axios";
import { useSelector } from "react-redux";
const Chats = ({ CHAT_ID, CHAT_KEY }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpeg", {
      type: "image/jpeg",
    });
  };
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "Project-ID": CHAT_ID,
          "User-Name": user.email,
          "User-Secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formData, {
              headers: {
                "private-key": CHAT_KEY,
              },
            })
            .then(() => {
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
  }, [user, isAuthenticated, router, CHAT_ID, CHAT_KEY]);
  if (!user || loading) return <h1 className="loading">Loading...</h1>;
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">DotsChat</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh-66px)"
        projectID={CHAT_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
