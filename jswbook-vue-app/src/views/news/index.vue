<template>
    <div class="news-index">
        <header class="clearfix">系统消息</header>
        <div class="bookli" v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
            <router-link :to='{name:"MessageDetail",params:{title:item.title,date:item.date,content:item.content,lsh:item.lsh}}' tag="ul" v-for="(item,index) of resultList" :key="index">
                <li>
                    <p>{{item.title}}</p>
                    <i v-show="!+item.isyd"></i>
                    <div>
                        {{item.content}}
                    </div>
                    <span>{{item.date}}</span>
                </li>
            </router-link>
            <mt-spinner :type="3" v-show="loadingImg"></mt-spinner>
            <div v-show="noneData" class="noDataShow">全部数据已加载</div>
        </div>
        <footernav :imgActive='imgActive=3'></footernav>
    </div>
    
</template>
<script>
import footernav from '../../components/footer'
import headerpage from '../../components/header'
export default {
    components:{
        headerpage,
        footernav
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
        this.myAjax.postData('wode/xtxx',
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
            this.myAjax.postData('wode/xtxx',
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
    div.news-index {
        padding-bottom: 100px;
        header {
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 36px;
            background-color: #0b7fe5;
            color: #fefefe;
            margin-bottom: 8px;
        }
        .bookli {
            ul {
                margin: 8px 24px;;
                background-color: #fff;
                padding: 20px 24px;
                border-radius: 8px;
                >li{
                    position: relative;
                    display: flex;
                    align-items:center;
                    p {
                        border-radius: 8px;
                        background-color: rgb(80, 193, 250);
                        width: 80px;
                        height: 80px;
                        margin-right: 15px;
                        font-size: 28px;
                        color: #fefefe;
                        text-align: center;
                    }
                    div {
                        font-size: 30px;
                        color: #333333;
                        white-space: normal;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        width: 400px;
                        height: 80px;
                        margin-right: 50px;
                    }
                    i {
                        border-radius: 50%;
                        background-color: rgb(255, 0, 0);
                        position: absolute;
                        left: 80px;
                        top: -7px;
                        width: 14px;
                        height: 14px;
                    }
                    span {
                        align-self: flex-start;
                        padding-top: 10px;
                        font-size: 20px;
                        color: #999;
                    }
                }
            }
        }
    }
</style>

