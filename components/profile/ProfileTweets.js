import React from "react";
import Post from "../Post";
import { useContext, useState, useEffect } from "react";
import { AsfalisContext } from "../../context/AsfalisContext";

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const ProfileTweets = () => {
  const { currentAccount, currentUser } = useContext(AsfalisContext);
  const [author, setAuthor] = useState({
    name: "",
    profileImage: "",
    walletAddress: "",
    isProfileImageNft: undefined,
  });
  const [tweets, setTweets] = useState([
    {
      timestamp: "",
      tweet: "",
    },
  ]);

  useEffect(() => {
    if (!currentUser) return;

    setTweets(currentUser.tweets);
    setAuthor({
      name: currentUser.name,
      profileImage: currentUser.profileImage,
      walletAddress: currentUser.walletAddress,
      isProfileImageNft: currentUser.isProfileImageNft,
    });
  }, [currentUser]);

  return (
    <div className={style.wrapper}>
      {currentAccount.tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            currentAccount.name === "Unnamed"
              ? `${currentAccount.walletAddress.slice(
                  -4
                )}...${currentAccount.walletAddress.slice(-4)}`
              : currentAccount.name
          }
          userName={`${author.walletAddress.slice(
            0,
            4
          )}...${author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={currentUser.profileImage}
          timestamp={tweet.timestamp}
          isProfileImageNft={currentUser.isProfileImageNft}
        />
      ))}
    </div>
  );
};

export default ProfileTweets;
