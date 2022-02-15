<template>
      <div class="homepage">
           <!-- <MainConts :shortlists="changeDatalists"/> -->
            <!-- <ul>
                 <li v-for="item in changeDatalists" :key="item._id" @click="goto(item._id)">
                   <img :src="item.img" alt="">
                   <div class="jieshaos">
                       <p style="font-size:14px;color:#aaaaaa">&nbsp;{{item.title}}</p>
                       <p>
                           <span>￥{{item.price}}</span>
                           <span>&nbsp;<van-icon name="star-o" />&nbsp;</span>
                       </p>
                   </div>
                </li>
            </ul> -->
            <van-card
                :tag="conts"
                :price="item.price"
                desc="描述信息"
                :title="item.title"
                :thumb="item.img"
                origin-price="999"
                v-for="item in changeDatalists" :key="item._id" @click="goto(item._id)"
                >
               <template #price>
               <p class="price" style="color:red;font-weight:bold;font-size:16px"><span>￥</span><span>{{item.price}}</span>  </p>  
               </template> 
            </van-card>
      </div>
</template>

<script>
// import MainConts from "../MixComponents/MainConts.vue"
export default {
    name:"Baggs",
    props:['changeDatalists','conts'],
    // components:{MainConts},
     methods:{
        goto(id){
            this.$router.push({name:"Details",query:{id:id}})
           let top = document.documentElement.scrollTop;
           let timeId = setInterval(()=>{
              document.documentElement.scrollTop = top -= 50;  
                  if(top<=0){
                  clearInterval(timeId)
             }
          },10)
        }
    },
}
</script>