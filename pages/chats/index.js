import React from "react";
import Chats from "../../components/Chats/Chats";

const ChatsPage = ({ CHAT_ID, CHAT_KEY }) => {
  return (
    <div>
      <Chats CHAT_ID={CHAT_ID} CHAT_KEY={CHAT_KEY} />
    </div>
  );
};

export default ChatsPage;
export const getStaticProps = () => {
  return {
    props: {
      CHAT_ID: process.env.CHAT_ENGINE_ID,
      CHAT_KEY: process.env.CHAT_ENGINE_KEY,
    },
  };
};
