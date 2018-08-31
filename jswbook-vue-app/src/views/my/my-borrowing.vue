<template>
    <div class="my-borrowing">
        <headerpage :title_page='title_page="我的借阅"' :backBtn='backBtn=true'></headerpage>
        <div class="base-information">共 <font color="#ff0101">{{resultData.totalRow}}</font> 本</div>
        <div v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
            <div class="borrowing-book-data" v-for="(item,index) in blackData" :key="index">
                <div>
                    <div class="book-img"><img src="../../../static/book-img.png" alt=""></div>
                    <ul class="bookimg-rg">
                        <li>
                            <span>题名：</span>
                            <span>{{item.title}}</span>
                            <span><button @click="borrowBtn">续借</button></span>
                        </li>
                        <li>
                            <span>条码：</span>
                            <span>{{item.barCode}}</span>
                        </li>
                        <li>
                            <span>著者：</span>
                            <span>{{item.author}}</span>
                        </li>
                        <li>
                            <span>出版：</span>
                            <span>{{item.source}}</span>
                        </li>
                        <li>
                            <span>馆藏地：</span>
                            <span>{{item.bookAddress}}</span>
                        </li>
                    </ul>
                </div>
                <ul class="book-bottom">
                    <li>
                        <span>借书日期：</span>
                        <span>2018-06-21</span>
                        <span><font color="#ff0000">剩余2天</font></span>
                    </li>
                    <li>
                        <span>应还日期：</span>
                        <span>2018-07-20</span>
                        <span>
                            <router-link :to="{name:'Evaluation',params:{id:1001}}" tag="a" class="comment-btn">去评价</router-link>
                        </span>
                    </li>
                </ul>
            </div>
            <mt-spinner :type="3" v-show="loadingImg"></mt-spinner>
            <div v-show="noneData">已没有数据</div>
        </div>
        
    </div>
</template>
<script>
import headerpage from '../../components/header'
export default {
    components:{
        headerpage
    },
    data(){
        return {
            resultData:{},
            blackData:[],
            loadingImg:null,
            noneData:'',
        }
    },
    created(){
        let that = this;
        this.myAjax.postData('jieyue/my_list',
        function(result){
            that.resultData = result.resMsg;
            let resultList = result.resMsg.list;
            resultList.forEach(element => {
                that.blackData.push(element);
            });
            console.log(that.blackData,55);

        },function(){

        },{id:1002},that)

    },
    mounted(){
        
    },
    methods:{
        borrowBtn(){
            this.$toast('存在超期未还书籍，不能续借！');
        },
        loadMore(){
            if(this.resultData.lastPage) return this.noneData = true;
            this.loadingImg = true;
            let that = this;
            this.loading = true;
            setTimeout(() => {
                this.myAjax.getData('my.json',
                function(result){
                    result.data.forEach(element => {
                        that.blackData.push(element);
                    });
                this.loading = false;
                this.loadingImg = false;
            }, function(){

            },{id:1002},that)},1000);
        },
    }
}
</script>
<style lang="scss">

div.my-borrowing {
    height: 100%;
    background-color: #efefef;
    >ul:last-child {
        margin-bottom: 0!important;
    }
    .borrowing-book {
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        width: 702px;
        height: 310px;
        box-sizing: border-box;
        margin: 0 auto 24px;
        padding: 0 20px 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        >li {
            height: 40px;
            line-height: 40px;
            font-size: 26px;
            >span:nth-of-type(1) {
                color: #333333;
            }
            >span:nth-of-type(2) {
                color: #666666;
            }
            >span:nth-of-type(3) {
                float: right;
                >button {
                    border-width: 1px;
                    border-color: rgb(11, 127, 229);
                    border-style: solid;
                    border-radius: 6px;
                    width: 85px;
                    height: 38px;
                    line-height: 36px;
                    text-align: center;
                    font-size: 24px;
                    color: rgb(11, 127, 229);
                    background-color: transparent;
                }
            }
        }
    }
}
</style>
