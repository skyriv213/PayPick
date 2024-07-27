const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withVanillaExtract(nextConfig); // proxy 미적용 버전

// const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin'); // proxy 적용 버전
// const withVanillaExtract = createVanillaExtractPlugin();

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // Rewrites 설정 추가
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://localhost:8080/:path*', // 프록시할 서버 주소
//       },
//     ];
//   },
//   // Headers 설정 추가
//   async headers() {
//     return [
//       {
//         source: '/api/:path*',
//         headers: [
//           { key: 'Access-Control-Allow-Origin', value: '*' },
//           { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
//           { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
//         ],
//       },
//     ];
//   },
//   // Webpack 설정 유지
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback = { fs: false, path: false };
//     }
//     return config;
//   },
// };

// module.exports = withVanillaExtract(nextConfig);