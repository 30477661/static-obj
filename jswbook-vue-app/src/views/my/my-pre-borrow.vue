<template>
    <div class="my-serve">
        <headerpage :title_page='title_page="我的预借"' :backBtn='backBtn=true'></headerpage>
        <ul class="tab-switch" style="margin-bottom: 24px;">
            <li :class="{active:tabSwitch==1}" @click="serveList();tabSwitch=1"><span>生效中</span><i></i></li>
            <li :class="{active:tabSwitch==2}" @click="cancelServeList();tabSwitch=2"><span>已取消</span><i></i></li>
            <li :class="{active:tabSwitch==3}" @click="InvalidList"><span>已失效</span><i></i></li>
            <li :class="{active:tabSwitch==4}" @click="allList"><span>全部</span><i></i></li>
        </ul>
        <div>
            <ul class="borrowing-book" v-for="item in inForce" :key="item.id">
                <li class="clearfix">
                    <span>题名：</span>
                    <span>{{item.title}}</span>
                    <span>
                        <button @click="cancelServe(item.id)" v-show="item.btnCancelServe">取消</button>
                    </span>
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
                    <span>索书号：</span>
                    <span>{{item.callNumber}}</span>
                    <span><font color="#fe0000">{{item.cancelText}}</font></span>
                </li>
                <li>
                    <span>馆藏地：</span>
                    <span>{{item.bookAddress}}</span>
                    <span>预约时间：{{item.title}}</span>
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
            tabSwitch:1,
            inForce:''
        }
    },
    created(){
        this.myAjax.testGet('my.json'
            ,(data)=>{
                this.inForce = data.data;
            }
            ,()=>{});
    },
    mounted(){
        
    },
    methods:{
        serveList(){
            if(this.tabSwitch==1) return;
            this.myAjax.testGet('my.json'
            ,(data)=>{
                this.inForce = data.data;
            }
            ,()=>{});
        },
        cancelServeList(){
            if(this.tabSwitch==2) return;
            this.myAjax.testGet('my.json'
            ,(data)=>{
                this.inForce = data.data;
            }
            ,()=>{});
        },
        InvalidList(){

        },
        allList(){

        },
        cancelServe(id){
            // let _this = this;
            // this.$messagebox.confirm('确认取消？')
            // .then(result=>{
            //     this.myAjax.setBook('my.json',null,_this,'图书预约已取消');
            //     })
        },
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
