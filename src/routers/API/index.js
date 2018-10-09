const Router = require('koa-router');

const api = new Router();
const controllers = require('../../controllers/index');
const c_api = controllers.api;


api.all('/set-status', c_api.setStatus)

module.exports = api;