<template>
    <div class="my-borrowing">
        <headerpage :title_page='title_page="我的借阅"' :backBtn='backBtn=true'></headerpage>
        <div class="base-information">共 <font color="#ff0101">3</font> 本</div>
        <ul class="borrowing-book">
            <li class="clearfix">
                <span>题名：</span>
                <span>人性的弱点</span>
                <span>
                    <button @click="borrowBtn">续借</button>
                </span>
            </li>
            <li>
                <span>条码：</span>
                <span>00000001</span>
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
                <span>馆藏地：</span>
                <span>书库1</span>
            </li>
            <li>
                <span>借书日期：</span>
                <span>2018-06-21</span>
            </li>
            <li>
                <span>应还日期：</span>
                <span>22018-07-20</span>
                <span>剩余 <font color="#ff0000">2</font> 天</span>
            </li>
        </ul>
        <ul class="borrowing-book">
            <li class="clearfix">
                <span>题名：</span>
                <span>人性的弱点</span>
                <span>
                    <button @click="borrowBtn">续借</button>
                </span>
            </li>
            <li>
                <span>条码：</span>
                <span>00000001</span>
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
                <span>馆藏地：</span>
                <span>书库1</span>
            </li>
            <li>
                <span>借书日期：</span>
                <span>2018-06-21</span>
            </li>
            <li>
                <span>应还日期：</span>
                <span>22018-07-20</span>
                <span>剩余 <font color="#ff0000">2</font> 天</span>
            </li>
        </ul>
        <ul class="borrowing-book">
            <li class="clearfix">
                <span>题名：</span>
                <span>人性的弱点</span>
                <span>
                    <button @click="borrowBtn">续借</button>
                </span>
            </li>
            <li>
                <span>条码：</span>
                <span>00000001</span>
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
                <span>馆藏地：</span>
                <span>书库1</span>
            </li>
            <li>
                <span>借书日期：</span>
                <span>2018-06-21</span>
            </li>
            <li>
                <span>应还日期：</span>
                <span>22018-07-20</span>
                <span>剩余 <font color="#ff0000">2</font> 天</span>
            </li>
        </ul>
    </div>
</template>
<script>
import headerpage from '../../components/header'
// import { Toast } from 'mint-ui'
export default {
    components:{
        headerpage
    },
    created(){
        

    },
    mounted(){
        
    },
    methods:{
        borrowBtn(){
            this.$toast('存在超期未还书籍，不能续借！');
            // this.axios.get('static/model-data/my.json')
            // .then((response)=>{
            //     console.log(response.data);
            // })
            // .catch((error)=>{
            //     console.log(error,2);
            // })
            this.myAjax.getData('my.json').then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error, 2);
            })
        }
    }
}
</script>
<style lang="scss">

div.my-borrowing {
    height: 100%;
    background-color: #efefef;
    >ul:last-child {
        margin-bottom: 0!important;
    }
    .borrowing-book {
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        width: 702px;
        height: 310px;
        box-sizing: border-box;
        margin: 0 auto 24px;
        padding: 0 20px 0 30px;
        display: flex;
        flex-direction: column;
        // align-items: center;
        justify-content: center;
        >li {
            height: 40px;
            line-height: 40px;
            font-size: 26px;
            >span:nth-of-type(1) {
                color: #333333;
            }
            >span:nth-of-type(2) {
                color: #666666;
            }
            >span:nth-of-type(3) {
                float: right;
                >button {
                    border-width: 1px;
                    border-color: rgb(11, 127, 229);
                    border-style: solid;
                    border-radius: 6px;
                    width: 85px;
                    height: 38px;
                    line-height: 36px;
                    text-align: center;
                    font-size: 24px;
                    color: rgb(11, 127, 229);
                    background-color: transparent;
                }
            }
        }
    }
}
</style>
