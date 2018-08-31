<template>
    <div class="borrow-ranking">
        <headerpage :title_page='title_page="图书借阅排行榜"' :backBtn='backBtn=true'></headerpage>
        <div class="date-btn">
            <button :class="{active:dateSearch==1}" @click="dateSearch=1">近1个月</button>
            <button :class="{active:dateSearch==2}" @click="dateSearch=2">近3个月</button>
            <button :class="{active:dateSearch==3}" @click="dateSearch=3">近6个月</button>
            <button :class="{active:dateSearch==4}" @click="dateSearch=4">近1年</button>
        </div>
        <div class="borrowing-book-data" :key="bookNumber">
            <p>1</p>
            <router-link tag="div" :to="{name:'BookDetail',params:{id:2001}}">
                <div class="book-img"><img src="../../../static/book-img.png" alt=""></div>
                <ul class="bookimg-rg">
                    <li class="new-book-name">
                        <span>人性的弱点</span>
                        <span></span>
                        <span>
                            <button @click.stop="bookPosition(bookNumber)">在馆信息</button>
                            <i v-show="bookNumberDiv"><img src="../../../static/direction-img.png" alt=""></i>
                            <ul class="book-lib-message" v-show="bookNumberDiv">
                                <li>
                                    <span>一楼藏书室</span>
                                    <span><font color="ff0000">1</font>本</span>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li>
                        <span><font color="#5db3ff">著者：</font></span>
                        <span><font color="#5db3ff">【美】卡耐基</font></span>
                    </li>
                    <li>
                        <span>出版社：</span>
                        <span>湖南文艺出版社</span>
                    </li>
                    <li>
                        <span>借阅次数：</span>
                        <span>400</span>
                    </li>
                </ul>
            </router-link>
        </div>
        <div class="borrowing-book-data" :key="bookNumber">
            <p>1</p>
            <router-link tag="div" :to="{name:'BookDetail',params:{id:2001}}">
                <div class="book-img"><img src="../../../static/book-img.png" alt=""></div>
                <ul class="bookimg-rg">
                    <li class="new-book-name">
                        <span>人性的弱点</span>
                        <span></span>
                        <span>
                            <button @click.stop="bookPosition(bookNumber)">在馆信息</button>
                            <i v-show="bookNumberDiv"><img src="../../../static/direction-img.png" alt=""></i>
                            <ul class="book-lib-message" v-show="bookNumberDiv">
                                <li>
                                    <span>一楼藏书室</span>
                                    <span><font color="ff0000">1</font>本</span>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li>
                        <span><font color="#5db3ff">著者：</font></span>
                        <span><font color="#5db3ff">【美】卡耐基</font></span>
                    </li>
                    <li>
                        <span>出版社：</span>
                        <span>湖南文艺出版社</span>
                    </li>
                    <li>
                        <span>借阅次数：</span>
                        <span>400</span>
                    </li>
                </ul>
            </router-link>
        </div>
        <div class="borrowing-book-data" :key="bookNumber">
            <p>1</p>
            <router-link tag="div" :to="{name:'BookDetail',params:{id:2001}}">
                <div class="book-img"><img src="../../../static/book-img.png" alt=""></div>
                <ul class="bookimg-rg">
                    <li class="new-book-name">
                        <span>人性的弱点</span>
                        <span></span>
                        <span>
                            <button @click.stop="bookPosition(bookNumber)">在馆信息</button>
                            <i v-show="bookNumberDiv"><img src="../../../static/direction-img.png" alt=""></i>
                            <ul class="book-lib-message" v-show="bookNumberDiv">
                                <li>
                                    <span>一楼藏书室</span>
                                    <span><font color="ff0000">1</font>本</span>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li>
                        <span><font color="#5db3ff">著者：</font></span>
                        <span><font color="#5db3ff">【美】卡耐基</font></span>
                    </li>
                    <li>
                        <span>出版社：</span>
                        <span>湖南文艺出版社</span>
                    </li>
                    <li>
                        <span>借阅次数：</span>
                        <span>400</span>
                    </li>
                </ul>
            </router-link>
        </div>
        <div class="borrowing-book-data" :key="bookNumber">
            <p>1</p>
            <router-link tag="div" :to="{name:'BookDetail',params:{id:2001}}">
                <div class="book-img"><img src="../../../static/book-img.png" alt=""></div>
                <ul class="bookimg-rg">
                    <li class="new-book-name">
                        <span>人性的弱点</span>
                        <span></span>
                        <span>
                            <button @click.stop="bookPosition(bookNumber)">在馆信息</button>
                            <i v-show="bookNumberDiv"><img src="../../../static/direction-img.png" alt=""></i>
                            <ul class="book-lib-message" v-show="bookNumberDiv">
                                <li>
                                    <span>一楼藏书室</span>
                                    <span><font color="ff0000">1</font>本</span>
                                </li>
                            </ul>
                        </span>
                    </li>
                    <li>
                        <span><font color="#5db3ff">著者：</font></span>
                        <span><font color="#5db3ff">【美】卡耐基</font></span>
                    </li>
                    <li>
                        <span>出版社：</span>
                        <span>湖南文艺出版社</span>
                    </li>
                    <li>
                        <span>借阅次数：</span>
                        <span>400</span>
                    </li>
                </ul>
            </router-link>
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
            bookNumber:2001,
            bookNumberDiv:this.bookNumber
        }
    },
    methods:{
        bookPosition(argument){
            // this.bookNumberDiv = argument;
            this.bookNumberDiv = !this.bookNumberDiv;
            console.log();
        }
    }
}
</script>
<style lang="scss">

div.borrow-ranking {
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
div.borrow-ranking {
    background-color: #efefef;
    div.borrowing-book-data {
        background-color: #fff;
        border-bottom: 1px solid #dddddd;
        width: 702px;
        margin: 0 auto 8px;
        overflow: hidden;
        border-radius: 10px;
        display: flex;
        >p {
            width: 108px;
            font-size: 60px;
            color: #fff;
            vertical-align: middle;
            font-style: italic;
            background: url('../../../static/ranking-number-bg.png') no-repeat center;
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        >div {
            width: 702px-108px;
            padding: 23px;
            display: flex;
            align-items: center;
            .book-img {
                border-radius: 4px;
                background-color: rgb(171, 171, 171);
                width: 96px;
                height: 120px;
                overflow: hidden;
                >img {
                    width: 142px;
                    height: 184px;
                }
            }
            .bookimg-rg {
                margin-left: 24px;
                flex-grow: 1;
                height: 120px;
                display: flex;
                flex-direction: column;
                // justify-content: space-around;
                >li {
                    height: 34px;
                    line-height: 34px;
                    font-size: 24px;
                    >span:nth-of-type(1) {
                        color: #333333;
                    }
                    >span:nth-of-type(2) {
                        color: #666666;
                    }
                    >span:nth-of-type(3) {
                        position: relative;
                        float: right;
                        >button {
                            border-width: 1px;
                            border-color: rgb(11, 127, 229);
                            border-style: solid;
                            border-radius: 6px;
                            padding: 0 8px;
                            height: 38px;
                            line-height: 36px;
                            text-align: center;
                            font-size: 24px;
                            color: rgb(11, 127, 229);
                            background-color: transparent;
                        }
                        i {
                            position: absolute;
                            bottom: -3px;
                            width: 13px;
                            height: 13px;
                            left: 50%;
                            margin: -6px;
                            img {
                                width: 13px;
                                height: 13px;
                            }
                        }
                    }
                    img {
                        width: 24px;
                        height: 24px;
                        vertical-align: text-top;
                    }
                }
                >li.new-book-name {
                    height: 55px;
                    >span:nth-of-type(1) {
                        font-size: 32px;
                        color: #333333;
                    }
                }
            }
        }
    }
    div.borrowing-book-data:nth-of-type(3) {
        >p {
            background: url('../../../static/ranking-number-one.png') no-repeat center;
        }
    }
    div.borrowing-book-data:nth-of-type(4) {
        >p {
            background: url('../../../static/ranking-number-two.png') no-repeat center;
        }
    }
    div.borrowing-book-data:nth-of-type(5) {
        >p {
            background: url('../../../static/ranking-number-three.png') no-repeat center;
        }
    }
}
.book-lib-message {
    position: absolute;
    border-radius: 8px;
    right: 0;
    bottom: -73px;
    background-color: #efefef;
    width: 260px;
    z-index: 2;
    overflow: hidden;
    >li {
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #cccccc;
        display: flex;
        justify-content: space-between;
        padding: 0 27px;
    }
}
</style>
