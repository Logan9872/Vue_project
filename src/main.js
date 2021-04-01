import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-ax'
import router from './router.js'
import App from './App.vue'
import env from './env'

//根据前端的跨域方式做调整/a/b
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 接口错误拦截
axios.interceptors.response.use(function (response) {
    let res = response.data;
    if (res, status == 0) {
        return res.data;

    } else if (res.status == 10) {
        window.location.herf = '/#/login';
    } else {
        alert(res.msg);
    }
})

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
