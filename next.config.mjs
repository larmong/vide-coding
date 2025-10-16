/** @type {import('next').NextConfig} */
const nextConfig = {
  // Storybook에서 이미지 처리 문제 방지
  images: {
    disableStaticImages: false,
  },
};

export default nextConfig;
