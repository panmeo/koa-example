require('dotenv').config();
const Router = require('@koa/router');
const router= new Router();

const { myLogging } = require('./middleware/logging');
const { verify } = require('./middleware/auth');

const webController = require('./web/controller');
const apiUserController = require('./api/user/controller');
const apiFeedController = require('./api/feed/controller');

router.use(myLogging); // 어떤 페이지를 들어가도 찍어준다

router.get('/', webController.home);
router.get('/page/:page', webController.page);

//router.get('/date',)

router.post('/api/user/register', apiUserController.register);
router.post('/api/user/login',apiUserController.login);

router.use(verify);
router.get('/api/user/:id', apiUserController.info);

router.get('/api/feed', apiFeedController.index);
router.post('/api/feed', apiFeedController.store);
router.get('/api/feed/:id', apiFeedController.show);
router.put('/api/feed/:id', apiFeedController.update);
router.delete('api/feed/:id', apiFeedController.delete);

module.exports = router;