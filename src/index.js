/*
    五核心:entry,output,
        loader：让webpack能处理非js文件,
        plugins：提供各种优化/功能,
        mode：开发模式或生产模式 
              development: 更改process.env.NODE_ENV的值为development
    webpack本身只能处理js和json文件
    指令:
    开发环境：webpack ./src/index.js -o ./build/build.js --mode=development
    生产环境：webpack ./src/index.js -o ./build/build.js --mode=production   和开发环境对比就是压缩了代码
*/
import './base.scss'
const data = require('./data.json')
function add(x,y){
    return x+y;
}
console.log(add(1,2))
console.log(JSON.stringify(data))