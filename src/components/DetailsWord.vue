<template>
  <div class="homepage">
    <van-nav-bar title="标题">
      <template #title>
        <span class="shopslot">商品</span>
        <span class="agueslot">参数</span>
        <span class="agueslot">评论</span>
        <span class="agueslot">推荐</span>
      </template>
    </van-nav-bar>
    <ul>
      <li>
        <img :src="shoplists.img" alt="" />
        <div class="jieshaos">
          <p>&nbsp;{{ shoplists.title }}</p>
          <p>
            <span>&nbsp;￥{{ shoplists.price }}</span>
            <span>销量:{{ shoplists.sale }}</span>
            <span>收藏：{{ shoplists.cfav }}</span>
            <span>72小时发货&nbsp;</span>
          </p>
          <p>
            <span v-for="(item, index) in checklist" :key="index">
              <van-checkbox v-model="item.checked" icon-size="13px">{{
                item.text
              }}</van-checkbox>
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
          <img :src="item.img" alt="" />
          <div class="jieshaos">
            <p>&nbsp;{{ item.title }}</p>
            <p>
              <span>￥{{ item.price }}</span>
              <span>{{ item.cfav }}&nbsp;<van-icon name="star-o" />&nbsp;</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 下方固定栏 -->
    <van-goods-action style="z-index: 10">
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="cartlists2"
        @click="toMycart"
      />
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addToCart2"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="rightBuy"
      />
    </van-goods-action>
    <!-- 立即购买 -->
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "DetailsWord",
  data() {
    return {
      checklist: [
        { checked: true, text: "延误必赔" },
        { checked: true, text: "退货补运费" },
        { checked: true, text: "全国包邮" },
        { checked: true, text: "7天无理由" },
      ],
      shoplists: [],
      surelists: [],
      data: [],
      newLists: [""],
      show: false,
    };
  },
  created() {
    // console.log("parent",this.$parent.$parent.bottomshows);
    this.getCureData();
    console.log("路径", this.$route);
    const { id } = this.$route.query;
    this.getData(id);
    // this.timeId = setInterval(()=>{
    //     const {id} = this.$route.query
    // this.getData(id);
    // },1000)
  },
  // 当前路由被改变，该组件被复用时调用
  beforeRouteUpdate(to, from, next) {
    this.getData(to.query.id);
    next();
  },
  methods: {
    async getData(id) {
      const { data } = await this.$request.get("/goods/" + id);
      this.shoplists = data.info;
      this.data = data.info;
      // let itemType = data.info.itemType;
      // console.log("相似产品",data.info);
    },
    getCureData() {
      //   this.surelists = JSON.parse(localStorage.getItem('cartData'))
      //   console.log("相似产品列表",this.surelists);
      this.$request
        .get("/goods/list", { params: { size: 20, page: 1 } })
        .then((resolve) => {
          console.log("精确list", resolve);
          const { data } = resolve;
          this.surelists = data.info;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goto(id) {
      this.$router.push({ name: "Details", query: { id: id } });
      let top = document.documentElement.scrollTop;
      let timeId = setInterval(() => {
        document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeId);
        }
      }, 20);
      this.getData();
    },
    addToCart2() {
      const current = this.cartlists.find(
        (item) => item._id === this.shoplists._id
      );
      console.log("current", current);
      if (current) {
        this.$store.commit("modifyqty", {
          id: this.shoplists._id,
          qty: current.qty + 1,
        });
        this.$Toast.success("添加购物车成功");
      } else {
        this.$store.commit("addToCart", this.shoplists);
        this.$Toast.success("添加购物车成功");
      }
      //
      this.$request
        .post("/carts/addshops", {
          id: this.shoplists._id,
          tradeItemId: this.shoplists.tradeItemId,
          itemType: this.shoplists.itemType,
          img: this.shoplists.img,
          title: this.shoplists.title,
          hasSimilarity: this.shoplists.hasSimilarity,
          sale: this.shoplists.sale,
          cfav: this.shoplists.cfav,
          price: this.shoplists.price,
        })
        .then((resolve) => {
          console.log("添加结果", resolve);
          const { data } = resolve;
          if (data.code === 200) {
            this.$Toast.success("添加购物车成功");
          } else {
            this.$Toast.failed("添加购物车失败!!");
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    toMycart() {
      this.addToCart2();
      this.$router.push({ path: "/mycart" });
    },
    rightBuy() {
      this.$Dialog
        .confirm({ title: "提交购买", message: "即将前往购物车...." })
        .then(() => {
          this.$router.push({ path: "/mycart" });
        })
        .catch(() => {
          this.$Dialog.close();
        });
    },
  },
  computed: {
    cartlists2() {
      return this.$store.state.cartlists.length;
    },
    cartlists() {
      return this.$store.state.cartlists;
    },
  },
  watch: {
    "$route.query.id": function (n, o) {
      console.log("o", o);
      this.getData(n);
    },
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  .shopslot {
    color: red;
  }
  .agueslot {
    margin-left: 20px;
  }
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 504px;
      img {
        width: 92%;
        height: 86%;
        border-radius: 10px;
        border-left: 5px solid burlywood;
        border-right: 5px solid burlywood;
      }
      .jieshaos {
        width: 100%;
        height: 20%;
        p {
          width: 100%;
          padding: 5px 0px;
          margin-block-start: 0em;
          margin-block-end: 0em;
          text-indent: 0em;
        }
        p:nth-child(1) {
          font-size: 14px;
          color: #272727;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-indent: 1em;
        }
        p:nth-child(2) {
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0px;
          text-indent: 0em;
          span {
            color: #cbcbcb;
            font-size: 10px;
          }
          span:nth-child(1) {
            color: #ff5777;
            font-weight: bold;
            font-size: 17px;
            margin-right: 23px;
          }
          span:nth-child(2) {
            font-size: 10px;
            color: #bbb;
          }
        }
        p:nth-child(3) {
          display: flex;
          width: 100%;
          justify-content: space-around;
          align-items: center;
          font-size: 12px;
          span {
            width: 25%;
            display: flex;
            font-size: 10px;
            justify-content: center;
          }
        }
        p:nth-child(4) {
          height: 4px;
          padding: 0px;
          background-color: #f2f5f8;
        }
      }
    }
  }
  .bottomlists {
    width: 100%;
    padding-bottom: 50px;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 48.5%;
        height: 311px;
        display: flex;
        flex-direction: column;
        img {
          width: 100%;
          height: 258px;
          border-radius: 10px;
          border: none;
        }
      }
    }
  }
  .bottomfixed {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 100px;
    z-index: 15;
  }
}
</style>
