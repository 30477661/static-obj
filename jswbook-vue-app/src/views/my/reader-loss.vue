<template>
    <div class="reader-loss">
        <headerpage :title_page='title_page="读者证挂失"' :backBtn='backBtn=true'></headerpage>
        <section>
            <h3>
                挂失提醒
            </h3>
            <ul>
                <li>1. 网上挂失后不能解挂，必须相关证件（身份证、学生证）到馆由工作人员处理；</li>
                <li>2. 挂失后读者证将无法使用；</li>
                <li>3. 建议读者不要在未丢失读者证的情况下尝试此功能！</li>
            </ul>
        </section>
        <div class="top-search" style="background-color:#fff;">
            <input type="password" placeholder="输入密码" v-model="passWord" style="background-color:#e5e5e5; box-shadow:none;">
        </div>
        <div class="buy-fromBtn-div">
            <button type="submit" class="one-row-btn" @click="submit">提交</button>
        </div>
    </div>
</template>
<script>
import headerpage from '../../components/header'
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
            passWord:'',
        }
    },
    methods:{
        submit(){
            let that = this;
            this.myAjax.postData('wode/reporttheloss',
            (result)=>{
                that.$toast(result);
            },()=>{

            },{mm:this.passWord},that);
        }
    }
}
</script>
<style lang="scss">
    .reader-loss {
        background-color: #fff;
        padding-bottom: 100px;
        section {
            padding: 0 24px;
            h3 {
                font-size: 26px;
                color: #ff0000;
                text-align: center;
                margin: 80px 0 40px;
            }
            ul {
                font-size: 26px;
                color: #333333;
                margin-bottom: 50px;
                li {
                    // height: 36px;
                }
            }
        }
    }
</style>
