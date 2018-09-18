<template>
    <div class="book-detail">
        <headerpage :title_page='result.Ztm' :backBtn='backBtn=2' :rgUrl="rgUrl" v-on:headerRg="headerRgClick"></headerpage>
        <p>推荐指数：{{result.pfs}}<span><img src="../../../static/red-star.png" alt="" v-for="item in arr" :key="item"></span></p>
        <p>推荐理由：<span>{{result.nrjj || '暂无'}}</span></p>
        <div class="detail-img-div" style="padding: 24px 0 32px;">
            <img src="" alt="">
            <ul>
                <li>{{result.Ztm}}</li>
                <li>著者：{{result.Dyzrsm}}</li>
                <li>出版社：{{result.Cbsm}}</li>
                <li>出版日期：{{result.Cbny}}</li>
                <li>文献类型：{{result.wxlx}}</li>
                <li>索书号：{{result.Ssh}}</li>
            </ul>
        </div>
        <ul class="tab-switch" style="border-bottom: 1px solid #dddddd;">
            <li :class="{active:tabSwitch==1}" @click="tabSwitch=1"><span>馆藏信息</span><i></i></li>
            <li :class="{active:tabSwitch==2}" @click="tabSwitch=2"><span>内容简介</span><i></i></li>
            <li :class="{active:tabSwitch==3}" @click="tabSwitch=3"><span>著者简介</span><i></i></li>
            <li :class="{active:tabSwitch==4}" @click="tabSwitch=4"><span>读者评论({{commetResult.totalRow || "暂无"}})</span><i></i></li>
        </ul>
        <div v-show="tabSwitch==1" class="book-lib-table">
            <table>
                <thead>
                    <tr>
                        <th style="width:40%;">馆藏地</th>
                        <th style="width:40%;">条码号</th>
                        <th style="width:20%;">状态</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) of result.gcdlist" :key="index">
                        <td  style="width:40%;">{{item.gcd}}</td>
                        <td  style="width:40%;">{{item.txm}}</td>
                        <td  style="width:20%;">{{item.sfjy?'借出':'在馆'}}</td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top:20px;text-align: center;">
                <button class="one-row-btn" @click="bookBorrow(result.sfyy)">{{result.sfyy?"预约":"预借"}}</button>
            </div>
        </div>
        <div v-show="tabSwitch==2" class="book-lib-table">
            <p>{{result.nrjj || "暂无"}}</p>
        </div>
        <div v-show="tabSwitch==3" class="book-lib-table">
            <p>{{result.zzjj || "暂无"}}</p>
        </div>
        <div v-show="tabSwitch==4">
            <ul class="reader-comment-list" v-for="(item,index) of commetResult.list" :key="index">
                <li>
                    <div>
                        <img src="../../../static/comment-header.png" alt="">
                        <font>{{item.Xm || "暂无"}}</font>
                        <span>{{item.pjrq || "暂无"}}}</span>
                    </div>
                    <p>{{item.pjnr}}</p>
                </li>
            </ul>
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
            bookContent:{},
            title_page:'',
            arr:[],
            tabSwitch:1,
            rgUrl:require('../../../static/collection-btn.png'),
            result:{},
            commetResult:{}
        }
    },
    methods:{
        headerRgClick(){
            this.myAjax.postData('tuijian/collect',
            (result)=>{
                this.$toast(result);
            },()=>{

            },{lsh:this.$route.params.lsh,ssh:this.$route.params.ssh});
        },
        bookBorrow(bookStatic){
            let borrowData = {lsh:this.result.Lsh,ssh:this.result.Ssh};
            let borrowPort = '';
            if(bookStatic){
                borrowPort = 'yuyue/subscribe';
                borrowData.sfyy = 1;
            }else {
                borrowPort = 'yujie/preloan';
                borrowData.sfyj = 1;
            }
            let that = this;
            this.myAjax.postData(borrowPort,
            function(result){
                // console.log(result);
                that.$toast({message:result});
            },function(){

            },borrowData,that);
        }
    },
    created(){
            let that = this;
            this.myAjax.postData('tuijian/new_arrivals_comment',
            (result)=>{
                that.result = result;
            },()=>{

            },{lsh:this.$route.params.lsh},that);

            //评论
            this.myAjax.postData('tuijian/new_arrivals_comment_Readers',
            function(result){
                that.commetResult = result;
            },function(){

            },{ssh:this.$route.params.ssh},that);
        
    },
    mounted(){
        if(this.$route.params.tabSwitch){
            this.tabSwitch = this.$route.params.tabSwitch;
        }
    }
}
</script>
<style lang="scss">
div.book-detail {
    header {
        border-bottom: 1px solid #dddddd;
        img:nth-of-type(2) {
            width: 74px;
            height: 34px;
            margin-top: 23px;
        }
    }
    p {
        padding: 12px 24px;
        font-size: 24px;
        color: #333333;
        background-color: #fff;
        img {
            width: 28px;
        }
    }
}
.detail-img-div {
    display: flex;
    background-color: #fff;
    >img {
        width: 210px;
        height: 280px;
        background-color: #7c7c7c;
        margin: 0 40px 0 64px;
        align-self: center;
        
    }
    >ul {
        font-size: 24px;
        color: #333333;
        >li:nth-of-type(1) {
            // white-space: nowrap;
            // text-overflow: ellipsis;
            // display: inline-block;
            // width: 400px;
            // overflow: hidden;
            font-size: 32px;
        }
        >li {
            margin-bottom: 10px;
        }
    }
}
.book-lib-table {
    background-color: #fff;
    padding: 24px 32px 32px 32px;
    table {
        width: 100%;
        tr {
            display: table;
            width: 100%;
            table-layout: fixed;
            >td,
            >th {
                text-align: center;
                color: #333;
            }
        }
        th {
            background-color: #cccccc;
        }
        td {
            background-color: #efefef;

        }
        th, td {
            padding: 15px 0;
        }
        tbody {
            display: block;
            max-height: 62px*6;
            overflow-y: auto;
            overflow-x: hidden;
        }
    }
    p {
        font-size: 24px;
        color: #333333;
        text-indent: 48px;
    }
}
.reader-comment-list {
    background-color: #fff;
    padding: 16px 30px 16px 24px;
    >li {
        div {
            display: flex;
            align-items: center;
            height: 56px;
            img {
                width: 56px;
                margin-right: 15px;
            }
            font {
                font-size: 26px;
                color: #0b7fe5;
                flex-grow: 1;
            }
            span {
                font-size: 22px;
                color: #999999; 
            }
        }
        p {
            padding: 6px 0 6px 71px;
            font-size: 28px;
            color:#333333;
            line-height: 40px;
        }
    }
}
</style>
