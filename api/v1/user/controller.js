const userService = require('./service');

const userController = {};

userController.getOpenIdAndSessionkey = async function (ctx, next) {
    let param = {};
    param.code = ctx.query.code;
    let _response = await userService.getOpenIdAndSessionkey(param);
    let _data = _response && _response.status == 200 && _response.data || {};
    ctx.state = {
        code: 0,
        data: _data
    }
}

module.exports = userController;