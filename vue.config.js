module.exports = {
  devServer: {
    // host: "localhost",
    // port: "8080",
    // https: false,
    // open: true,
    proxy: {
      "/user": {
        target: "http://api.zhuishushenqi.com/",
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          // 重写路径
          "^/user": "",
        },
      },
    },
  },
};

// module.exports = {
//     devServer: {
//         //使用代理进行解决跨域的问题
//         proxy: {
//             '/api2': {
//                 target: 'http://api.zhuishushenqi.com',
//                 changeOrigin: true
//             },
//             '/api': {
//                 target: 'http://39.97.33.178',
//                 changeOrigin: true
//             }
//         }
//     }
// }
