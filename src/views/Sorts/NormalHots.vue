<template>
    <div class="homepage">
        <div class="rightlists">
           <ul>
               <li v-for="(item,index) in sortlistalls" :key="index">
                   <img :src="item.imgs" alt="">
                   <span>{{item.conts}}</span>
               </li>
               <li style="height:50px"></li>
               <li style="height:50px"></li>
           </ul>
       </div>
    </div>
</template>

<script>
import '../../../public/scss/dist/TempsCss.css'
export default {
    name:"NormalHots",
    inject:['sortlistalls'],
    created(){
    
    }
}
</script>

