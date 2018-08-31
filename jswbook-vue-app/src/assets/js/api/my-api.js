import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue.prototype.axios = axios;
// axios.defaults.baseURL = '/api'
// axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(VueAxios, axios)
const testApi = 'static/model-data/';
const apiRoot = 'http://192.168.1.189:8080/';
let ajaxNumber = 1;
let _this = this;
export default {
    noTokenPost(url, success, error, dataParam = {}, thisObj = null) {
        axios.post(apiRoot + url, dataParam)
            .then((response) => {
                console.log(response.data, ajaxNumber++);
                if (response.data.resCode == 200) {
                    success(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
                error();
            })
    },
    postData(url, success, error, dataParam = {}, thisObj = null) {
        axios({
                url: apiRoot + url,
                method: 'post',
                data: {
                    token: localStorage.token,
                    ...dataParam
                },
                transformRequest: [function(data) {
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }],
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then((response) => {
                console.log(response.data, ajaxNumber++);
                if (response.data.resCode == "200") {
                    success(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
                error();
            });
    },
    testGet(url, success, error) {
        axios.get(testApi + url)
            .then((data) => {
                console.log(data.data, ajaxNumber++);
                success(data.data);
            }).catch((err) => {
                error();
                console.log(err);
            });
    }
};