<template>
    <div class="home">
        <LoginsWords/>
    </div>
</template>

<script>
import LoginsWords from "@/components/LoginsWords.vue"
export default {
    name:"Logins",
    components:{
        LoginsWords
        }
}
</script>

<style lang="scss" scoped>
.home{
    padding-top:89px ;
}
</style>