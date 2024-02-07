const withPWA = require('next-pwa')({
    dest: 'public'
  })

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withPWA({
    async redirects() {
      return [
        {
          source: '/',
          destination: '/auth/login',
          permanent: true,
        },
      ]
    },
  })

// module.exports = {
//   reactStrictMode: true,
// }

// return module.exports