<template>
    <div class="overdue-book">
        <headerpage :title_page='title_page="超期未还"' :backBtn='backBtn=true'></headerpage>
        <div class="base-information">共 <font color="#ff0101">1</font> 本</div>
        <div class="borrowing-book-data">
            <div>
                <div class="book-img"><img src="../../../static/book-img.png" alt=""></div>
                <ul class="bookimg-rg">
                    <li>
                        <span>题名：</span>
                        <span>人性的弱点</span>
                        <span><button>续借</button></span>
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
                    
                </ul>
            </div>
            <ul class="book-bottom">
                <li>
                    <span>已续借次数：</span>
                    <span>0</span>
                    <span>超期天数：<font color="#ff0000">5</font> 天</span>
                </li>
                <li>
                    <span>应还日期：2018-07-20</span>
                    <span> <font color="#ff0000">已超期</font> </span>
                    <span>
                        超期费用：<font color="#ff0000">3.5</font> 元
                    </span>
                </li>
            </ul>
        </div>
        <div class="borrowing-book-data">
            <div>
                <div class="book-img"><img src="../../../static/book-img.png" alt=""></div>
                <ul class="bookimg-rg">
                    <li>
                        <span>题名：</span>
                        <span>人性的弱点</span>
                        <span><button>续借</button></span>
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
                    
                </ul>
            </div>
            <ul class="book-bottom">
                <li>
                    <span>已续借次数：</span>
                    <span>0</span>
                    <span>超期天数：<font color="#ff0000">5</font> 天</span>
                </li>
                <li>
                    <span>应还日期：2018-07-20</span>
                    <span> <font color="#ff0000">已超期</font> </span>
                    <span>
                        超期费用：<font color="#ff0000">3.5</font> 元
                    </span>
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
    }
}
</script>
<style lang="scss">


</style>
