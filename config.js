const CONF = {
    port: '5758',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx4fdc6deac0e18ad7',

    // 微信小程序 App Secret
    appSecret: '',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: '172.21.0.8',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: '258258775aA',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称www
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
}

module.exports = CONF
