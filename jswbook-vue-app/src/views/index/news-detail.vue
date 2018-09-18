<template>
    <div class="news-detail">
        <headerpage style="margin-bottom: 55px;" :title_page='title' :backBtn='backBtn=2' ></headerpage>
        <section class="clearfix">
            <h4>广大读者：</h4>
            <p>{{content}}</p>
            <ul>
                <li>图书馆</li>
                <li>{{date}}</li>
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
            title:'',
            date:'',
            content:''
        }
    },
    created(){
        this.title=this.$route.params.title;
        this.date=this.$route.params.date;
        this.content=this.$route.params.content;
       
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
