<template>
    <div class="help">
        <headerpage :title_page='title_page="使用帮助"' :backBtn='backBtn=2'></headerpage>
        <div class="base-information">常见问题解答</div>
        <ul>
            <router-link tag="li" to="/help-description" class="many-show-text">
                <span>读者证丢失怎么办？</span>
                <div class="line"></div>
            </router-link>
            <router-link tag="li" to="/help-description" class="many-show-text">
                <span>如何续借？</span>
                <div class="line"></div>
            </router-link>
            <router-link tag="li" to="/help-description" class="many-show-text">
                <span>借阅的书已超过还书日期怎么处</span>
                <div class="line"></div>
            </router-link>
            <router-link tag="li" to="/help-description" class="many-show-text">
                <span>怎么取消已做预约</span>
                <div class="line"></div>
            </router-link>
            <router-link tag="li" to="/help-description" class="many-show-text">
                <span>罚款费用怎么缴？</span>
                <div class="line"></div>
            </router-link>
        </ul>
        <footer>
            <router-link tag="button" to="/">没有我要问的问题，去留言</router-link>
        </footer>
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
    div.help {
        height: 100%;
        background-color: #efefef;
        padding-bottom: 100px;
        box-sizing: border-box;
        position: relative;
        .many-show-text>span:first-of-type {
            width: auto;
        }
        footer {
            display: flex;
            // align-items: center;
            justify-content: center;
            background-color: #fff;
            padding-right: 40px;
            height: 100px;
            flex-direction: column;
            button {
                border-radius: 10px;
                background-color: rgb(11, 127, 229);
                width: 400px;
                height: 56px;
                line-height: 56px;
                text-align: center;
                align-content: flex-end;
                align-self: flex-end;
                // float: right;
                font-size: 26px;
                color: #fff;
            }
        }
    }
</style>
