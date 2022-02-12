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
export default {
    name:"NormalHots",
    inject:['sortlistalls'],
    created(){
        // console.log("sortlistall",this.sortlistalls);
    }
}
</script>

<style lang="scss" scoped>
.rightlists{
        width:100%;
        height:700px;
        ul{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li{
                width: 42%;
                height: 136px;
                display: flex;
                flex-direction:column;
                img{
                    border-radius: 50%;
                    height: 120px;
                }
                img:hover{
                    opacity: 0.8;
                }
                span:nth-of-type(1){
                    font-family: "宋体";
                }
            }
        }
    }
</style>