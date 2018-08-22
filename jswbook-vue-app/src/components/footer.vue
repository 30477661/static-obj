<template>
    <div class="footer fixed">
        <ul>
            <li><router-link to="/"><img ref="imgIcon" :src="imgActive==1?navImgUrl_active1:navImgUrl_1" alt=""><span>首页</span></router-link></li>
            <li><router-link to='/search'><img :src="imgActive==2?navImgUrl_active2:navImgUrl_2" alt=""><span>搜索</span></router-link></li>
            <li><router-link to='/Message'><img :src="imgActive==3?navImgUrl_active3:navImgUrl_3" alt=""><span>消息</span></router-link></li>
            <li><router-link to='/Note'><img :src="imgActive==4?navImgUrl_active4:navImgUrl_4" alt=""><span>笔记</span></router-link></li>
            <li><router-link to='/my'><img :src="imgActive==5?navImgUrl_active5:navImgUrl_5" alt=""><span>我的</span></router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['imgActive'],
    data(){
        return{
            navImgUrl_1:require('../../static/footer-nav-1.png'),
            navImgUrl_active1:require('../../static/footer-nav-active1.png'),
            navImgUrl_2:require('../../static/footer-nav-2.png'),
            navImgUrl_active2:require('../../static/footer-nav-active2.png'),
            navImgUrl_3:require('../../static/footer-nav-3.png'),
            navImgUrl_active3:require('../../static/footer-nav-active3.png'),
            navImgUrl_4:require('../../static/footer-nav-4.png'),
            navImgUrl_active4:require('../../static/footer-nav-active4.png'),
            navImgUrl_5:require('../../static/footer-nav-5.png'),
            navImgUrl_active5:require('../../static/footer-nav-active5.png'),
        }
    },
    created(){
        
    },
    methods:{
        imgUrlChange(){
            console.log(this.$refs.imgIcon.src);
            // this.$set(this,'navImgUrl_1',this.navImgUrl_active1);
            this.navImgUrl_1 = require('../../static/footer-nav-active1.png');
            
            // this.$refs.imgIcon.src = '../../static/footer-nav-active1.png';
            // this.$forceUpdate();
            // console.log(this.a.navImgUrl_1);
            console.log(this.$refs.imgIcon.src);
        }
    },
    computed:{
        
    }
}
</script>


<style lang="scss" scoped>
.footer {
    width: 100%;
    bottom: 0;
    background-color: #fff;
  ul {
    height: 100px;
    font-size: 20px;
    border-top: 1px solid #dddddd;
    display: flex;
    >li {
        flex-grow:1;
        a{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column; 
            align-items:center;
            justify-content:center;
            text-decoration: none;
            img {
                width: 45px;
            }
            span {
                margin-top: 4px;
                color: #666666;
            }
        }
        a.router-link-exact-active {
            text-decoration: none;
            span {
                color: #0b7fe5;
            }
        }
        
    }
  }
}
</style>
