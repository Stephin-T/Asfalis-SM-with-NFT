import Head from "next/head";
import { useContext } from "react";
import { AsfalisContext } from "../context/AsfalisContext";
import Image from "next/image";
import Feed from "../components/home/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import metamaskLogo from "../assets/metamask.png";
import errorImg from "../assets/error.png";

const style = {
  wrapper: `flex justify-center h-full w-full select-none bg-gradient-to-r from-teal-400 via-slate-800 to-blue-500 text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
};
const Home = () => {
  const { appStatus, connectToWallet } = useContext(AsfalisContext);

  const app = (status = appStatus) => {
    switch (status) {
      case "connected":
        return userLoggedIn;

      case "notConnected":
        return noUserFound;

      case "noMetaMask":
        return noMetaMaskFound;

      case "error":
        return error;

      default:
        return loading;
    }
  };

  const userLoggedIn = (
    <div className={style.content}>
      <Sidebar initialSelectedIcon={"Home"} />
      <Feed />
      <Widgets />
    </div>
  );

  const noUserFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} width={200} height={200} />
      <div
        className={style.walletConnectButton}
        onClick={() => connectToWallet()}
      >
        Connect Wallet
      </div>
      <div className={style.loginContent}>Connect to Metamask.</div>
    </div>
  );

  const noMetaMaskFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} width={200} height={200} />
      <div className={style.loginContent}>
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://metamask.io/download.html`}
        >
          You must install Metamask, a <br /> virtual Ethereum wallet, in your
          browser.
        </a>
      </div>
    </div>
  );

  const error = (
    <div className={style.loginContainer}>
      <Image src={errorImg} width={250} height={200} />
      <div className={style.loginContent}>
        An error occurred. Please try again later or from another browser.
      </div>
    </div>
  );

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loginContent}>Loading...</div>
    </div>
  );

  return (
    <div className="body_name">
      <div className={style.wrapper}>{app(appStatus)}</div>
    </div>
  );
};

export default Home;
