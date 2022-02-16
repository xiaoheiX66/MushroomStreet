<template>
    <!-- 右侧弹出层 -->
<van-popup v-model="shows" position="right" :style="{ height: '100%',width:'104px',display:'flex',justifyContent:'center',alignItems:'center'}" >
 <h3 style="width:50px;heihgt:50%;font-size:28px;">小编快马加鞭中</h3>
</van-popup>
</template>

<script>
export default {
    name:"RightPops",
    props:['shows'],
    data(){
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>