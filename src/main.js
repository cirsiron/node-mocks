const Koa = require('koa');
const bodyParser = require('koa-bodyparser')

const config = require('./config');
const router = require('./routers');
const cors = require('koa2-cors');

const app = new Koa();
const host = `http://${config.host}:${config.port}`;

// 跨域
app.use(cors({
    origin: function (ctx) {
        return "*"; // 允许来自所有域名请求
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
// 请求数据解析
app.use(bodyParser())
// 路由加载
app.use(router.routes()).use(router.allowedMethods());

app.listen(`${config.port}`, () => {
    console.log('服务已经开启,请访问');
    console.log(host);
})

