<template>
  <div id="app">
    <!-- 上方导航 -->
    <van-nav-bar
      v-if="ifShows"
      title="MoGu-StrEet"
      :fixed="true"
      z-index="5"
      left-arrow
    >
      <template #left>
        <van-icon
          name="arrow-left"
          size="18"
          @click="$router.back()"
          style="margin-right: 15px"
        />
        <van-icon name="wap-home-o" size="18" @click.native="goto" />
      </template>
      <template #right>
        <van-icon name="scan" size="18" @click="rightPop" />
      </template>
    </van-nav-bar>
    <!-- 上方主要内容 -->
    <keep-alive :include="/Home|Sorts|Logins|Regs/">
      <router-view class="bodys" v-if="flag"></router-view>
    </keep-alive>
    <!-- 下方导航，全局 -->
    <van-tabbar v-model="active" class="bottomlists">
      <van-tabbar-item
        v-for="(item, index) in menu"
        :key="item.id"
        :to="item.path"
        :icon="item.icon"
        :badge="item.path === '/mycart' ? cartlists : null"
        @click="clickto(index)"
        >{{ item.text }}</van-tabbar-item
      >
    </van-tabbar>
    <!-- 扩充内容 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      ifShows: true,
      flag: true,
      bottomshows: "block",
      menu: [
        { path: "/home", text: "首页", icon: "wap-home-o", id: 0 },
        { path: "/sorts", text: "分类", icon: "qr-invalid", id: 1 },
        { path: "/mycart", text: "购物车", icon: "shopping-cart-o", id: 2 },
        { path: "/mines", text: "我的", icon: "user-circle-o", id: 3 },
      ],
      shows: false,
    };
  },
  provide() {
    return {
      ifShowss: this.ifShows,
    };
  },
  created() {
    this.getData();
  },
  computed: {
    getValue() {
      return this.$route.path.slice(1, this.$route.path.length).toUpperCase();
    },
    cartlists() {
      return this.$store.state.cartlists.length;
    },
    isLogins() {
      return this.$store.commit("isLogins");
    },
  },
  methods: {
    async getData() {
      const { data } = await this.$request.get("/carts/getlists");
      console.log("购物车数据", data);
      window.localStorage.setItem("cartData", JSON.stringify(data.info));
    },
    goto() {
      console.log("home被点了");
      this.$router.push("/home");
      this.flag = false;
      this.active = 0;
      // 通过nextTick把router-view先移除再添加，达到刷新页面的功能
      this.$nextTick(() => {
        // Dom更新后在通过v-if添加router-view节点,nextTick返回结果是promise，
        this.flag = true;
        console.log("页面刷新了");
      });
    },
    clickto(index) {
      this.active = index;
    },
    rightPop() {
      this.$Toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner",
      });
    },
  },
  watch: {
    "$route.fullPath": function (n, o) {
      console.log("to.." + n, "from.." + o);
      // this.active = n.slice(1,n.length)
      console.log("active", this.active);
    },
  },
  destroyed() {
    this.show = false;
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  .bodys {
    flex: 1;
    width: 100%;
    height: 5.3333rem;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
  .temps {
    height: 50px;
  }
  .topbacks {
    background: url(http://bpic.588ku.com/back_pic/00/04/14/735621da9882bc7.jpg!/fh/300/quality/90/unsharp/true/compress/true);
  }
}
</style>
