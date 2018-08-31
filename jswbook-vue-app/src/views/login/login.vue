
<template>
    <div class="login">
        <headerpage :title_page='title_page=""' :backBtn='backBtn=2' ></headerpage>
        <div class="login-con">
            <form>
                <ul>
                    <li>
                        <div><img src="../../../static/login-header.png" alt=""></div>
                    </li>
                    <li>
                        <label for="userName"><img src="../../../static/login-name.png" alt=""></label>
                        <input id="userName" type="text" placeholder="请输入读者证号">
                        </li>
                    <li>
                        <label for="passWord"><img src="../../../static/login-word.png" alt=""></label>
                        <input id="passWord" type="password" placeholder="初始密码默认为读者证后6位">
                    </li>
                    <li>
                        <button @click="submit" type="submit">登 &nbsp;&nbsp; 录</button>
                    </li>
                </ul>
            </form>
        </div>
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
            name:'000039',
            password:'000039'
        }
    },
    methods:{
        submit(){
            let that = this;
            this.myAjax.noTokenPost('login?username='+this.name+'&password='+this.password,
            function(result){
                that.$toast('登录成功');
                localStorage.token = result.token;
                setTimeout(function(){
                    that.$router.push('/');
                },2000)
                
            },function(){

            });
            return false;
        }
    }
}
</script>
<style lang="scss">
    div.login {
        height: 100%;
        width: 100%;
        background: url('../../../static/login-bg.jpg') no-repeat center;
        background-size: cover;
        display: flex;
        flex-direction: column;

        header {
            background-color: transparent;
        }
        >.login-con {
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            form {
                border-radius: 10px;
                background-color: rgb(255, 255, 255);
                width: 580px;
                height: 680px;
            }
        }
        ul {
            >li {
                width: 500px;
                height: 72px;
                line-height: 72px;
                margin: 0 auto;
                position: relative;
                text-align: center;
                label {
                    position: absolute;
                    left: 10px;
                    img {
                        width: 28px;
                    }
                }
                input {
                    width: 100%;
                    height: 70px;
                    border-bottom: 1px solid #ddd;
                    text-indent: 50px;
                    font-size: 26px;
                }
                button {
                    border-radius: 10px;
                    background-color: rgb(65, 176, 250);
                    width: 500px;
                    height: 72px;
                    font-size: 30px;
                    color: #ffffff;
                }
            }
            >li:nth-of-type(1) {
                height: 296px-20px;
                display: flex;
                align-items: center;
                justify-content: center;
                div {
                    border-width: 1px;
                    border-color: rgb(236, 224, 225);
                    border-style: solid;
                    border-radius: 50%;
                    width: 166px;
                    height: 166px;
                    line-height: 166px;
                    text-align: center;
                    padding: 10px;
                    box-sizing: border-box;
                    overflow: hidden;
                    img {
                        width: 141px;
                        height: 141px;
                    }
                }
            }
            >li:nth-of-type(2) {
                margin-bottom: 30px;
            }
            >li:nth-of-type(3) {
                margin-bottom: 72px;
            }
            
        }
    }
</style>

