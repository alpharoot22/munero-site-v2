import type { NextConfig } from "next";

// Private-preview positioning: the self-serve sales pages point to the investor home.
// Temporary (307) redirects so they can be restored without SEO penalty.
const retired = ["/pricing", "/register", "/features", "/how-it-works", "/sample", "/agency"];

const nextConfig: NextConfig = {
  async redirects() {
    return retired.map((source) => ({ source, destination: "/", permanent: false }));
  },
};

export default nextConfig;
