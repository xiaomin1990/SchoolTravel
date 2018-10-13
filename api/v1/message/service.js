const axios = require('axios');

const messageService = {};

messageService.templateSend = async function (param) {
    let access_token = param.access_token;
    let _body = {};
    _body.touser = param.touser;
    _body.template_id = param.template_id;
    _body.page = param.page;
    _body.form_id = param.form_id;
    _body.data = param.data;
    _body.emphasis_keyword = param.emphasis_keyword;
    let _url = `https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=${access_token}`
    return await axios.post(_url, _body);
}

messageService.customSend = async function (param) {
    let access_token = param.access_token;
    let _body = {};
    _body.touser = param.touser;
    _body.msgtype = 'text';
    _body.text = {
        content: param.content
    }
    let _url = `https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${access_token}`
    console.log('_body',_body)
    return await axios.post(_url, _body);
}


module.exports = messageService;