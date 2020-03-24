module.exports = {
    devServer: {
      open: true,
      host: "localhost",
      port: 8080,
      proxy: {
          '/feiyan': {
              target: 'https://m.dcdapp.com',
              changeOrigin: true,
          },
          "/recommend":{
            target:'https://api.hongbeibang.com/',
            changeOrigin:true
          }
          
      }
      
  
    },
    publicPath: './'
  }