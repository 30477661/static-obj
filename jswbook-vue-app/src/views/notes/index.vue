<template>
    <div>
        <headerpage :title_page='title_page="笔记"' :backBtn='backBtn=true'></headerpage>
        
        <footernav :imgActive='imgActive=4'></footernav>
    </div>
    
</template>
<script>
import footernav from '../../components/footer'
import headerpage from '../../components/header'
export default {
    components:{
        footernav,
        headerpage
    },
    created(){
        this.$messagebox.alert('敬请期待','暂未开放').then(()=>{
            this.$router.go(-1);
        });
    }
}
</script>

<style>
    div {
        font-size: 26px;
    }
</style>

