<template>
    <div class="new-book">
        <headerpage :title_page='title_page="好书推荐"' :backBtn='backBtn=true'></headerpage>
        <div class="borrowing-book-data" :key="bookNumber">
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
                        <router-link tag="span" :to="{name:'BookDetail',params:{id:10001,tabSwitch:4}}"><img src="../../../static/comment-pen.png" alt=""> <font color="#666666">30</font></router-link>
                    </li>
                </ul>
            </router-link>
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
        

    },
    mounted(){
        
    },
    data(){
        return {
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
