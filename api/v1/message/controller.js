const messageService = require('./service');
const utilData=require('../../../util/date');

const messageController = {};

messageController.templateSend = async function (ctx, next) {
    let param = {};
    param.access_token = ctx.state.$accessToken;
    let body = ctx.request.body;
    param.touser = body.openId;
    param.form_id = body.form_id;
    param.template_id = 'cu0J_LLwc-H_l3XxaZ0-5NKVethuYys0KcwnNvQ-f0o';
    param.page = 'pages/index/index';
    param.data = {
        keyword1: {
            value: '马尔代夫旅游路线'
        },
        keyword2: {
            value: '北京-马尔代夫'
        },
        keyword3: {
            value: '北京科技大学'
        },
        keyword4: {
            value: '2800.00'
        },
        keyword5: {
            value: `马尔代夫-${utilData.format('yyyy-MM-dd hh:mm:ss')}`
        }
    };
    param.emphasis_keyword = 'keyword4.DATA';
    let ss = await messageService.templateSend(param);
    ctx.state = {
        code: 0,
        data: ss.data
    }
}

messageController.test = async function (ctx, next) {
    ctx.state = {
        code: 0,
        data: ctx.state.$accessToken || 'ok'
    }
}

messageController.customReceive = async function (ctx, next) {
    let body = ctx.request.body;
    console.log('body', body);
    let MsgType = body.MsgType;
    let param = {};
    param.access_token = ctx.state.$accessToken;
    param.touser = body.FromUserName;
    let _res;
    if (MsgType == 'event') {
        param.content = '欢迎咨询旅游路线！';
        _res = await messageService.customSend(param);
    } else {
        param.content = '休要调戏我!';
        _res = await messageService.customSend(param);
    }
    ctx.body='success';
}

module.exports = messageController;