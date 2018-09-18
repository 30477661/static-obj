<template>
    <div class="self-data">
        <headerpage :title_page='title_page="个人资料"' :backBtn='backBtn=true'></headerpage>
        <div class="base-information">基本信息</div>
        <ul>
            <li class="many-show-text">
                <span>证件状态</span><span style="color: #ff0000;">有 效</span>
                <div class="line"></div>
            </li>
            <li tag="a" to="" class="many-show-text">
                <span>读者证号</span><span>{{result.jszh}}</span>
                <div class="line"></div>
            </li>
            <router-link tag="a" :to="{name:'ChangePassword',params:{xm:this.result.xm,lxdh:this.result.lxdh}}" class="many-show-text">
                <span>读者姓名</span><span>{{result.xm}}</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <router-link tag="a" :to="{name:'ChangePassword',params:{xm:this.result.xm,lxdh:this.result.lxdh}}" class="many-show-text">
                <span>联系电话</span><span>{{result.lxdh || '暂无'}}</span><img src="../../../static/rg-arrow.png" alt="">
                <div class="line"></div>
            </router-link>
            <li tag="a" to="" class="many-show-text">
                <span>启用日期</span><span>{{result.bzrq}}</span>
                <div class="line"></div>
            </li>
        </ul>
        <div class="base-information">读者权限</div>
        <ul>
            <li tag="a" to="" class="many-show-text">
                <span>允许借阅本数</span><span>{{result.sl}}</span>
                <div class="line"></div>
            </li>
            <li tag="a" to="" class="many-show-text">
                <span>允许借阅天数</span><span>{{result.ts}}</span>
                <div class="line"></div>
            </li>
            <li tag="a" to="" class="many-show-text">
                <span>能否续借</span><span>{{result.sfxj==1?'是':'否'}}</span>
                <div class="line"></div>
            </li>
            <li tag="a" to="" class="many-show-text">
                <span>预约本数</span><span>{{result.yysl}}</span>
                <div class="line"></div>
            </li>
            <li tag="a" to="" class="many-show-text">
                <span>预借本数</span><span>{{result.yzsl}}</span>
                <div class="line"></div>
            </li>
        </ul>
        <router-link tag="a" :to="{name:'ChangePassword',params:{xm:this.result.xm,lxdh:this.result.lxdh}}" class="many-show-text" style="margin: 24px 0;">
            <span>修改密码</span><img src="../../../static/rg-arrow.png" alt="">
        </router-link>
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
            result:''
        }
    },
    methods:{

    },
    created(){
        this.myAjax.postData('wode/personal_data',
        (result)=>{
            this.result = result;
        },()=>{

        },{mm:this.passWord});
    }
}
</script>
<style lang="scss">
    div.self-data {
        height: 100%;
        background-color: #efefef;
    }
</style>
