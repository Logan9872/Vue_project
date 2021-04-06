let baseURL;
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://mall-pre.springboot.cn';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn';
        break;
    case 'prev':
        baseURL = 'http://prev-mall-pre.springboot.cn';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn';
        break;
}

export default {
    baseURL
}