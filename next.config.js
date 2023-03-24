/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/messages",
        destination: "https://hits-decentralized-chat-1.vercel.app/",
        permanent: false,
      },
      {
        source: "/nft",
        destination: "https://asfalis-nft.vercel.app/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
