<template>
    <div>
        <header class="clearfix" :class="{whiteTitle:backBtn===2}"><img v-show='backBtn' @click="backImg" :src="backBtn===2?imgIconSrc_1:imgIconSrc"> {{title_page}}</header>
    </div>    
</template>

<script>
export default {
    props:['backBtn','bgc','title_page'],
    data(){
        return {
            imgIconSrc: require('../../static/header-back-icon.png'),
            imgIconSrc_1: require('../../static/header-back-icon-1.png')
        }
    },
    created(){
        
    },
    mounted(){

    },
    methods:{
        backImg(){
            this.$router.go(-1);
        }
    }
}
</script>
 <style lang='scss'>
    header {
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 36px;
        background-color: #0b7fe5;
        color: #fefefe;
        img {
            float: left;
            margin-left: 34px;
            width: 24px;
            margin-top: 18px;
        }
    }
    header.whiteTitle {
        background-color: #fff;
        color: #333333;
    }
 </style>
 