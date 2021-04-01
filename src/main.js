import VueAxios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

axios.interceptor.response.use(function(response{
    let res= response.data
    if(res,status ==0){
        return res.data;
    }else if(res.status ==10){
        window,location.href ='/#login';
    }else{
        alert(res.msg);
    }

}));

createApp(App).mount('#app')
