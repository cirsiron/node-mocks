
module.exports = async (ctx) => {
    if (ctx.method === 'POST' ) {
        let postData = ctx.request.body
        console.log(postData) 
        ctx.body = (postData)
    } else {
        ctx.body = {
            "get": "get method"
        }
    }
}