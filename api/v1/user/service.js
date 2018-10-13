const axios = require('axios');

const userService = {};

userService.getOpenIdAndSessionkey = async function (param) {
    let code = param.code;
    let _url = `https://api.weixin.qq.com/sns/jscode2session?appid=wx4fdc6deac0e18ad7&secret=27054560590cdbc66b4072e2c0d72e11&js_code=${code}&grant_type=authorization_code`
    return await axios.get(_url);
}

module.exports = userService;