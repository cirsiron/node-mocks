const path = require('path');
const utils = require('../../utils/index');

const resolveJson = function(name) {
    return path.resolve('./src/jsons/', name)
}

const sendDataRes = async (ctx) => {
    let postData = ctx.request.body
    try{
        let json = await utils.readFile(resolveJson("test.json"))
        typeof json === 'string' && (   
            json = JSON.parse(json)
        )
        ctx.body = json
    }catch(e) {
        ctx.body = 'error'
    }
} 

module.exports = async (ctx, next) => {
    if (ctx.method === 'POST' ) {
        
    } else {
        await sendDataRes(ctx)
    }
}