
<template>
    <div class="evaluation">
        <headerpage :title_page='title_page="发表评论"' :backBtn='backBtn=2'></headerpage>
        <form>
            <div class="evaluation-form">
                <p>推荐指数</p>
                <div class="star">
                    <img :src="item" alt="" v-for="(item,index) in starImg" :key="index" @click="starChange(index)">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{{starValue||0}}分</span>
                    <!-- <img src="../../../static/star-active.png" alt="">
                    <img src="../../../static/star-active.png" alt="">
                    <img src="../../../static/star.png" alt="">
                    <img src="../../../static/star.png" alt="">
                    <img src="../../../static/star.png" alt=""> -->
                </div>
                <div class="evaluation-text">
                    <textarea v-model="evaluationValue" class="active" placeholder="读了这本书，你有哪些感想？收获了什么？快推荐给小伙伴吧~"></textarea>
                </div>
            </div>
            <div><button type="button" @click="starSubmit" :class="{active:submitTrue}">发 布</button></div>
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
            starValue:null,
            starImg:[
                require('../../../static/star.png'),
                require('../../../static/star.png'),
                require('../../../static/star.png'),
                require('../../../static/star.png'),
                require('../../../static/star.png')
            ],
            starImgIcon:require('../../../static/star.png'),
            starImgActive:require('../../../static/star-active.png'),
            evaluationValue:null
        }
    },
    created(){

    },
    mounted(){
        console.log(this.$route.params);
    },
    methods:{
        starChange(index){
            this.starValue = index+1;
            this.starImg = [];
            for(let i=0; i<index+1;i++){
                this.starImg.push(this.starImgActive);
            }
            for(let j=0; j<4-index;j++){
                this.starImg.push(this.starImgIcon);
            }
        },
        starSubmit(){
            if(!this.starValue) return this.$toast('请选择星级');
            this.$toast('评论成功，5秒后返回上级页面...');
            setTimeout(()=>{
                this.$router.go(-1);
            },2000);
        }

    },
    computed:{
        submitTrue(){
            return this.starValue
        }
    }

}       
</script>
<style lang="scss">
    div.evaluation {
        .evaluation-form {
            border-radius: 10px;
            background-color: rgb(255, 255, 255);
            width: 702px;
            height: 1074px;
            margin: 16px auto;
            box-sizing: border-box;
            padding: 0 32px 82px 32px;
            p {
                height: 96px;
                line-height: 96px;
                font-size: 30px;
                color: #333333;
                border-bottom: 1px solid #dddddd;
            }
            .star {
                height: 128px;
                line-height: 128px;
                text-align: center;
                color: #999;
                >img {
                    width: 60px;
                    vertical-align: sub;
                }
            }
            .evaluation-text {
                text-align: center;
                >textarea {
                    border-width: 1px;
                    border-color: rgb(221, 221, 221);
                    border-style: solid;
                    background-color: rgb(255, 251, 250);
                    width: 636px;
                    height: 765px;
                    font-size: 26px;
                    color: #999999;
                    padding: 20px;
                    box-sizing: border-box;
                }
                >textarea.active {
                    color: #333333;
                }
            }
            
        }
        button {
            width: 750px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            font-size: 36px;
            color: #fff;
            background-color: #999999;
        }
        button.active {
            background-color: rgb(65, 176, 250);
        }

    }
</style>
