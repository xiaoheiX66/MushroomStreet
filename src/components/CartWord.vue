<template>
    <div class="homepage">
        <section>
            <van-steps :active="active">
            <van-step>买家下单</van-step>
            <van-step>商家接单</van-step>
            <van-step>买家提货</van-step>
            <van-step>交易完成</van-step>
            </van-steps>
        </section>
        <section>
            <ul>
                <li v-for="item in cartlists" :key="item._id" @change="selectIds">
                    <van-swipe-cell style="width:375px">
                     <van-card
                        num="2"
                        :price="59.00"
                        title="jdojsowdhd ifehfvuiafhuaeifhufjosdoskdskdpp"
                        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                        style="flex:1"
                        >
                        <template #price>
                            <p style="width:128px;text-align:left">
                                <span class="prices">￥</span><span class="prices">{{item.price}}</span>
                            </p>
                        </template>
                        <template #title>
                            <p class="smalltitle">{{item.title}}</p>
                        </template>
                        <template #thumb>
                            <img :src="item.img" alt="暂无" style="height:100%" />
                        </template>
                        <template #num>
                            <van-stepper v-model="item.qty" theme="round" button-size="22" disable-input style="margin-top:10px" />
                        </template> 
                     </van-card>
                      <template #left style="display:flex">
                         <van-checkbox v-model="checked" style="width:32px;justify-content:center;height:100%"></van-checkbox>
                    </template>
                     <template #right>
                        <van-button square text="删除" type="danger" class="delete-button" />
                     </template>
                       </van-swipe-cell>
                </li>
                <li style="height:50px"></li>
            </ul>
        </section>
        <section>
            <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked">全选</van-checkbox></van-submit-bar>
        </section>
    </div>
</template>

<script>
export default {
    name:"CartWord",
    data(){
        return{
            active:1,
            checked:true,
            qty:1,
           
        }
    },
    computed:{
       totalPrices(){
           return this.value
       },
       cartlists(){
            return this.$store.state.cartlists
        }
    },
    methods:{
        onSubmit(){
            console.log("商品提交");
        },
        selectIds(){
            console.log("当前状态改变了");
        },
        
    },
    created(){  
    }
}
</script>

<style lang="scss" scoped>
.homepage{
    display: flex;
    flex-direction: column;
    section:nth-of-type(2){
        width: 100%;
        ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            li{
                display: flex;
                width: 100%;
                height: 100%;
                justify-content: space-between;
            }
        }
    }
    .prices{
        color:red;font-size:15px;font-weight:bold;
    }
    .smalltitle{
        width:215px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
    }
    .goods-card {
    margin: 0;
    background-color: white;
  }

  .delete-button {
    height: 100%;
  }
  .van-swipe-cell__wrapper{
      display: flex;
  }
}
</style>