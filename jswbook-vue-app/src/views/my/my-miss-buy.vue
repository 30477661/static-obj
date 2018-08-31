<template>
    <div class="self-data">
        <headerpage :title_page='title_page="我的荐购"' :backBtn='backBtn=2'></headerpage>
        <div class="base-information" style="color: #ff0000;">请填写您要荐购的文献信息</div>
        <form>
        <ul>
            <li class="many-show-text">
                <label for="bookName"> <font color="#ff0000">*</font> 书名</label>
                <input type="text" id="bookName" required>
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for=""> <font color="#ff0000">*</font> 著者</label>
                <input type="text" required>
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">出版社</label>
                <input type="text">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">出版时间</label>
                <input type="text">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">ISBN</label>
                <input type="text">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">分类号</label>
                <input type="text">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">价格</label>
                <input type="text">
                <div class="line"></div>
            </li>
        </ul>
        <div class="buy-fromBtn-div">
            <button type="submit" @click="missBuySubmit">提交</button>
            <button type="reset">重置</button>
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
</style>
