const path=require('path')

module.exports = {//注意这里是exports不是export
    entry: "./src/main.js",//唯一入口文件，就像Java中的main方法
    output: {//输出目录
        path:path.resolve(__dirname,'public'),//打包后的js文件存放的地方
        filename:'[name].js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        },{
            test:/\.css$/,
            loader: 'style-loader!css-loader' 
        }]
    },
    devServer:{
        contentBase:'./public'
    }
}