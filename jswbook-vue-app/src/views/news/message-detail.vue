<template>
    <div class="message-detail">
        <headerpage :title_page='title_page="消息详情"' :backBtn='backBtn=2' ></headerpage>
        <section class="">
            <h4>{{title}}</h4>
            <h6>{{date}}&nbsp;&nbsp;&nbsp;&nbsp;</h6>
            <p>{{content}}</p>
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
            title:'',
            date:'',
            content:''
        }
    },
    created(){
        this.title=this.$route.params.title;
        this.date=this.$route.params.date;
        this.content=this.$route.params.content;
        this.myAjax.postData('wode/xtxx_read',
        (result)=>{
        
        },()=>{

        },{lsh:this.$route.params.lsh});
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
        h6 {
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
