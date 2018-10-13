const axios = require('axios');
const debug = require('debug')('accessTokenMiddle')
/**
 * 响应处理模块
 */
module.exports = async function (ctx, next) {
    //get accessToken
    let _url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx4fdc6deac0e18ad7&secret=27054560590cdbc66b4072e2c0d72e11';
    let _response = await axios.get(_url);
    if (_response && _response.status == 200 && _response.data) {
        accessTokenObj = typeof (_response.data) == 'object' ? _response.data : JSON.parse(_response.data);
        ctx.state.$accessToken = accessTokenObj.access_token;
    }
    await next();
}
