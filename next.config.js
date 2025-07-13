/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/package.json",
        destination: "/404", // Redirect to the homepage or any other safe route
        permanent: false, // Use false for a temporary redirect (HTTP 302), true for a permanent one (HTTP 301)
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/package.json",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
