<template>
    <div class="home">
       <keep-alive>
            <DetailsWord></DetailsWord>
       </keep-alive>
    </div>
</template>

<script>
import DetailsWord from "../components/DetailsWord.vue"
export default {
    name:"Details",
    components:{DetailsWord}
}
</script>

<style lang="scss" scoped>
.home{
    padding-top: 46px;
}
</style>