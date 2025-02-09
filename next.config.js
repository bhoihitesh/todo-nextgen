// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     async headers() {
//         return[
//             {
//                 source: '/api/:path*',
//                 headers: [
//                     {
//                         key: 'Access-Control-Allow-Credentials',
//                         value: 'true'
//                     },
//                     {
//                         key: 'Access-Control-Allow-Origin',
//                         value: '*'
//                     },
//                     {
//                         key: 'Access-Control-Allow-Methods',
//                         value: 'GET, POST, PUT, DELETE'
//                     },
//                     {
//                         key: 'Access-Control-Allow-Headers',
//                         value: 'Content-Type, Authorization'
//                     }
//                 ]
//             }
//         ]
//     }
// };
// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
      return [
        {
          source: '/api/:path*', // applies to all API routes
          headers: [
            {
              key: 'Access-Control-Allow-Credentials',
              value: 'true',
            },
            {
              key: 'Access-Control-Allow-Origin',
              value: '*', // You might want to restrict this to specific domains in production
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, PUT, DELETE, OPTIONS', // Including OPTIONS here is crucial
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization, X-Requested-With', // Add more headers if needed
            },
          ],
        },
        {
          source: '/api/delete-record/:path*', // Apply CORS headers specifically for delete-record route
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: '*', // Again, consider restricting this to specific domains in production
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'OPTIONS, GET, POST, PUT, DELETE',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Content-Type, Authorization',
            },
          ],
        },
      ]
    },
  }
  
  export default nextConfig;
  