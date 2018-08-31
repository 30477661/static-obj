<template>
    <div class="search-index">
        <header class="clearfix">搜索</header>
        <div class="top-search">
            <img src="../../../static/index-search-icon.png" alt=""><input type="text" placeholder="题名、著者、分类号、出版社、主题词">
        </div>
        <div class="search-btn-div" style="border: none;margin-bottom: 20px;"><router-link tag="button" to="/search-result" class="one-row-btn">检索</router-link></div>
        <div class="search-btn-div">
            <router-link to="/highlevel-search" tag="button" class="one-row-btn">高级检索</router-link>
        </div>
        <div class="near-search"><span>最近搜索</span><span><img src="../../../static/rubbish-icon.png" alt=""></span></div>
        <ul class="near-keyword">
            <li>图书名</li>
            <li>图书</li>
            <li>图书名称称称</li>
            <li>图书名</li>
            <li>图书名称称称称称</li>
            <li>图书名称</li>
            <li>图书名称</li>
            <li>图书名称</li>
            <li>图书名称</li>
        </ul>
        <div class="near-search"><span>热门搜索</span></div>
        <ul class="near-keyword">
            <li>图书名</li>
            <li>图书</li>
            <li>图书名称称称</li>
            <li>图书名</li>
            <li>图书名称称称称称</li>
            <li>图书名称</li>
            <li>图书名称</li>
            <li>图书名称</li>
            <li>图书名称</li>
        </ul>

        <footernav :imgActive='imgActive=2'></footernav>
    </div>
    
</template>
<script>
import footernav from '../../components/footer'
// import headerpage from '../../components/header'
export default {
    components:{
        footernav,
        
    }
}
</script>

<style lang="scss">
    div.search-index {
        font-size: 26px;
        header {
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 36px;
            background-color: #0b7fe5;
            color: #fefefe;
        }
        .search-btn-div {
            text-align: center;
            padding-bottom: 8px;
            border-bottom: 1px solid #dddddd;
            .one-row-btn {
                width: 702px;
            }
        }
        .near-search {
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 24px;
            color:#666666;
            margin: 0 24px;
            border-bottom: 1px solid #ddd;
            img {
                width: 30px;
            }
        }
        .near-keyword {
            padding: 24px 23px;
            border-bottom: 1px solid #ddd;
            display: flex;
            // justify-content: space-between;
            flex-wrap: wrap;
            >li {
                background-color: rgb(204, 204, 204);
                padding: 0 13px;
                border-radius: 24px;
                height: 48px;
                line-height: 48px;
                text-align: center;
                font-size: 24px;
                color: #333;
                margin: 0 24px 16px 0;
            }
        }
    }
</style>

