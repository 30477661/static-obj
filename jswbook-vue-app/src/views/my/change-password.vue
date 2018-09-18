<template>
    <div class="self-data">
        <headerpage :title_page='title_page="修改密码"' :backBtn='backBtn=2'></headerpage>
        <div class="base-information" style="color: #ff0000;"></div>
        <form @submit.prevent="submit">
        <ul>
            <li class="many-show-text">
                <label for="">姓名</label>
                <input type="text" v-model="$route.params.xm">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">联系电话</label>
                <input type="text" placeholder="无" v-model="$route.params.lxdh">
                <div class="line"></div>
            </li>
            <li class="base-information">密码</li>
            <li class="many-show-text">
                <label for="bookName">旧密码</label>
                <input type="password" v-model="oldPwd" id="bookName" autocomplete="off">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">新密码</label>
                <input type="password" v-model="newPwd">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">确认密码</label>
                <input type="password" v-model="newPwdTwo">
                <div class="line"></div>
            </li>
        </ul>
        <div class="buy-fromBtn-div">
            <button type="submit" class="one-row-btn">提交</button>
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
    data(){
        return {
            userName:'',
            phoneCall:'',
            oldPwd:'',
            newPwd:'',
            newPwdTwo:''
        }
    },
    methods:{
        submit(){
            if(this.oldPwd){
                if(this.newPwd!=this.newPwdTwo||!this.newPwd){
                    this.$toast(`新密码不能为空或两次输入密码不一致`);
                    return;
                }
            }
            this.myAjax.postData('wode/change_date',
            (result)=>{
               this.$toast(result);
            },()=>{

            },{mm:this.oldPwd,xxm:this.$route.params.xm,xmm:this.newPwd,xlxfs:this.$route.params.lxdh});

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
