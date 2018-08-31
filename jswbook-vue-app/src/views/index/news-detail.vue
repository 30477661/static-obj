<template>
    <div class="news-detail">
        <headerpage style="margin-bottom: 55px;" :title_page='title_page="端午节闭馆通知"' :backBtn='backBtn=2' ></headerpage>
        <section class="clearfix">
            <h4>广大读者：</h4>
            <p>根据我校2018年端午节放假安排，图书馆开馆时间调整如下：2018年6月16日（星期六）至6月18日（星期一）放假闭馆，共3天。2018年6月19日（下周二）恢复正常开馆，请相互转告。</p>
            <p>如给您带来不便，敬请谅解！谢谢配合！</p>
            <ul>
                <li>图书馆</li>
                <li>2018年06月15日</li>
            </ul>
            
        </section>
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
            
        }
    },
    created(){
        // this.serveList();
       
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>
<style lang="scss">
div.news-detail {
    background-color: #fff;
    header {
        border-bottom: 1px solid #dddddd;
    }
    section {
        padding: 0 22px;
        font-size: 28px;
        color: #666666;
        p {
            margin-top: 30px;
            text-indent: 50px;
        }
        ul {
            margin-top: 120px;
            float: right;
            color: #333333;
            li {
                text-align: center;
            }
        }
    }
}

</style>
