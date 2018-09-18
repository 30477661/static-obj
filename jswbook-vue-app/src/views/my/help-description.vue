<template>
    <div class="help-description">
        <headerpage :title_page='title_page="使用帮助"' :backBtn='backBtn=2'></headerpage>
        <ul>
            <li class="many-show-text">
                <span>1.读者证丢失怎么办？</span>
                <div class="line"></div>
            </li>
            <li class="many-show-content">
                <span style="color: #666;">读者证若确定丢失，可即时在登录APP进入“我的-读者证挂失”进行挂失。</span>
            </li>
        </ul>
        <ul>
            <li class="many-show-text">
                <span>2.如何续借？</span>
                <div class="line"></div>
            </li>
            <li class="many-show-content">
                <span style="color: #666;">读者证若确定丢失，可即时在登录APP进入“我的-读者证挂失”进行挂失。</span>
            </li>
        </ul>
        <ul>
            <li class="many-show-text">
                <span>3.读者证丢失怎么办？</span>
                <div class="line"></div>
            </li>
            <li class="many-show-content">
                <span style="color: #666;">读者证若确定丢失，可即时在登录APP进入“我的-读者证挂失”进行挂失。</span>
            </li>
        </ul>
        
    </div>
</template>
<script>
import headerpage from '../../components/header'
export default {
    components:{
        headerpage
    }
}
</script>
<style lang="scss">
    div.help-description {
        header {
            border: 1px solid #dddddd;
        }
        height: 100%;
        background-color: #efefef;
        padding-bottom: 100px;
        box-sizing: border-box;
        position: relative;
        .many-show-content {
            background-color: #fff;
            height: auto;
            padding:30px 37px 30px 23+56px;
        }
        .many-show-text>span:first-of-type {
            width: auto;
        }
        
    }
</style>
