<template>
    <div>
        <headerpage :title_page='title_page="搜索"' :backBtn='backBtn=1'></headerpage>
        <div class="top-search">
            <img alt=""><input type="text" placeholder="题名、著者、分类号、出版社、主题词">
        </div>
        <footernav :imgActive='imgActive=2'></footernav>
    </div>
    
</template>
<script>
import footernav from '../../components/footer'
import headerpage from '../../components/header'
export default {
    components:{
        footernav,
        headerpage
    }
}
</script>

<style>
    div {
        font-size: 26px;
    }
</style>

