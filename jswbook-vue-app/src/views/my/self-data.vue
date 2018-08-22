<template>
    <div class="self-data">
        <headerpage :title_page='title_page="个人资料"' :backBtn='backBtn=true'></headerpage>
        <div class="base-information">基本信息</div>
        <ul>
            <li class="many-show-text">
                <span>证件状态</span><span style="color: #ff0000;">有 效</span>
                <div class="line"></div>
            </li>
            <li tag="a" to="" class="many-show-text">
                <span>读者证号</span><span>000001</span>
                <div class="line"></div>
            </li>
            <router-link tag="a" to="" class="many-show-text">
                <span>读者姓名</span><span>黄晓明</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <router-link tag="a" to="" class="many-show-text">
                <span>联系电话</span><span>13888888888</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <li tag="a" to="" class="many-show-text">
                <span>启用日期</span><span>2017-09-01</span>
                <div class="line"></div>
            </li>
        </ul>
        <div class="base-information">读者权限</div>
        <ul>
            <li tag="a" to="" class="many-show-text">
                <span>允许借阅本数</span><span>5</span>
                <div class="line"></div>
            </li>
            <li tag="a" to="" class="many-show-text">
                <span>允许借阅天数</span><span>30</span>
                <div class="line"></div>
            </li>
            <li tag="a" to="" class="many-show-text">
                <span>能否续借</span><span>是</span>
                <div class="line"></div>
            </li>
            <li tag="a" to="" class="many-show-text">
                <span>预约本数</span><span>1</span>
                <div class="line"></div>
            </li>
            <li tag="a" to="" class="many-show-text">
                <span>预借本数</span><span>1</span>
                <div class="line"></div>
            </li>
        </ul>
        <router-link tag="a" to="" class="many-show-text" style="margin: 24px 0;">
            <span>修改密码</span><img src="../../../static/rg-arrow.png" alt="">
        </router-link>
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
    div.self-data {
        height: 100%;
        background-color: #efefef;
    }
</style>
