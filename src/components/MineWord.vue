<template>
    <div class="homepage">
         <section>
        <van-image
    round
    width="5rem"
    height="5rem"
    src="https://i03piccdn.sogoucdn.com/bd8daea9f5f7d857"
    />
    <span v-if="isLogin"><a><i class="userss">{{userinfos.username}}</i>&nbsp;&nbsp;&nbsp;,<i @click="loginOut">退出</i></a></span>
    <span v-else><a @click="$router.push('/logins')">立即登录</a></span>
      </section>
      <section>
          <van-row style="height:100%">
        <van-col span="7" class="cotss">
            <span>0.0</span><span>我的余额</span>
        </van-col>
        <van-col span="1" class="cotss" style="background:#eee;width:3px"></van-col>
        <van-col span="9" class="cotss">
            <span>0</span><span>我的优惠券</span>
        </van-col>
        <van-col span="1" class="cotss" style="background:#eee;width:3px"></van-col>
        <van-col span="7" class="cotss">
            <span>0</span><span>我的积分</span>
        </van-col>
        </van-row>
      </section>
      <section>
         <div>
             <ul>
                 <li v-for="item in maininfos.slice(0,3)" :key="item.id">
                     <van-icon :name="item.icon" /><span>{{item.text}}</span>
                 </li>
             </ul>
         </div>
         <div></div>
         <div>
             <ul>
                 <li v-for="item in maininfos.slice(3,maininfos.length)" :key="item.id">
                     <van-icon :name="item.icon" /><span>{{item.text}}</span>
                 </li>
             </ul>
         </div>
      </section>
      <section>
          <h3 style="font-family:'宋体',text-align:left">精选商铺</h3>
          <ul>
              <li v-for="item in bottomLists" :key="item._id" @click="goto(item._id)">
                  <van-card
                    num="2"
                    tag="精选"
                    :price="item.price"
                    :title="item.title"
                    :thumb="item.img"
                    origin-price="999"
                    >
                    <template #thumb>
                        <img :src="item.img" alt="图片加载中.." style="height:100%">
                    </template>
                    <template #price>
                        <span style="color:red;font-size:15px;font-weight:bold">￥</span><span style="color:red;font-size:15px;font-weight:bold">{{item.price}}</span>
                    </template>
                  </van-card>
              </li>
          </ul>
      </section>
    </div>
</template>

<script>
export default {
    name:"MineWord",
    data(){
        return{
            bottomLists:[],
            maininfos:[
                {id:1,icon:"envelop-o",text:"我的消息"},
                {id:2,icon:"shop-collect-o",text:"积分商城"},
                {id:3,icon:"vip-card-o",text:"会员卡"},
                {id:4,icon:"shopping-cart-o",text:"我的购物车"},
                {id:5,icon:"shield-o",text:"下载购物APP"},
            ]
        }
    },
    created(){
        // this.$store.commit('isLogins')
        this.getData();
    },
    computed:{
        extradata(){
            return this.$store.state.extradata
        },
        userinfos(){
            return this.$store.state.userinfo
        },
       isLogin(){
           return this.$store.getters.isLogin
       },
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
          this.getData();
      },
      loginOut(){
         this.$store.commit('loginOut')
       },
       getData(){
           this.bottomLists = JSON.parse(localStorage.getItem("extradata"))
       }
        
    }
}
</script>

<style lang="scss" scoped>
.homepage{
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  overflow-y: scroll;
 section:nth-child(1){
   width: 100%;
   height: 98px;
   background: url(https://i02piccdn.sogoucdn.com/351d44813659f30c);
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   top: 47px;
   left: 0;
   z-index: 3;
   span{
     width: 65%;
     height: 1.6rem;
     text-align: left;
     line-height: 1.6rem;
     a{
       margin-left: .3667rem;
       color: #ffffff;
     }
     .userss{
       font-weight: bold;
       font-family: "方正舒体";
       font-size: 27px;
       color: #ffffff;
     }
   }
 }
 section:nth-child(2){
   height: 80px;
   margin-top: 154px;
  background-color: white;
   background-position-x:-386px ;
   background-size: cover;
   .cotss{
       height: 100%;
       display: flex;
       flex-direction: column;
       justify-content: center;
   }
   .cotss span:nth-child(1){
       font-size: 20px;
       color: #ff5f3e;
       font-weight: bold;
   }
   .cotss span:nth-child(2){
       font-size: 12px;
       color: #a6a6a6;

   }
 }
 section:nth-child(3){
     margin-top: 10px;
     background-color: white;
     display: flex;
     flex-direction: column;
     div{
         ul{
         justify-content: space-around;
         img{
             border-radius: 10px;
         }
     }
     }
      div:nth-child(1),div:nth-child(3){
          ul{
              height: 100%;
              width: 100%;
              display: flex;
              flex-direction: column;
              
              li{
                  height: 43px;
                  width: 100%;
                  display: flex;
                  justify-content:flex-start;
                  align-items: center;
                  i{
                      width: 12%;
                      color: #ff5f3e;
                      font-size: 21px;
                      padding: 6px 0px;
                  }
                  span{
                      width: 88%;
                      color: #3e393e;
                      padding: 12px 0px;
                      text-align: left;
                      border-bottom: 1px solid #eee;
                  }
                 
              }
          }
      }
     div:nth-child(2){
         height: 10px;
         background-color: #eee;
     }
 }
 section:nth-last-child(1){
     margin-top: 10px;
     background-color: white;
     ul{
         width: 100%;
        display: flex;
        flex-direction: column;
        li{
               height: 110px;
               width: 100%;
        }
     }
 }
}
</style>