<template>
    <div class="new-book">
        <headerpage :title_page='title_page="好书推荐"' :backBtn='backBtn=true'></headerpage>
        <div v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
            <div class="borrowing-book-data" v-for="(item,index) in resultList" :key="index">
                <router-link tag="div" :to="{name:'BookDetail',params:{lsh:item.lsh,ssh:item.ssh}}">
                    <div class="book-img"><img src="../../../static/book-img.png" alt=""></div>
                    <ul class="bookimg-rg">
                        <li class="new-book-name">
                            <span>{{item.Ztm}}</span>
                            <span></span>
                            <span>
                                <button @click.stop="bookPosition(index)">在馆信息</button>
                                <i v-show="index===setShow"><img src="../../../static/direction-img.png" alt=""></i>
                                <ul class="book-lib-message" v-show="index===setShow">
                                    <li v-for="(itemChild,indexChild) in item.gcd" :key="indexChild">
                                        <span>{{itemChild.gcd}}</span>
                                        <span><font color="ff0000">{{itemChild.number}}</font>本</span>
                                    </li>
                                </ul>
                            </span>
                        </li>
                        <li>
                            <span><font color="#5db3ff">著者：</font></span>
                            <span><font color="#5db3ff">{{item.Dyzrsm}}</font></span>
                        </li>
                        <li>
                            <span>出版社：</span>
                            <span>{{item.Cbsm}}</span>
                            <router-link tag="span" :to="{name:'BookDetail',params:{lsh:item.lsh,ssh:item.ssh,tabSwitch:4}}"><img src="../../../static/comment-pen.png" alt=""> <font color="#666666">{{item.pls.pls}}</font></router-link>
                        </li>
                    </ul>
                </router-link>
            </div>
            <mt-spinner :type="3" v-show="loadingImg"></mt-spinner>
            <div v-show="noneData" class="noDataShow">全部数据已加载</div>
        </div>
    </div>
</template>
<script>
import headerpage from '../../components/header'
// import { Toast } from 'mint-ui'
export default {
    components:{
        headerpage
    },
    created(){
        this.myAjax.postData('tuijian/goodbook_recom',
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
    data(){
        return {
            bookNumber:2001,
            bookNumberDiv:this.bookNumber,
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
    methods:{
        bookPosition(a){
            if( this.setShow === a) {
                this.setShow = '';
            }else {
                this.setShow = a;
            }
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
            this.myAjax.postData('tuijian/goodbook_recom',
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

