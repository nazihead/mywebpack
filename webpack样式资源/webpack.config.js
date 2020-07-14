/*
所有的构建工具基于node.js,采用commonjs
*/
const path= require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    entry:'./src/index.js',
    output:{
        filename:'built.js',
        path:path.resolve(__dirname,'build')  // 拼接当前文件绝对路径和 build

    },
    //loader的配置
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[     //由下往上执行
                    'style-loader',        //将样式插入到html的style 标签中
                    'css-loader',         //将css文件变成commonjs识别的样式，加载到JS中
                ]
            },
            {
                test:/\.scss$/,
                use:[     //由下往上执行
                    'style-loader',        //将样式插入到html的style 标签中
                    'css-loader',         //将css文件变成commonjs识别的样式，加载到JS中
                    'sass-loader'
                ]
            },
            {    //这里不能获取到html的image
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',   //依赖于file-loader
                options:{
                    limit:10000,      //小于50kb则转换为base64格式处理。（通常取8-12）不需要为图片发请求，但是图片体积会更大 
                    esModule:false  //默认用ES6语法解析，在解析HTML中的图片中可能会出问题，所以这里关闭
                }
            },
            {    //将html中的image引出来，可以被webpack识别到
                test: /\.html$/,
                loader: 'html-loader',   //依赖于file-loader
            },
            // {
            //     exclude:/\.(css|.js|.html)$/,   //过滤这些匹配
            //     use:[     
            //         'file-loader',        //打包其他资源
            //     ]
            // }
        ],
        
    },
    plugins:[
        //创建一个空的HTML，自动引入打包输出的所有资源
        new HtmlWebpackPlugin({
            template:'./src/copy.html',   //将index.html的内容复制到HTMl里
        })
    ],
    mode:'development'
}