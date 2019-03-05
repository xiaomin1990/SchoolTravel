/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const messageController = require('../api/v1/message/controller');
const userController = require('../api/v1/user/controller');

const accessTokenMiddle = require('../middlewares/accessToken');

//测试
router.get('/test', accessTokenMiddle, messageController.test);
router.get('/signature', messageController.signature);

router.post('/templateSend', accessTokenMiddle,messageController.templateSend);
router.get('/getOpenIdAndSessionkey', userController.getOpenIdAndSessionkey);

router.post('/customReceive', accessTokenMiddle,messageController.customReceive);

module.exports = router
