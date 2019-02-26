import Vue from 'vue'
import vueRouter from 'vue-router'
import App from './app'
import router from './router/'
/* 使用vuerouter */
Vue.use(vueRouter);
//实例化vue
new Vue({
    el: '#root',  //挂载点
    router,  // 路由
    template: '', //模板
    // 子组件
    components: {
        App
    }
});
