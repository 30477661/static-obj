<template>
    <div class="overdue-book">
        <headerpage :title_page='title_page="超期未还"' :backBtn='backBtn=true'></headerpage>
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
                        
                    </ul>
                </div>
                <ul class="book-bottom">
                    <li>
                        <span>已续借次数：</span>
                        <span>{{item.xjcs}}</span>
                        <span>超期天数：<font color="#ff0000">{{item.ts | jdz}}</font> 天</span>
                    </li>
                    <li>
                        <span>应还日期：{{item.fsrq}}</span>
                        <span> <font color="#ff0000">已超期</font> </span>
                        <span>
                            超期费用：<font color="#ff0000">{{item.je | jdz}}</font> 元
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
            this.myAjax.postData('wode/overdue',
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
    },
    created(){
        this.myAjax.postData('wode/overdue',
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
    filters:{
        jdz(a){
            return Math.abs(a);
        }
    }
}
</script>
<style lang="scss">


</style>
