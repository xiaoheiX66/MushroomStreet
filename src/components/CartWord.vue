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
        <section v-if="cartlists.length>0">
            <ul>
                <li v-for="(item,index) in cartlists" :key="item._id">
                    <van-swipe-cell class="vanswiperss">
                        
                     <van-card
                        num="2"
                        :price="59.00"
                        title="jdojsowdhd ifehfvuiafhuaeifhufjosdoskdskdpp"
                        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                        class="vanswiperss_card"
                        >
                        <template #price>
                            <p class="priceouts">
                                <span>￥</span><span>{{item.price}}</span>
                            </p>
                        </template>
                        <template #title>
                            <p class="smalltitle">{{item.title}}</p>
                        </template>
                        <template #thumb>
                            <img :src="item.img" alt="暂无" height="100%" width="80%" />
                        </template>
                        <template #num>
                            <van-stepper v-model="item.qty" :name="item._id" theme="round" button-size="22" disable-input class="qtysums"
                             @change="changeqty" @plus="addcss2(item._id,index)" @minus="reducss2(item._id,index)" @overlimit="overmits" />
                        </template> 
                     </van-card>
                      <template #left class="leftcheckParent" style="display:flex">
                         <van-checkbox @click="selectItem(item._id)" :value="selectIds.includes(item._id)" class="checkparent_child"></van-checkbox>
                    </template>
                     <template #right>
                        <van-button square text="删除" type="danger" class="delete-button"  @click="delShpos(item._id)" />
                     </template>
                       </van-swipe-cell>
                </li>
                <li class="tempssli"></li>
            </ul>
        </section>
         <van-empty description="购物车里空空如也~~" v-else>
            <van-button round type="danger" size="small" plain to="/sorts">去购买</van-button>
        </van-empty>
        <section>
            <van-submit-bar :price="totalPrices" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checkAll">全选</van-checkbox></van-submit-bar>
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
            selectIds:[],
            qtys:1
        }
    },
    computed:{
       totalPrices(){
           return  this.cartlists.filter(item=>this.selectIds.includes(item._id)).reduce((prev,item)=>prev+item.price*item.qty,0)*100
       },
       cartlists(){
            return this.$store.state.cartlists
        },
        isLogins(){
            return this.$store.commit('isLogins')
        },
        checkAll:{
            get(){
                return this.cartlists.every(item=>this.selectIds.includes(item._id))
            },
            set(newVal){
                console.log("newVal",newVal);
                this.selectIds = newVal ? this.cartlists.map(item=>item._id) : []
            }
        },
    },
    methods:{
        onSubmit(){
            this.$Toast.fail('系统维护中...')
        },
         delShpos(id){
        //    console.log("删除点击的id值",id);
           this.$Dialog.confirm({title: '删除',message: '确认删除当前商品?',}).then(() => {
            //    console.log("确认删除");
              this.$request.delete("/carts/deltes/"+id).then((resolve)=>{
                  const {data} = resolve;
                  if(data.code===200){
                      this.$Toast.success('删除成功');
                      this.$store.commit("removeFromCart",id)
                      return
                  }else if(data.code===400){
                      this.$Toast.falied('删除失败')
                  }
              }).catch((err)=>{
                  console.log("err",err);
              })
        
           })
            .catch(() => {
                console.log("取消删除");
            });
        }, 
        changeqty(value,detail){
            console.log("details",detail);
            this.$Toast.loading({ forbidClick: true });
            clearTimeout(this.timer);
        this.timer = setTimeout(() => {
        this.$Toast.clear();
        // 注意此时修改 value 后会再次触发 change 事件
        // this.value = value;
        this.$store.commit('modifyqty',{id:detail.name,qty:value})
      }, 500)
        },
        addcss2(id){
            this.$request.post("/carts/addcs",{id:id}).then((resolve)=>{
                console.log("resolve",resolve);
                const {data} = resolve;
                // this.qtys = data.infos[0].qty
                console.log("data",data);
            
            }).catch((err)=>{console.log("err",err);})
        },
        reducss2(id){
           this.$request.post("/carts/redecs",{id:id}).then((resolve)=>{
                console.log("resolve",resolve);
                const {data} = resolve;
                // this.qtys = data.infos[0].qty
                console.log("data",data);
            
            }).catch((err)=>{console.log("err",err);}) 
        },
        overmits(){
            this.$Toast.fail('当前商品数量为1件')
        },
        selectItem(id){
      let idx = this.selectIds.indexOf(id)
      if(idx>=0){
        this.selectIds.splice(idx,1)
      }else{
        this.selectIds.push(id)
      }
      console.log("selectids",this.selectIds);
    },
    },
    watch:{

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
                .vanswiperss{
                    width:375px;
                    .vanswiperss_card{
                        flex: 1;
                        .priceouts{
                            width:128px;text-align:left;
                            color: red;font-weight: bold;
                            font-size: 16px;
                        }
                        img{
                            height: 100%;
                        }
                        .qtysums{
                            margin-top:10px;
                        }
                        .leftcheckParent{
                            display: flex;
                            .checkparent_child{
                                width:32px;justify-content:center;height:100%;
                            }
                        }
                    }
                }
            }
             .tempssli{
                    height: 50px;
                }
        }
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