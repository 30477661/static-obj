<template>
    <div class="borrow-book-list">
        <headerpage :title_page='title_page="借阅清单"' :backBtn='backBtn=true'></headerpage>
        <div class="date-btn">
            <button :class="{active:dateSearch==1}" @click="dateSearch=1">近1个月</button>
            <button :class="{active:dateSearch==2}" @click="dateSearch=2">近3个月</button>
            <button :class="{active:dateSearch==3}" @click="dateSearch=3">近6个月</button>
            <button :class="{active:dateSearch==4}" @click="dateSearch=4">6个月以上</button>
        </div>
        <div class="top-search">
            <img :src="indexNavImg.indexSearch_icon" alt=""><input type="text" placeholder="题名、著者、分类号、出版社、主题词">
        </div>
        <div class="base-information">共 <font color="#ff0101">10</font> 本</div>
        <div class="borrowing-book-data">
            <div>
                <div class="book-img"><img src="../../../static/book-img.png" alt=""></div>
                <ul class="bookimg-rg">
                    <li>
                        <span>题名：</span>
                        <span>人性的弱点</span>
                    </li>
                    <li>
                        <span>条码：</span>
                        <span>00000001</span>
                    </li>
                    <li>
                        <span>著者：</span>
                        <span>【美】卡耐基 著</span>
                    </li>
                    <li>
                        <span>出版：</span>
                        <span>中国妇女出版社   2016.01</span>
                    </li>
                    <li>
                        <span>馆藏地：</span>
                        <span>书库1</span>
                    </li>
                    <li class="clearfix">
                        <span>还书日期：</span>
                        <span>2018-06-21</span>
                        <span>
                            <router-link tag="a" class="comment-btn" to="">去评价</router-link>
                        </span>
                    </li>
                </ul>
            </div>
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
            dateSearch:1
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
