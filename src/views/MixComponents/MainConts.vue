<template>
        <ul>
                 <li v-for="item in shortlists" :key="item._id" @click="goto(item._id)">
                   <img :src="item.img" alt="">
                   <div class="jieshaos">
                       <p style="font-size:14px;color:#aaaaaa">&nbsp;{{item.title}}</p>
                       <p>
                           <span>￥{{item.price}}</span>
                           <span>&nbsp;<van-icon name="star-o" />&nbsp;</span>
                       </p>
                   </div>
                </li>
            </ul>
</template>

<script>
export default {
    name:"MainConts",
     inject:['shortlists'],
    created(){
        console.log("当前数据",this.shortlists);
    },
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

<style lang="scss">
.homepage{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            width: 47%;
            // height: 250px;
            img{
                width: 100%;
                height: 80%;
            }
             .jieshaos{
                    p:nth-child(1){
                        width: 130px;
                        font-size: 15px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    p{
                        margin-block-start:0em;
                        margin-block-end:0em;
                    }
                    p:nth-child(2){
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        span{
                            width: 40%;
                            font-size: 16px;
                        }
                        span:nth-child(1){
                            color: #ff5777;
                            text-align: left;
                        }
                        span:nth-child(2){
                            text-align: right;
                        }
                    }
                }
        }
    }
}
</style>