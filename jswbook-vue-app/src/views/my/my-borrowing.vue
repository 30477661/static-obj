<template>
    <div class="my-borrowing">
        <headerpage :title_page='title_page="我的借阅"' :backBtn='backBtn=true'></headerpage>
        <div class="base-information">共 <font color="#ff0101">{{totalRow}}</font> 本</div>
        <div v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
            <div class="borrowing-book-data" v-for="(item,index) in resultList" :key="index">
                <div>
                    <div class="book-img"><img src="../../../static/book-img.png" alt=""></div>
                    <ul class="bookimg-rg">
                        <li>
                            <span>题名：</span>
                            <span>{{item.ztm}}</span>
                            <span><button @click="borrowBtn(item)">续借</button></span>
                        </li>
                        <li>
                            <span>条码：</span>
                            <span>{{item.txm}}</span>
                        </li>
                        <li>
                            <span>著者：</span>
                            <span>{{item.zz}}</span>
                        </li>
                        <li>
                            <span>出版：</span>
                            <span>{{item.cbsm}}</span>
                        </li>
                        <li>
                            <span>馆藏地：</span>
                            <span>{{item.gcd}}</span>
                        </li>
                    </ul>
                </div>
                <ul class="book-bottom">
                    <li>
                        <span>借书日期：</span>
                        <span>{{item.jsrq}}</span>
                        <span><font color="#ff0000">{{+item.ts>=0?"剩余":"过期"}}{{item.ts | jdz}}天</font></span>
                    </li>
                    <li>
                        <span>应还日期：</span>
                        <span>{{item.fsrq}}</span>
                        <!-- <span>
                            <router-link :to="{name:'Evaluation',params:{ssh:item.ssh}}" tag="a" class="comment-btn">{{item.pj=='0'?'去评价':'我的评价'}}</router-link>
                        </span> -->
                        <span>
                            <a @click="evalLink(item)" class="comment-btn">{{item.pj=='0'?'去评价':'我的评价'}}</a>
                        </span>
                    </li>
                </ul>
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
        this.myAjax.postData('wode/borrow',
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
        borrowBtn(dataArg){
            this.myAjax.postData('wode/renew_book',
            (result)=>{
               this.$toast(result);
               setTimeout(function(){
                    location.reload();
               },3000);
            },()=>{
            },{lsh:dataArg.lsh,fsrq:dataArg.fsrq,xjcs:dataArg.xjcs});
        },
        loadMore(){
            if(this.lastPage){
                this.noneData = true;
                this.loadingImg = false;
                return;
            } 
            this.loadingImg = true;
            this.loading = true;
            setTimeout(() => {
            this.myAjax.postData('wode/borrow',
            (result)=>{ 
                result.list.forEach(element => {
                    this.resultList.push(element);
                });
                this.lastPage = result.lastPage;
                this.loading = false;
            },()=>{

            },{pageIndex:++this.dropNumber});
            },500);
        },
        evalLink(item){
            if(item.pj=='0' && item.ssh!=''){
                this.$router.push({name:'Evaluation',params:{ssh:item.ssh}});
            }else if (item.ssh==''){
                this.$toast('该书已丢失');
            }else {
                this.$router.push({name:'BookDetail',params:{lsh:item.lsh,ssh:item.ssh,tabSwitch:4}});
            }
        }
    },
    filters:{
        jdz(a){
            return Math.abs(a);
        }
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
