<template>
    <div class="news-list">
        <headerpage style="margin-bottom: 16px;" :title_page='title_page="新闻公告"' :backBtn='backBtn=true' ></headerpage>
        <div class="bookli" v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
            <router-link :to='{name:"NewsDetail",params:{title:item.xwbt,date:item.xwrq,content:item.xwlr}}' tag="ul" v-for="(item,index) of resultList" :key="index">
                <li>
                    <img src="../../../static/news-list-icon.png" alt="">
                    <!-- <i></i> -->
                    <div>
                        <span>{{item.xwbt}}</span>
                        <span>{{item.xwrq}}</span>
                    </div>
                </li>
                <li>{{item.xwlr}}</li>
            </router-link>
            <!-- <router-link to="/" tag="ul">
                <li>
                    <img src="../../../static/news-list-icon.png" alt="">
                    <i></i>
                    <div>
                        <span>端午节闭馆通知</span>
                        <span>图书作者</span>
                    </div>
                </li>
                <li>根据我校2018年端午节放假安排，图书馆开馆时间调整根据我校2018年端午节放假安排，图书馆开馆时间调整</li>
            </router-link> -->
            
            <mt-spinner :type="3" v-show="loadingImg"></mt-spinner>
            <div v-show="noneData" class="noDataShow">全部数据已加载</div>
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
            setShow:null,
            dropNumber:1,
            lastPage:'',    
            loadingImg:null,
            noneData:'',
            loading:null,
            resultList:[],
            totalRow:''
        }
    },
    created(){
        this.myAjax.postData('wode/news_bulletin',
        (result)=>{
            this.totalRow = result.totalRow;
            this.lastPage = result.lastPage;
            this.resultList = result.list;
            if(this.lastPage){
                this.noneData = true;
                this.loadingImg = false;
            } else {
                this.noneData = false;
                this.loadingImg = true;
            }
        },()=>{

        },{});
       
    },
    mounted(){
        
    },
    methods:{
        loadMore(){
            if(this.lastPage){
                this.noneData = true;
                this.loadingImg = false;
                return;
            } 
            let that = this;
            this.loadingImg = true;
            this.loading = true;
            setTimeout(() => {
            this.myAjax.postData('wode/news_bulletin',
            function(result){
                result.list.forEach(element => {
                    that.resultList.push(element);
                });
                that.lastPage = result.lastPage;
                that.loading = false;
            },function(){

            },{fsrq:this.dateSearch,title:this.inputText,pageIndex:++this.dropNumber},that);
            },500);
        }
    }
}
</script>
<style lang="scss">
div.news-list {
    .bookli {
            ul {
                // width: 95%;
                margin: 0 auto 16px;
                background-color: #fff;
                padding: 24px 0 50px;
                >li:nth-of-type(1) {
                    position: relative;
                    padding: 0 34px 22px 24px;
                    display: flex;
                    align-items:center;
                    img {
                        height: 80px;
                        width: 80px;
                        margin-right: 15px;
                    }
                    div {
                        display: flex;
                        flex-direction: column;
                        span:nth-of-type(1) {
                            font-size: 30px;
                            color: #333333;
                        }
                        span:nth-of-type(2) {
                            font-size: 20px;
                            color: #999999;
                        }
                    }
                    i {
                        border-radius: 50%;
                        background-color: rgb(255, 0, 0);
                        position: absolute;
                        left: 80px+14;
                        top: -7px;
                        width: 14px;
                        height: 14px;
                    }
                    
                }
                >li:nth-of-type(2) {
                    font-size: 26px;
                    color: #666666;
                    padding: 0 34px 0 24px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                }
            }
        }
}

</style>
