<template>
    <div class="my-miss-buy">
        <headerpage style="margin-bottom: 16px;" :title_page='title_page="我的荐购"' :backBtn='backBtn=true' :rgUrl="rgUrl" v-on:headerRg="headerRgClick"></headerpage>
        <div>
            <ul class="borrowing-book" v-for="item in inForce" :key="item.id">
                <li class="clearfix">
                    <span>题名：</span>
                    <span>{{item.title}}</span>
                </li>
                <li>
                    <span>著者：</span>
                    <span>{{item.author}}</span>
                </li>
                <li>
                    <span>出版：</span>
                    <span>{{item.source}}</span>
                </li>
                <li>
                    <span>ISBN：</span>
                    <span>{{item.barCode}}</span>
                    
                </li>
                <li>
                    <span>分类号：</span>
                    <span>{{item.categoryNumber}}</span>
                </li>
                <li>
                    <span>价格：</span>
                    <span>{{item.bookPrice}}元</span>
                    <span>{{item.missBuyData}}</span>
                </li>
            </ul>
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
            inForce:'',
            rgUrl:require('../../../static/header-rg-add.png')
        }
    },
    created(){
        // this.serveList();
        this.myAjax.testGet('my.json'
        ,(data)=>{
                this.inForce = data.data;
        }
        ,()=>{});
    },
    mounted(){
        
    },
    methods:{
        headerRgClick(){
            let bookMissText = `1. 持有本馆有效读者证的读者均可参加图书订购推荐服务；

                2. 请完善个人信息并留下真实有效的联系信息，便
于工作人员向您反馈所推荐图书的相关情况；

                3. 所荐购图书必须是本馆未收藏的出版物。`;
                // this.$messagebox('提示', '操作成功');
            this.$messagebox({
                message:bookMissText, 
                title:'图书荐购须知',
                confirmButtonText:'知道了'
                }).then(()=>{
                    this.$router.push('/my-miss-buy');
                });
        }
    }
}
</script>
<style lang="scss">


</style>
