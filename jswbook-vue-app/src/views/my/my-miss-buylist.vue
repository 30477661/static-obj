<template>
    <div class="my-miss-buy">
        <headerpage style="margin-bottom: 16px;" :title_page='title_page="我的荐购"' :backBtn='backBtn=true' :rgUrl="rgUrl" v-on:headerRg="headerRgClick"></headerpage>
        <div v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
            <ul class="borrowing-book" v-for="item in resultList" :key="item.id">
                <li class="clearfix">
                    <span>题名：</span>
                    <span>{{item.sm}}</span>
                </li>
                <li>
                    <span>著者：</span>
                    <span>{{item.zz}}</span>
                </li>
                <li>
                    <span>出版：</span>
                    <span>{{item.cbs}}</span>
                </li>
                <li>
                    <span>ISBN：</span>
                    <span>{{item.isbn}}</span>
                    
                </li>
                <li>
                    <span>分类号：</span>
                    <span>{{item.flh}}</span>
                </li>
                <li>
                    <span>价格：</span>
                    <span>{{item.jg}}元</span>
                    <span>{{item.createtime}}</span>
                </li>
            </ul>
            <mt-spinner :type="3" v-show="loadingImg"></mt-spinner>
            <div v-show="noneData" class="noDataShow">全部数据已加载</div>
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
            rgUrl:require('../../../static/header-rg-add.png'),
            setShow:null,
            dropNumber:1,
            lastPage:'',    
            loadingImg:null,
            noneData:'',
            loading:null,
            resultList:[],
            totalRow:''
        }
    },
    created(){
        let that = this;
        this.myAjax.postData('jiangou/my_recommend',
        (result)=>{
            that.totalRow = result.totalRow;
            that.lastPage = result.lastPage;
            that.resultList = result.list;
            if(that.lastPage){
                that.noneData = true;
                that.loadingImg = false;
            } else {
                that.noneData = false;
                that.loadingImg = true;
            }
        },()=>{

        },{},that);
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
        },
        loadMore(){
            if(this.lastPage){
                this.noneData = true;
                this.loadingImg = false;
                return;
            } 
            let that = this;
            this.loadingImg = true;
            this.loading = true;
            setTimeout(() => {
            this.myAjax.postData('jiangou/my_recommend',
            function(result){
                result.list.forEach(element => {
                    that.resultList.push(element);
                });
                that.lastPage = result.lastPage;
                that.loading = false;
            },function(){

            },{pageIndex:++this.dropNumber},that);
            },500);
        }
    }
}
</script>
<style lang="scss">


</style>
