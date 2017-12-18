import Vue from 'vue';
import iView from 'iview';
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import 'babel-polyfill';
axios.defaults.baseURL = 'http://192.168.0.192:8082/gpumall/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.axios=axios;
Vue.use(VueRouter);
Vue.use(iView);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        goodsarr:[] //所有商品
    },
    mutations: {
        // increment (state) {
        //     state.goodsarr
        // }
    }

})

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: Routers,
    linkActiveClass:''
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    // if(!localStorage.getItem('userMes')){
    //   router.push('/login');
    // }
    window.scrollTo(0, 0);
});



new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

if (module.hot) {
  module.hot.accept();
}
