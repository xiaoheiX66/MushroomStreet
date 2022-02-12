<template>
       <div class="homepage">
        <MainConts />
    </div>   
</template>

<script>
import MainConts from "../MixComponents/MainConts.vue"
export default {
    name:"WomanShoes",
     props:['changeDatalists'],
    provide(){
        return{
           shortlists:this.changeDatalists 
        }
    },
    components:{MainConts}
}
</script>