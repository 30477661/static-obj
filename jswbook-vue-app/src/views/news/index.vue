<template>
    <div class="news-index">
        <header class="clearfix">系统消息</header>
        <div class="bookli">
            <router-link to="/message-detail" tag="ul">
                <li>
                    <p>预约取书</p>
                    <i></i>
                    <div>
                        您预约的《人性的弱点》已到馆，请于2018-08-20，您预约的《人性的弱点》已到馆《人性的弱点》已到馆《人性的弱点》已到馆
                    </div>
                    <span>2018/07/20</span>
                </li>
            </router-link>
        </div>

        <footernav :imgActive='imgActive=3'></footernav>
    </div>
    
</template>
<script>
import footernav from '../../components/footer'
// import headerpage from '../../components/header'
export default {
    components:{
        footernav,
        
    }
}
</script>

<style lang="scss">
    div.news-index {
        header {
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 36px;
            background-color: #0b7fe5;
            color: #fefefe;
            margin-bottom: 8px;
        }
        .bookli {
            ul {
                margin: 8px 24px;;
                background-color: #fff;
                padding: 20px 24px;
                border-radius: 8px;
                >li{
                    position: relative;
                    display: flex;
                    align-items:center;
                    p {
                        border-radius: 8px;
                        background-color: rgb(80, 193, 250);
                        width: 80px;
                        height: 80px;
                        margin-right: 15px;
                        font-size: 28px;
                        color: #fefefe;
                        text-align: center;
                    }
                    div {
                        font-size: 30px;
                        color: #333333;
                        white-space: normal;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        width: 400px;
                        height: 80px;
                        margin-right: 50px;
                    }
                    i {
                        border-radius: 50%;
                        background-color: rgb(255, 0, 0);
                        position: absolute;
                        left: 80px;
                        top: -7px;
                        width: 14px;
                        height: 14px;
                    }
                    span {
                        align-self: flex-start;
                        padding-top: 10px;
                        font-size: 20px;
                        color: #999;
                    }
                }
            }
        }
    }
</style>

