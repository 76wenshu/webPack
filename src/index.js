/*
index.js:webpack entrance file
1.运行指令：
开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
生产环境：webpack ./src/index.js -o ./build/built.js --mode=production

webpack 能处理js和JSON文件打包,不能处理css/imge等其他资源
生产环境和开发环境多一个压缩的js代码
生产环境和开发环境将ES6mode编译成浏览器能识别的mode
*/
import data from "./data.json"
console.log(data,'data');

import './index.css'
function add(x, y){
    return x+y
}
console.log(add(1,2))