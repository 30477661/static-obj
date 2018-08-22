<template>
    <div class="my-serve">
        <headerpage :title_page='title_page="我的预约"' :backBtn='backBtn=true'></headerpage>
        <ul class="tab-switch" style="margin-bottom: 24px;">
            <li :class="{active:tabSwitch==1}" @click="tabSwitch=1"><span>生效中</span><i></i></li>
            <li :class="{active:tabSwitch==2}" @click="tabSwitch=2"><span>已取消</span><i></i></li>
            <li :class="{active:tabSwitch==3}" @click="tabSwitch=3"><span>已失效</span><i></i></li>
            <li :class="{active:tabSwitch==4}" @click="tabSwitch=4"><span>全部</span><i></i></li>
        </ul>
        <div v-show="tabSwitch==1">
            <ul class="borrowing-book">
                <li class="clearfix">
                    <span>题名：</span>
                    <span>人性的弱点</span>
                    <span>
                        <button @click="cancelServe">取消</button>
                    </span>
                </li>
                <li>
                    <span>著者：</span>
                    <span>【美】卡耐基 著</span>
                </li>
                <li>
                    <span>出版：</span>
                    <span>中国妇女出版社   2016.01</span>
                </li>
                <li>
                    <span>索书号：</span>
                    <span>H56.2</span>
                </li>
                <li>
                    <span>馆藏地：</span>
                    <span>书库1</span>
                    <span>预约日期：2018-08-17</span>
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
            tabSwitch:1
        }
    },
    created(){
        

    },
    mounted(){
        
    },
    methods:{
        cancelServe(){
            this.$messagebox.confirm('确认取消？')
            .then(result=>{
                console.log('取消');
                this.$toast('已取消');
                })
            .catch(error=>{console.log(2)})
        }
    }
}
</script>
<style lang="scss">
div.my-serve {
    .tab-switch {
        height: 80px;
        background-color: #ffffff;
        display: flex;
        >li {
            flex-grow: 1;
            font-size: 28px;
            color: #333333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        >li.active {
            color: #0b7fe5;
            >i {
                width: 40px;
                height: 4px;
                background-color: #0b7fe5;
                // align-self: flex-end;
            }
        }
    }
    >div {
        ul.borrowing-book {
            height: 229px;
        }
    }
}

</style>
