const Koa = require('koa');
const koaBody = require('koa-body');
const Router = require('koa-router');
const sequelize = require('./models/index').sequelize;

const app = new Koa();
const router = new Router();
const api = require('./api');
router.use('/api', api.routes());

app.use(koaBody);
app.use(router.routes()).use(router.allowedMethods());
app.listen(4000, () => {
    console.log('server is listening to port 4000');
})
