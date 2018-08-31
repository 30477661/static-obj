<template>
    <div class="self-data">
        <headerpage :title_page='title_page="修改密码"' :backBtn='backBtn=2'></headerpage>
        <div class="base-information" style="color: #ff0000;"></div>
        <form>
        <ul>
            <li class="many-show-text">
                <label for="bookName">旧密码</label>
                <input type="password" id="bookName" autocomplete="off" required>
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">新密码</label>
                <input type="password" required>
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">确认密码</label>
                <input type="password">
                <div class="line"></div>
            </li>
        </ul>
        <div class="buy-fromBtn-div">
            <button type="submit" class="one-row-btn" @click="missBuySubmit">提交</button>
        </div>
        </form>
    </div>
</template>
<script>
import headerpage from '../../components/header'
export default {
    components:{
        headerpage
    },
    methods:{
        missBuySubmit(){
            
            return false;
        }
    }
}
</script>
<style lang="scss">
    div.self-data {
        height: 100%;
        background-color: #efefef;
    }
    .buy-fromBtn-div {
        display: flex;
        margin-top: 48px;
        justify-content: space-around;
        button {
            border-radius: 8px;
            background-color: rgb(65, 176, 250);
            width: 200px;
            height: 64px;
            line-height: 64px;
            text-align: center;
            font-size: 30px;
            color: #fefefe;
        }
    }
    .buy-fromBtn-div {
        .one-row-btn {
            width: 702px;
        }
    }
</style>
