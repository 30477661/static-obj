<template>
    <div class="self-data">
        <headerpage :title_page='title_page="高级检索"' :backBtn='backBtn=1'></headerpage>
        <div class="base-information">查找途径</div>
        <form>
        <ul>
            <li class="many-show-text">
                <label for="bookName">正题名：</label>
                <input type="text" ref="inputOne" id="bookName" required>
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">著者</label>
                <input type="text" required>
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">出版社</label>
                <input type="text">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">主题词：</label>
                <input type="text">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">ISBN/ISSN：</label>
                <input type="text">
                <div class="line"></div>
            </li>
        </ul>
        <div class="base-information">显示</div>
        <ul>
            <li class="many-show-text" style="justify-content: space-between;">
                <label for="">只显示在馆记录</label>
                <mt-switch v-model="libSwitch"></mt-switch>
            </li>
        </ul>
        <div class="high-btn-div"><button class="one-row-btn">检索</button></div>
        </form>
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
            libSwitch:true
        }
    },
    mounted(){
        this.$refs['inputOne'].focus();
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
    .high-btn-div {
        text-align: center;
        margin-top: 32px;
        
        .one-row-btn {
            width: 702px;
        }
    }
    .mint-switch-input:checked+.mint-switch-core:after,
    .mint-switch-core:before,
    .mint-switch-core:after {
        content: ""!important;
    }
</style>
