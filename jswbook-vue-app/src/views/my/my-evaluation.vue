
<template>
    <div class="evaluation">
        <headerpage :title_page='title_page="我的评价"' :backBtn='backBtn=2'></headerpage>
        <form>
            <div class="evaluation-form">
                <p>推荐指数 <img :src="item" alt="" v-for="(item,index) in starImg" :key="index"></p>
                <p style="border: none;">我的评价 </p>
                <div class="evaluation-text">
                    <textarea disabled="disabled" v-model="evaluationValue"></textarea>
                </div>
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
            starValue:null,
            straNumber:3,
            starImg:[
                require('../../../static/star.png'),
                require('../../../static/star.png'),
                require('../../../static/star.png'),
                require('../../../static/star.png'),
                require('../../../static/star.png')
            ],
            starImgIcon:require('../../../static/star.png'),
            starImgActive:require('../../../static/star-active.png'),
            evaluationValue:'这本书再次燃起了我对生活的激情，大家都笑对困难吧！值得一看哟。'
        }
    },
    created(){
            this.starImg = [];
            for(let i=0; i<this.straNumber;i++){
                this.starImg.push(this.starImgActive);
            }
    },
    mounted(){
        console.log(this.$route.params);
    },
    methods:{

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
                >img {
                    width: 40px;
                    vertical-align: sub;
                }
            }
            .star {
                height: 128px;
                line-height: 128px;
                text-align: center;
                color: #999;
                
            }
            .evaluation-text {
                text-align: center;
                >textarea {
                    background-color: #fff;
                    width: 636px;
                    height: 765px;
                    font-size: 26px;
                    // color: #999999;
                    padding: 20px;
                    box-sizing: border-box;
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
