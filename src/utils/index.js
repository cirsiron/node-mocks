
 const path = require('path')
 const fs = require('fs')

const readFile = (pathName) => {
    return new Promise(function(resolve, reject) {
        fs.readFile(pathName, 'utf-8', (err, data) => {
            if(err) {
                reject && reject(err)
            }else {
                resolve && resolve(data)
            }
        })
    })
}

// 数组处理
const array = {

}
// 字符串处理
const string = {

} 
// 对象处理
const object = {

}
// 数值处理
const number = {

}
// 随机值处理
const random = {

}


// 解析json数据
const parseJson = (json) => {
    return {

    }
}

module.exports = {
    parseJson,
    readFile
}