import { createKazeStylePlugin } from "@kaze-style/next-plugin";

const withKazeStyle = createKazeStylePlugin({ })
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withKazeStyle(nextConfig);
