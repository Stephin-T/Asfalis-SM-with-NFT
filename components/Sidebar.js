import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Link } from "next/link";
import { AsfalisContext } from "../context/AsfalisContext";
import SidebarOption from "./SidebarOption";
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from "react-icons/ri";
import { BiHash } from "react-icons/bi";
import { FiBell, FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineMail, HiMail } from "react-icons/hi";
import { FaRegListAlt, FaHashtag, FaBell } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";

import Modal from "react-modal";
import { customStyle } from "../lib/constants";
import ProfileImageMinter from "./mintingModal/ProfileImageMinter";
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from "react-icons/bs";

const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1  `,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
};
function Sidebar({ initialSelectedIcon = "Home" }) {
  const [selected, setSelected] = useState(initialSelectedIcon);
  const { currentAccount, currentUser, tweets } = useContext(AsfalisContext);
  const router = useRouter();

  return (
    <div className={style.wrapper}>
      <div className={style.twitterIconContainer}>
        <img src="https://firebasestorage.googleapis.com/v0/b/covifind-673e3.appspot.com/o/onlinelogomaker-042022-2056-9844.png?alt=media&token=f0be5bb4-1d9a-4085-981f-33c834ef437a" />
      </div>
      <div className={style.navContainer}>
        <SidebarOption
          Icon={selected === "Home" ? RiHome7Fill : RiHome7Line}
          text="Home"
          isActive={Boolean(selected === "Home")}
          setSelected={setSelected}
          redirect={"/"}
        />
        <SidebarOption
          Icon={selected === "Explore" ? FaHashtag : BiHash}
          text="Explore"
          isActive={Boolean(selected === "Explore")}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === "Notifications" ? FaBell : FiBell}
          text="Notifications"
          isActive={Boolean(selected === "Notifications")}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === "Messages" ? HiMail : HiOutlineMail}
          text="Messages"
          isActive={Boolean(selected === "Messages")}
          setSelected={setSelected}
          redirect={"/messages"}
        />
        <SidebarOption
          Icon={selected === "NFT Market place" ? BsBookmarkFill : BsBookmark}
          text="NFTMarketPlace"
          isActive={Boolean(selected === "NFT Market Place")}
          setSelected={setSelected}
          redirect={"/nft"}
        />
        <SidebarOption
          Icon={selected === "Lists" ? RiFileList2Fill : FaRegListAlt}
          text="Lists"
          isActive={Boolean(selected === "Lists")}
          setSelected={setSelected}
        />
        <SidebarOption
          Icon={selected === "Profile" ? BsPersonFill : BsPerson}
          text="Profile"
          isActive={Boolean(selected === "Profile")}
          setSelected={setSelected}
          redirect={"/profile"}
        />
        <SidebarOption Icon={CgMoreO} text="More" setSelected={setSelected} />
        <div
          onClick={() => {
            router.push(`${router.pathname}/?mint=${currentAccount}`);
          }}
          className={style.tweetButton}
        >
          Mint
        </div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}>
          <img
            src={currentUser.profileImage}
            alt="profile"
            className={
              currentUser.isProfileImageNft
                ? `${style.profileImage} smallHex`
                : style.profileImage
            }
          />
        </div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>{currentUser.name}</div>
            <div className={style.handle}>@{currentAccount.slice(39)}</div>
          </div>
          <div className={style.moreContainer}>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
      <Modal
        isOpen={Boolean(router.query.mint)}
        onRequestClose={() => {
          router.back();
        }}
        style={customStyle}
      >
        <ProfileImageMinter />
      </Modal>
    </div>
  );
}

export default Sidebar;
