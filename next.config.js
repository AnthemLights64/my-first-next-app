/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { // next.js不允许直接使用外部的图片资源，如果需要用，要在这个next.config.js文件中声明域名
        domains: ['images.unsplash.com', 'plus.unsplash.com', 'images.pexels.com']
    }
}

module.exports = nextConfig
