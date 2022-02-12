<template>
    <div class="homepage">
        <van-nav-bar
        title="标题"
        >
        <template #title>
            <span style="color:red;">商品</span>
            <span style="margin-left:20px">参数</span>
            <span style="margin-left:20px">评论</span>
            <span style="margin-left:20px">推荐</span>
        </template>
        </van-nav-bar>
        <ul>
                 <li>
                   <img :src="shoplists.img" alt="">
                   <div class="jieshaos">
                       <p>&nbsp;{{shoplists.title}}</p>
                       <p>
                           <span>&nbsp;￥{{shoplists.price}}</span>
                           <span>销量:{{shoplists.sale}}</span>
                           <span>收藏：{{shoplists.cfav}}</span>
                           <span>72小时发货&nbsp;</span>
                       </p>
                       <p style="font-size:15px">
                           <span v-for="(item,index) in checklist" :key="index">
                              <van-checkbox v-model="item.checked" icon-size='13px'>{{item.text}}</van-checkbox>
                           </span>
                          </p>
                        <p></p>
                   </div>
                </li>
            </ul>
            <div class="bottomlists">
                <h3>精选商品</h3>
                    <ul>
                 <li v-for="item in surelists" :key="item._id" @click="goto(item._id)">
                   <img :src="item.img" alt="">
                   <div class="jieshaos" style="height:20%">
                       <p style="font-size:14px;color:#aaaaaa">
                           &nbsp;{{item.title}}
                       </p>
                       <p style="padding:0px">
                           <span>￥{{item.price}}</span>
                           <span style="font-size:16px;color:#6b6b6b">{{item.cfav}}&nbsp;<van-icon name="star-o" />&nbsp;</span>
                       </p>
                   </div>
                </li>
            </ul>
               
            </div>
            <!-- 下方固定栏 -->
           <van-goods-action style="z-index:10">
            <van-goods-action-icon icon="chat-o" text="客服" dot />
            <van-goods-action-icon icon="cart-o" text="购物车" :badge="cartlists2" to="/mycart" />
            <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
            <van-goods-action-button type="danger" text="立即购买" />
            </van-goods-action>
    </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);
export default {
    name:"DetailsWord",
    data(){
        return{
         checklist:[{checked:true,text:"延误必赔"},
                    {checked:true,text:"退货补运费"},
                    {checked:true,text:"全国包邮"},
                    {checked:true,text:"7天无理由"}
                    ],
                    shoplists:[],
                    surelists:[],
                    data:[]
        }
    },
    mounted(){
        
    },
    created(){
        
        // console.log("parent",this.$parent.$parent.bottomshows);
        const {id} = this.$route.query
        this.getData(id);
        console.log("路径",this.$route);
    },
    // 当前路由被改变，该组件被复用时调用
    beforeRouteUpdate(to,from,next){
        this.getData(to.query.id)
        next();
    },
    methods:{
       async getData(id){
            const {data} = await this.$request.get("/goods/"+id)
            this.shoplists = data.info
            this.data = data.info;
            let itemType = data.info.itemType;
            this.getCureData(itemType)
            // console.log("相似产品",data.info);
        },
      async getCureData(itemtype){
          const {data} = await this.$request.post("/goods/cureSear",{values:itemtype})
          this.surelists = data.info.slice(0,10)
        //   console.log("相似产品列表",this.surelists);
      },
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
      async addToCart(){
          console.log("当前页面大图数据",this.shoplists);
            const {data} = await this.$request.post("/carts/addshops",{
                id:this.shoplists._id,tradeItemId:this.shoplists.tradeItemId,itemType:this.shoplists.itemType,
                img:this.shoplists.img,title:this.shoplists.title,hasSimilarity:this.shoplists.hasSimilarity,
                sale:this.shoplists.sale,cfav:this.shoplists.cfav,price:this.shoplists.price
            })
            this.getData();
            console.log("点击购物车请求的data",data);
        },
    },
    computed:{
        cartlists2(){
            return this.$store.state.cartlists.length
        },
        cartlists(){
            return this.$store.state.cartlists
        }
    },
    watch:{
        '$route.query.id':function(n,o){
            console.log("o",o);
            this.getData(n)
        },
    }
}
</script>

<style lang="scss" scoped>
.homepage{
    ul{
        width: 100%;
        li{
            width: 100%;
            height: 504px;
            img{
                width: 94%;
                height: 82%;
                border-radius: 10px;
            }
            .jieshaos{
                width: 100%;
                p{
                    width: 100%;
                    padding: 5px 0px;
                }
                p:nth-child(1){
                   font-size:14px;color:#272727;width:100%
                }
                p:nth-child(2){
                    border-bottom: 1px solid #f0f0f0;
                    span{
                     color:#cbcbcb;font-size:10px   
                    }
                    span:nth-child(1){
                        color:#ff5777;font-weight:bold;
                        font-size: 16px;
                    }
                }
                p:nth-child(3){
                    display: flex;
                    width: 100%;
                    justify-content: space-around;
                    align-items: center;
                    span{
                        width: 25%;
                        display: flex;
                        font-size: 10px;
                        justify-content: center;
                    }
                }
                p:nth-child(4){
                    height: 4px;
                    padding: 0px;
                    background-color: #f2f5f8;
                }
            }
        }
    }
    .bottomlists{
        width: 100%;
        padding-bottom: 50px;
      
            ul{
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            li{
                width: 48.5%;
                height: 270px;
                display: flex;
                flex-direction: column;
                img{
                    width: 100%;
                    height: 80%;
                    border-radius: 10px;
                }
            }
        }
        
        
    }
    .bottomfixed{
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 100px;
        z-index: 15;
    }
}
</style>
