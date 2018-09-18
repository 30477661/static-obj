<template>
    <div class="index">
        <header class="clearfix">首页</header>
        <div class="top-search">
            <img :src="indexNavImg.indexSearch_icon" alt=""><input type="text" @focus="search" placeholder="题名、著者、分类号、出版社、主题词">
        </div>
        <div class="school-logo">
            <div class="school-name"><router-link tag="span" to="/lib-system"><img src="../../../static/school-logo.png" alt=""></router-link></div>
        </div>
        <ul class="self-book-static">
            <router-link to="/my-borrowing" tag="li"><span><img src="../../../static/self-book-static-1.png" alt=""></span><span>在借中</span></router-link>
            <router-link to="/overdue-book" tag="li"><span><img src="../../../static/self-book-static-2.png" alt=""></span><span>超期未还</span></router-link>
            <!-- <router-link to="/" tag="li" ><span><img src="../../../static/self-book-static-3.png" alt=""><i>3</i></span><span>欠款情况</span></router-link> -->
            <li @click="notOpen"><span><img src="../../../static/self-book-static-3.png" alt=""></span><span>欠款情况</span></li>
        </ul>
        <nav>
            <ul style="margin-bottom: 10px;">
                <router-link to="/news-list" tag="li"><img :src="indexNavImg.indexNav_9" alt=""><span>新闻公告</span></router-link>
                <router-link to="/new-book" tag="li"><img :src="indexNavImg.indexNav_1" alt=""><span>新书通报</span></router-link>
                <router-link to="/good-book" tag="li"><img :src="indexNavImg.indexNav_2" alt=""><span>好书推荐</span></router-link>
                <router-link to="/borrow-ranking" tag="li"><img :src="indexNavImg.indexNav_3" alt=""><span>借阅排行</span></router-link>
                
            </ul>
            <ul>
                
                <!-- <router-link to="/" tag="lvi"><img :src="indexNavImg.indexNav_4" alt=""><span>数字资源</span></router-link> -->
                <li @click="notOpen"><img :src="indexNavImg.indexNav_4" alt=""><span>数字资源</span></li>
                <li @click="notOpen"><img :src="indexNavImg.indexNav_5" alt=""><span>阅读活动</span></li>
                <router-link to="/my-miss-buylist" tag="li"><img :src="indexNavImg.indexNav_6" alt=""><span>图书荐购</span></router-link>
                <li @click="notOpen"><img :src="indexNavImg.indexNav_8" alt=""><span>馆长信箱</span></li>
            </ul>
        </nav>
        <div class="bookli-top">
            <ul>
                <li class="active"><span>图书<i></i></span></li>
                <!-- <li><span>期刊<i></i></span></li> -->
            </ul>
        </div>
        <div class="bookli">
            <router-link tag="ul" :to="{name:'BookDetail',params:{lsh:item.lsh,ssh:item.ssh}}" v-for="(item,index) of resultList" :key="index">
                <li>
                    <img src="../../../static/index-bookimg-1.png" alt="">
                    <div>
                        <span>{{item.ztm}}</span>
                        <span>{{item.Dyzrsm}}</span>
                    </div>
                </li>
            </router-link>
            
        </div>
        <footernav :imgActive='imgActive=1'></footernav>
    </div>
    
</template>
<script>
import footernav from '../../components/footer'

export default {
    components:{
        footernav
    },
    data(){
        return{
            isNowPage: true,
            resultList:[],
            indexNavImg:{
                indexSearch_icon:require('../../../static/index-search-icon.png'),
                indexNav_1:require('../../../static/index-nav-1.png'),
                indexNav_2:require('../../../static/index-nav-2.png'),
                indexNav_3:require('../../../static/index-nav-3.png'),
                indexNav_4:require('../../../static/index-nav-4.png'),
                indexNav_5:require('../../../static/index-nav-5.png'),
                indexNav_6:require('../../../static/index-nav-6.png'),
                indexNav_7:require('../../../static/index-nav-7.png'),
                indexNav_8:require('../../../static/index-nav-8.png'),
                indexNav_9:require('../../../static/index-nav-9.png')
            }
        }
    },
    created(){
        this.myAjax.postData('tuijian/new_arrivals',
        (result)=>{
            for(let i=0; i<3; i++){
                this.resultList.push(result.list[i]);
            }
        },()=>{

        },{});
        
    },
    mounted(){
        
    },
    methods:{
        search(){
            this.$router.push('/search');
        },
        notOpen(){
            this.$messagebox.alert('敬请期待','暂未开放');
        }
    }
}
</script>

<style lang="scss">
    div.index{
        padding-bottom: 100px;
        background-color: #fff;
        header {
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 36px;
            background-color: #0b7fe5;
            color: #fefefe;
        }
        .top-search {
            height: 72px+32px;
            line-height: 72px+32px;
            background-color: rgb(239, 239, 239);
            text-align: center;
            position: relative;
            img {
                position: absolute;
                left: 44px;
                top: 37px;
                width: 30px;
            }
            >input {
                border-radius: 10px;
                background-color: rgb(255, 255, 255);
                box-shadow: 0px 4px 6px 0px rgba(207, 207, 207, 0.5);
                width: 702px-60px;
                height: 72px;
                padding-left: 60px;
                font-size: 28px;
            }
        }
        .school-logo {
            width: 100%;
            height: 280px;
            background-image: url(../../../static/school-logobg.jpg);
            background-size: cover;
            display: flex;
            align-items:center;
            justify-content:center;
            .school-name {
                background-color: rgb(255, 255, 255);
                width: 162px;
                height: 162px;
                transform: rotatez(45deg);
                display: flex;
                align-items:center;
                justify-content:center;
                img {
                    width: 124px;
                    transform: rotatez(-45deg);
                }
            }
        }
        .self-book-static {
            display: flex;
            height: 160px;
            // align-items: center;
            // justify-content: center;
            >li {
                flex-grow: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                &:active {
                    background-color: #ddd;
                }
                span {
                    position: relative;
                    i {
                        position: absolute;
                        top: -13px;
                        right: -4px;
                        background-color: rgb(255, 0, 0);
                        width: 26px;
                        height: 26px;
                        line-height: 26px;
                        border-radius: 50%;
                        text-align: center;
                        font-size: 20px;
                        color: #fff;
                        font-style: normal;
                    }
                }
                img {
                    width: 64px;
                }
            }
        }
        nav {
            height: 360px;
            background-color: #efefef;
            display: flex;
            flex-direction: column;
            align-items:center;
            justify-content:center;
            ul {
                display: flex;
                width: 100%;
                >li {
                    flex-grow:1;
                    display: flex;
                    flex-direction: column;
                    align-items:center;
                    img {
                        width: 96px;
                        margin-bottom:12px;
                    }
                    span {
                        font-size: 26px;
                        color: #333333;
                    }
                    &:active {
                        background-color: #ddd;
                    }
                }
            }
        }
        .bookli-top {
            height: 80px;
            line-height: 80px;
            border-bottom: 1px solid #dddddd;
            padding-left:25px;
            background-color: #fff;
            ul {
                display: flex;
                >li {
                    margin: 0 25px;
                    position: relative;
                    font-size: 30px;
                }
                >li.active {
                    color: #0b7fe5;
                    i {
                        width: 40px;
                        position: absolute;
                        left: 50%;
                        margin-left: -20px;
                        bottom: 0;
                        border: 2px solid #0b7fe5;
                    }
                }
            }
        }
        .bookli {
            background-color: #fff;
            ul {
                width: 95%;
                margin: 0 auto;
                >li {
                    position: relative;
                    height: 104px;
                    border-bottom: 1px solid #dddddd;
                    padding: 0 34px 0 24px;
                    display: flex;
                    align-items:center;
                    img {
                        height: 80px;
                        width: 80px;
                        margin-right: 15px;
                    }
                    div {
                        display: flex;
                        flex-direction: column;
                        span:nth-of-type(1) {
                            font-size: 26px;
                            color: #333333;
                        }
                        span:nth-of-type(2) {
                            font-size: 20px;
                            color: #999999;
                        }
                    }
                    button {
                        position: absolute;
                        top: 35px;
                        right: 0;
                    }
                    
                }
            }
        }
    }
    .btn-primary {
        padding: 0;
        border-width: 1px;
        border-color: rgb(11, 127, 229);
        border-style: solid;
        border-radius: 6px;
        width: 72px;
        height: 32px;
        line-height: 32px;
        color: #0b7fe5;
        font-size: 24px;
        text-align: center;
        background-color: transparent;
        &:active {
            background-color: #ddd;
        }
    }
</style>

