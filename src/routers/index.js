const Router = require('koa-router');

const router = new Router();
const controllers = require('../controllers');
const api = require('./API/index');

router.get('/', (ctx) => {
    ctx.body = "index.html"
})
router.use('/api', api.routes(), api.allowedMethods())

module.exports = router;