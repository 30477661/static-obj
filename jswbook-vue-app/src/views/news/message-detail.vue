<template>
    <div class="message-detail">
        <headerpage :title_page='title_page="消息详情"' :backBtn='backBtn=2' ></headerpage>
        <section class="">
            <h4>预约取书</h4>
            <h7>2018/07/29&nbsp;&nbsp;&nbsp;&nbsp;12：00</h7>
            <p>您预约的《人性的弱点》已到馆，请于2018-08-20前携读者证前往图书馆前台取书。</p>
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
div.message-detail {
    background-color: #fff;
    header {
        border-bottom: 1px solid #dddddd;
        margin-bottom: 55px;
    }
    section {
        background-color: #fff;
        padding: 0 20px;
        h4 {
            font-size: 32px;
            color: rgb(51, 51, 51);
        }
        h7 {
            font-size: 20px;
            color: #999999;
            margin: 15px 0 25px;
        }
        p {
            font-size: 28px;
            color: #666666;
            text-indent: 56px;
        }
    }
}

</style>
