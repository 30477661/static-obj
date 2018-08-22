import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
const apiRoot = 'static/model-data/';
export default {
    getData(url) {
        return axios.get(apiRoot + url);
    }
};