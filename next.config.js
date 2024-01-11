/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  distDir: 'dist',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '//img.qipaodao.com/app_aichat_frontend' : process.env.NODE_ENV === 'test' ? '//img.qipaodao.com/aichat_test' : '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    // domains: ['img.qipaodao.com']
  }
}

module.exports = nextConfig
