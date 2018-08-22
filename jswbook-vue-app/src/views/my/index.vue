<template>
    <div class="my-center">
        <headerpage :title_page='title_page="个人中心"' :backBtn='backBtn=0'></headerpage>
        <div class="avater">
            <div class="avater-min">
                <div>
                    <img src="../../../static/oneself-header.png" alt="">
                </div>
                <div>
                    <p>姓名</p>
                    <p>借书证号</p>
                </div>
            </div>
            <router-link tag="a" to="/self-data" class="avater-btn"><button><img src="../../../static/pencil.png" alt=""> 个人资料</button></router-link>
        </div>
        <div class="book-nav">
            <router-link tag="a" to="/my-borrowing"><img src="../../../static/book-nav-icon1.png" alt=""><span>我的借阅</span></router-link>
            <router-link tag="a" to="/overdue-book"><img src="../../../static/book-nav-icon2.png" alt=""><span>超期未还</span></router-link>
            <router-link tag="a" to="/borrow-book-list"><img src="../../../static/book-nav-icon3.png" alt=""><span>借阅清单</span></router-link>
        </div>
        <router-link tag="a" to="/my-serve" class="one-nav" style="margin: 16px 0;">
            <img src="../../../static/mycenter-icon-1.png" alt=""><span>我的预约</span><img src="../../../static/rg-arrow.png" alt="">
        </router-link>
        <ul style="margin: 16px 0 24px 0;">
            <router-link tag="a" to="" class="many-nav">
                <img src="../../../static/mycenter-icon-2.png" alt=""><span>我的预借</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <router-link tag="a" to="" class="many-nav">
                <img src="../../../static/mycenter-icon-3.png" alt=""><span>我的收藏</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <router-link tag="a" to="" class="many-nav">
                <img src="../../../static/mycenter-icon-4.png" alt=""><span>读书笔记</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <router-link tag="a" to="" class="many-nav">
                <img src="../../../static/mycenter-icon-5.png" alt=""><span>缴费相关</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <router-link tag="a" to="" class="many-nav">
                <img src="../../../static/mycenter-icon-6.png" alt=""><span>读者证挂失</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <router-link tag="a" to="" class="many-nav">
                <img src="../../../static/mycenter-icon-7.png" alt=""><span>我的荐购</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <router-link tag="a" to="" class="many-nav">
                <img src="../../../static/mycenter-icon-8.png" alt=""><span>我的资源</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <router-link tag="a" to="" class="many-nav">
                <img src="../../../static/mycenter-icon-9.png" alt=""><span>我的留言</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <router-link tag="a" to="" class="many-nav">
                <img src="../../../static/mycenter-icon-10.png" alt=""><span>帮助</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
        </ul>
        <div class="exit" style="margin: 24px 0;">退出登录</div>
        <footernav :imgActive='imgActive=5'></footernav>
    </div>
</template>

<script>
import headerpage from '../../components/header'
import footernav from '../../components/footer'
export default {
    components:{
        headerpage,
        footernav
    },
    data(){
        return {
            
        }
    }
}
</script>

<style lang='scss'>
    div.my-center {
        padding-bottom: 100px;
        background-color: #efefef;
        .avater {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 164px;
            padding: 0 44px 0 22px;
        }
        .avater-min {
            display: flex;
            align-items: center;
            >div:nth-of-type(1) {
                height: 100px;
                width: 100px;
                border-radius: 50%;
                img {
                    height: 100px;
                    width: 100px;
                }
            }
            >div:nth-of-type(2) {
                margin-left: 15px;
                p:nth-of-type(1) {
                    font-size: 32px;
                    color: #333333;
                }
                p:nth-of-type(2) {
                    font-size: 24px;
                    color: #666;
                }
            }
        }
        .avater-btn {
            button {
                background-color: rgb(204, 204, 204);
                width: 150px;
                height: 40px;
                line-height: 40px;
                border-radius: 20px;
                text-align: center;
                font-size: 24px;
                color: #333333;
                img {
                    width: 18px;
                }
            }
        }
        .book-nav {
            height: 140px;
            background-color: #fff;
            display: flex;
            justify-content: space-around;
            a {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content:center;
                font-size: 24px;
                color:#333333;
                >img {
                    width: 44px;
                }
                >span {
                    margin-top: 15px;
                }
            }
        }
        .exit {
            height: 88px;
            line-height: 88px;
            font-size: 33px;
            color: #ff0000;
            background-color: #fff;
            text-align: center;
            cursor: pointer;
        }
    }
</style>

