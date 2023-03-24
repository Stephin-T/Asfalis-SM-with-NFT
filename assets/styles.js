// index.js
const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
}

// feed.js
const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

// tweetbox.js
const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}

// post.js
const style = {
  wrapper: `flex p-3 border-b border-[#38444d]`,
  profileImage: `rounded-full h-[40px] w-[40px] object-cover`,
  postMain: `flex-1 px-4`,
  headerDetails: `flex items-center`,
  name: `font-bold mr-1`,
  verified: `text-[0.8rem]`,
  handleAndTimeAgo: `text-[#8899a6] ml-1`,
  tweet: `my-2`,
  image: `rounded-3xl`,
  footer: `flex justify-between mr-28 mt-4 text-[#8899a6]`,
  footerIcon: `rounded-full text-lg p-2`,
}

// sidebar.js
const style = {
  wrapper: `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer: `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer: `flex-1`,
  profileButton: `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2`,
  profileLeft: `flex item-center justify-center mr-4`,
  profileImage: `height-12 w-12 rounded-full`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
  name: `text-lg`,
  handle: `text-[#8899a6]`,
  moreContainer: `flex items-center mr-2`,
}

// sidebaroption.js
const style = {
  wrapper: `w-min flex items-center rounded-[100px] p-4 cursor-pointer hover:bg-[#333c45] transition-all hover:duration-200 hover:ease-in-out`,
  iconContainer: `text-xl mr-4`,
  textGeneral: `font-medium`,
  textActive: `font-bold`,
}

// widgets.js
const style = {
  wrapper: `flex-[1] p-4`,
  searchBar: `flex items-center bg-[#243340] p-2 rounded-3xl`,
  searchIcon: `text-[#8899a6] mr-2`,
  inputBox: `bg-transparent outline-none`,
  section: `bg-[#192734] my-6 rounded-xl overflow-hidden`,
  title: `p-2 font-bold text-lg`,
  showMore: `p-2 text-[#1d9bf0] text-sm cursor-pointer hover:bg-[#22303c]`,
  item: `flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer`,
  newsItemLeft: `flex-1`,
  newsItemCategory: `text-[#8899a6] text-xs font-semibold`,
  newsItemTitle: `text-sm font-bold`,
  newsItemRight: `w-1/5 ml-3`,
  newsItemImage: `rounded-xl h-14 w-14 object-cover`,
  followAvatarContainer: `w-1/6`,
  followAvatar: `rounded-full h-[40px] w-[40px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
  handle: `text-[#8899a6]`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
}

// profile.js
const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  mainContent: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
}

// profileheader.js
const style = {
  wrapper: `border-[#38444d] border-b`,
  header: `py-1 px-3 mt-2 flex items-center`,
  primary: `bg-transparent outline-none font-bold`,
  secondary: `text-[#8899a6] text-xs`,
  backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
  coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
  coverPhoto: `object-cover h-full w-full`,
  profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
  profileImage: `object-cover rounded-full h-full`,
  profileImageNft: `object-cover h-full`,
  profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  details: `px-3`,
  nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
  activeNav: `text-white`,
}

// profiletweets.js
const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

// initialstate.js
const style = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col`,
  inputFieldsContainer: `flex-1`,
  inputContainer: `mb-4`,
  fileInput: `hidden`,
  input: `bg-transparent outline-none text-xl w-full`,
  customInput: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  fileSelected: `bg-[#2b6127] text-white px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  lower: `flex justify-between items-center`,
  visibility: `flex items-center text-[#1d9bf0] text-sm font-bold`,
  visibilityText: `ml-2`,
  mintButton: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  inactiveMintButton: `text-black px-3 py-1 rounded-full bg-[#8899a6]`,
}

// loadingstate.js
const style = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
  title: `font-semibold text-xl mb-6`,
}

const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`
// finishedstate.js
const style = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col items-center justify-center`,
  title: `font-semibold text-xl mb-6`,
  closeButton: `mt-6 bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
}
