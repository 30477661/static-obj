// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
// import 'style-loader!css-loader!../node_modules/mint-ui/lib/style.css';
import App from './App'
import router from './router'
import myAjax from './assets/js/api/my-api'
import Common from './assets/js/common'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

Vue.use(MintUI);
Vue.use(Common);
// Vue.prototype.MintUI = MintUI;
Vue.prototype.myAjax = myAjax;

// Vue.use(VueAxios, axios)




Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    methods: {
        link(to) {
            this.$router.push(to);
        }
    }
});