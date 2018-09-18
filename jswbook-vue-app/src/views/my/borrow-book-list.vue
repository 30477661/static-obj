<template>
    <div class="borrow-book-list">
        <headerpage :title_page='title_page="借阅清单"' :backBtn='backBtn=true'></headerpage>
        <div class="date-btn">
            <button :class="{active:dateSearch==1}" @click="dateSearch=1;queryList(dateSearch);">近1个月</button>
            <button :class="{active:dateSearch==2}" @click="dateSearch=2;queryList(dateSearch);">近3个月</button>
            <button :class="{active:dateSearch==3}" @click="dateSearch=3;queryList(dateSearch);">近6个月</button>
            <button :class="{active:dateSearch==4}" @click="dateSearch=4;queryList(dateSearch);">6个月以上</button>
        </div>
        <div class="top-search">
            <img :src="indexNavImg.indexSearch_icon" alt=""><input type="text" @keyup.enter="queryList(dateSearch)" placeholder="标题与作者" v-model="inputText">
        </div>
        <div style="text-align:center;">
            <button class="one-row-btn" @click="queryList(dateSearch)">查询</button>
        </div>
        <div class="base-information">共 <font color="#ff0101">{{totalRow || 0}}</font> 本</div>
        <div v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
            <div class="borrowing-book-data" v-for="item in resultList" :key="item.ssh">
                <div>
                    <div class="book-img"><img src="../../../static/book-img.png" alt=""></div>
                    <ul class="bookimg-rg">
                        <li>
                            <span>题名：</span>
                            <span>{{item.title}}</span>
                        </li>
                        <li>
                            <span>条码：</span>
                            <span>{{item.barcode}}</span>
                        </li>
                        <li>
                            <span>著者：</span>
                            <span>{{item.author}}</span>
                        </li>
                        <li>
                            <span>出版：</span>
                            <span>{{item.asdf}}</span>
                        </li>
                        <li>
                            <span>馆藏地：</span>
                            <span>{{item.bookAddress}}</span>
                        </li>
                        <li class="clearfix">
                            <span>还书日期：</span>
                            <span>{{item.bookDate}}</span>
                            <span>
                                <router-link :to="{name:'Evaluation',params:{ssh:item.ssh}}" tag="a" class="comment-btn">{{item.pjflag== 0?'去评价':'已评价'}}</router-link>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
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
            indexNavImg:{
                indexSearch_icon:require('../../../static/index-search-icon.png')
            },
            dateSearch:1,
            inputText:'',
            dropNumber:1,
            lastPage:'',
            loadingImg:null,
            noneData:'',
            loading:null,
            resultList:[],
            totalRow:''
        }
    },
    methods:{
        queryList(arg){
            let that = this;
            this.dropNumber = 1;
            this.myAjax.postData('jieyue/my_history',
            function(result){
                that.totalRow = result.totalRow;
                that.lastPage = result.lastPage;
                that.resultList = result.list;
                if(that.lastPage){
                    that.noneData = true;
                    that.loadingImg = false;
                } else {
                    that.noneData = false;
                    that.loadingImg = true;
                }
            },function(){

            },{fsrq:arg,title:this.inputText},that);
        },
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
            this.myAjax.postData('jieyue/my_history',
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

    },
    created(){
        this.queryList(this.dateSearch);
    },
    watch:{
        loading(a,b){
            console.log(b);
        },
        lastPage(a,b){
            console.log(b);
        }
    }

}
</script>
<style lang="scss">

div.borrow-book-list {
    .date-btn {
        height: 96px;
        padding: 0 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        >button {
            border-radius: 4px;
            background-color: #ccc;
            width: 168px;
            height: 64px;
            border-radius: 4px;
            font-size: 24px;
            color: #333333;
        }
        >button.active {
            background-color: rgb(174, 217, 255);
        }
    }
    
}

</style>
