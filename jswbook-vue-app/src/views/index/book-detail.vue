<template>
    <div class="book-detail">
        <headerpage :title_page='title_page' :backBtn='backBtn=2' :rgUrl="rgUrl" v-on:headerRg="headerRgClick"></headerpage>
        <p>推荐指数：<span><img src="../../../static/red-star.png" alt="" v-for="item in arr" :key="item"></span></p>
        <p>推荐理由：<span>卡耐基的书总是给在逆境中的人们以力量和激情，这本《人性的弱点》也一样！</span></p>
        <div class="detail-img-div" style="padding: 24px 0 32px;">
            <img src="" alt="">
            <ul>
                <li>{{bookContent.title}}</li>
                <li>著者：{{bookContent.author}}</li>
                <li>出版社：{{bookContent.source}}</li>
                <li>出版日期：{{bookContent.serveDate}}</li>
                <li>文献类型：图书</li>
                <li>索书号：{{bookContent.categoryNumber}}</li>
            </ul>
        </div>
        <ul class="tab-switch" style="border-bottom: 1px solid #dddddd;">
            <li :class="{active:tabSwitch==1}" @click="tabSwitch=1"><span>馆藏信息</span><i></i></li>
            <li :class="{active:tabSwitch==2}" @click="tabSwitch=2"><span>内容简介</span><i></i></li>
            <li :class="{active:tabSwitch==3}" @click="tabSwitch=3"><span>著者简介</span><i></i></li>
            <li :class="{active:tabSwitch==4}" @click="tabSwitch=4"><span>读者评论(30)</span><i></i></li>
        </ul>
        <div v-show="tabSwitch==1" class="book-lib-table">
            <table>
                <tr>
                    <th style="width:40%;">馆藏地</th>
                    <th style="width:40%;">条码号</th>
                    <th style="width:20%;">状态</th>
                </tr>
                <tr>
                    <td>一楼藏书室</td>
                    <td>0000001</td>
                    <td>借出</td>
                </tr>
                <tr>
                    <td>二楼藏书室</td>
                    <td>0000001</td>
                    <td>在馆</td>
                </tr>
            </table>
            <div style="margin-top:20px;text-align: center;">
                <button class="one-row-btn">预 &nbsp;&nbsp; 约</button>
            </div>
        </div>
        <div v-show="tabSwitch==2" class="book-lib-table">
            <p>该书汇集了卡耐基的思想精华和最激动人心的内容，是著者最成功的励志经典。该书汇集了卡耐基的思想精华和最激动人心的内容，是著者最成功的励志经典。........该书汇集了卡耐基的思想精华和最激动人心的内容，是著者最成功的励志经典。........该书汇集了卡耐基的思想精华和最激动人心的内容，是著者最成功的励志经典。</p>
        </div>
        <div v-show="tabSwitch==3" class="book-lib-table">
            <p>卡耐基被誉为“成人教育之父”，著名心理学家，人际关系学家，20世纪最伟大的人生导师之一。卡耐基被誉为“成人教育之父”，著名心理学家，人际关系学家，20世纪最伟大的人生导师之一。卡耐基被誉为“成人教育之父”，著名心理学家，人际关系学家，20世纪最伟大的人生导师之一。卡耐基被誉为“成人教育之父”，著名心理学家，人际关系学家，20世纪最伟大的人生导师之一。</p>
        </div>
        <div v-show="tabSwitch==4">
            <ul class="reader-comment-list">
                <li>
                    <div>
                        <img src="../../../static/comment-header.png" alt="">
                        <font>小李</font>
                        <span>2018-08-20</span>
                    </div>
                    <p>这本书再次燃起了我对生活的激情，大家都笑对困
难吧！值得一看哟！</p>
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
            rgUrl:require('../../../static/collection-btn.png')
        }
    },
    created(){
        // this.myAjax.getData('my.json',(data)=>{
        //     this.bookContent = data.data[0];
        //     this.title_page = this.bookContent.title;
        //     this.arr.length = +this.bookContent.remainDay;
        // });
        
    },
    mounted(){
        if(this.$route.params.tabSwitch){
            this.tabSwitch = this.$route.params.tabSwitch;
        }
    },
    methods:{
        headerRgClick(){
            this.$toast('收藏成功');
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
    }
    >ul {
        font-size: 24px;
        color: #333333;
        >li:nth-of-type(1) {
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
            width: 100%;
            >td,
            >th {
                // flex-grow: 1;
                // justify-content: center;
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
            // height: 40px;
            line-height: 40px;
        }
    }
}
</style>
