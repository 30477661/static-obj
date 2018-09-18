<template>
    <div class="my-serve">
        <headerpage :title_page='title_page="我的预约"' :backBtn='backBtn=true'></headerpage>
        <ul class="tab-switch" style="margin-bottom: 24px;">
            <li :class="{active:tabSwitch==1}" @click="serveList();tabSwitch=1"><span>生效中</span><i></i></li>
            <li :class="{active:tabSwitch==2}" @click="cancelServeList();tabSwitch=2"><span>已取消</span><i></i></li>
            <li :class="{active:tabSwitch==3}" @click="InvalidList();tabSwitch=3"><span>已失效</span><i></i></li>
            <li :class="{active:tabSwitch==4}" @click="allList();tabSwitch=4"><span>全部</span><i></i></li>
        </ul>
        <div v-infinite-scroll="loadMore(tabSwitch)"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
            <router-link tag="ul" :to="{name:'BookDetail',params:{lsh:item.lsh,ssh:item.ssh}}" class="borrowing-book" v-for="item in resultList" :key="item.id">
                <li class="clearfix">
                    <span>题名：</span>
                    <span>{{item.ztm}}</span>
                    <span>
                        <button @click.stop="cancelServe({lsh:item.lsh,ssh:item.ssh,sfyj:0})" v-show="tabSwitch==1">取消</button>
                    </span>
                </li>
                <li>
                    <span>著者：</span>
                    <span>{{item.dyzrsm}}</span>
                </li>
                <li>
                    <span>出版：</span>
                    <span>{{item.cbsm}}</span>
                </li>
                <li>
                    <span>索书号：</span>
                    <span>{{item.ssh}}</span>
                    <span><font color="#fe0000">{{item.c}}</font></span>
                </li>
                <li>
                    <span>馆藏地：</span>
                    <span>{{item.gcd}}</span>
                    <span>预约时间：{{item.startrq}}</span>
                </li>
            </router-link>
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
            tabSwitch:1,
            inForce:''
        }
    },
    created(){
        this.serveQuery('yuyue/ineffect_subscribe');
    },
    mounted(){
        
    },
    methods:{
        serveList(){
            if(this.tabSwitch==1) return;
            this.dropNumber=1;
            this.serveQuery('yuyue/ineffect_subscribe');
        },
        cancelServeList(){
            if(this.tabSwitch==2) return;
            this.dropNumber=1;
            this.serveQuery('yuyue/ineffectno_preloan');
        },
        InvalidList(){
            if(this.tabSwitch==3) return;
            this.dropNumber=1;
            this.serveQuery('yuyue/invalid_subscribe');
        },
        allList(){
            if(this.tabSwitch==4) return;
            this.dropNumber=1;
            this.serveQuery('yuyue/whole_subscribe');
        },
        cancelServe(data){
            let that = this;
            this.myAjax.postData('yuyue/cancel_subscribe',
            function(result){
              that.$toast(result);
              that.serveQuery('yuyue/ineffect_subscribe');
            },function(){

            },{...data},that);
        },
        loadMore(portArg){
            if(this.lastPage){
                this.noneData = true;
                this.loadingImg = false;
                return;
            } 
            if(portArg==1){
                portArg = 'yuyue/ineffect_subscribe';
            }else if(portArg==2){
                portArg = 'yuyue/ineffectno_preloan';
            }else if(portArg==3){
                portArg = 'yuyue/invalid_subscribe';
            }else if(portArg==4){
                portArg = 'yuyue/whole_subscribe';
            }
            let that = this;
            this.loadingImg = true;
            this.loading = true;
            setTimeout(() => {
            this.myAjax.postData(portArg,
            function(result){
                result.list.forEach(element => {
                    that.resultList.push(element);
                });
                that.lastPage = result.lastPage;
                that.loading = false;
            },function(){

            },{fsrq:this.dateSearch,title:this.inputText,pageIndex:++this.dropNumber},that);
            },500);
        },
        serveQuery(portArg,data={}){
            let that = this;
            this.myAjax.postData(portArg,
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

            },{...data},that);
        }
    }
}
</script>
<style lang="scss">
div.my-serve {
    .tab-switch {
        height: 80px;
        background-color: #ffffff;
        display: flex;
        >li {
            flex-grow: 1;
            font-size: 28px;
            color: #333333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        >li.active {
            color: #0b7fe5;
            >i {
                width: 40px;
                height: 4px;
                background-color: #0b7fe5;
                // align-self: flex-end;
            }
        }
    }
    >div {
        ul.borrowing-book {
            height: 229px;
        }
    }
}

</style>
