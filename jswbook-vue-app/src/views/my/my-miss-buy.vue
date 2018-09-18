<template>
    <div class="self-data">
        <headerpage :title_page='title_page="我的荐购"' :backBtn='backBtn=2'></headerpage>
        <div class="base-information" style="color: #ff0000;">请填写您要荐购的文献信息</div>
        <form @submit.prevent="missBuySubmit">
        <ul>
            <li class="many-show-text">
                <label for="bookName"> <font color="#ff0000">*</font> 书名</label>
                <input type="text" id="bookName" v-model="sm" required autocomplete="off">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for=""> <font color="#ff0000">*</font> 著者</label>
                <input type="text" v-model="zz" autocomplete="off" required >
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">出版社</label>
                <input type="text" v-model="cbs">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">出版时间</label>
                <button class="date-component" type="button" @click="openDate">{{pickerVisible | formatDate}}</button>
                <!-- <button></button> -->
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">ISBN</label>
                <input type="text" v-model="isbn">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">分类号</label>
                <input type="text" v-model="flh">
                <div class="line"></div>
            </li>
            <li class="many-show-text">
                <label for="">价格</label>
                <input type="text" v-model="jg">
                <div class="line"></div>
            </li>
        </ul>
        <div class="buy-fromBtn-div">
            <button type="submit">提交</button>
            <button type="reset">重置</button>
        </div>
        </form>
        <mt-datetime-picker
        v-model="pickerVisible"
        ref="picker"
        type="date"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日" :start-date="startDate" :end-date="endDate">
        </mt-datetime-picker>
    </div>
</template>
<script>
import headerpage from '../../components/header'
import { formatDate } from '../../assets/js/date.js';
export default {
    components:{
        headerpage
    },
    data(){
        return {
            pickerVisible:new Date(),
            sm:'',
            zz:'',
            cbs:'',
            cbny:'',
            isbn:'',
            flh:'',
            jg:'',
            value: new Date(),          //定义显示时间
            visible: false,
            startDate: new Date('1990-01-01'),      //设置开始时间
            endDate: new Date('2030-12-31') ,
            dataValue:null
        }
    },
    methods:{
        openDate(){
            this.$refs.picker.open();
        },
        missBuySubmit(){
            let that = this;
            var date = new Date(this.pickerVisible);
            this.cbny = formatDate(date, 'yyyy-MM-dd');
            this.myAjax.postData('jiangou/book_recommend',
            function(result){
                that.$toast("操作成功!3秒后返回上级菜单...");
                setTimeout(()=>{
                    that.$router.go(-1);
                },3000)
            },function(){

            },{
            sm:this.sm,
            zz:this.zz,
            cbs:this.cbs,
            cbny:this.cbny,
            isbn:this.isbn,
            flh:this.flh,
            jg:this.jg
            },that);
            return false;
        }
    },
    filters: {                    //时间转换
        formatDate(time) {
            var date = new Date(time);
            // let cbny = formatDate(date, 'yyyy-MM-dd');
            return formatDate(date, 'yyyy-MM-dd');
        }
    }
    
}
</script>
<style lang="scss">
    div.self-data {
        height: 100%;
        background-color: #efefef;
    }
    .buy-fromBtn-div {
        display: flex;
        margin-top: 48px;
        justify-content: space-around;
        button {
            border-radius: 8px;
            background-color: rgb(65, 176, 250);
            width: 200px;
            height: 64px;
            line-height: 64px;
            text-align: center;
            font-size: 30px;
            color: #fefefe;
        }
    }
</style>
