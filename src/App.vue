<template>
  <div id="app">
    <!-- 上方导航 -->
    <van-nav-bar
      v-if="ifShows"
      :title="getValue"
      :fixed="true"
      style="z-index: 5"
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
        <van-icon name="share-o" size="18" @click="rightPop" />
      </template>
    </van-nav-bar>
    <!-- 上方主要内容 -->
    <keep-alive :include="/Sorts|Carts|Logins/">
      <router-view class="bodys" v-if="flag"></router-view>
    </keep-alive>
    <!-- 下方导航，全局 -->
    <van-tabbar v-model="active" class="bottomlists">
      <van-tabbar-item
        v-for="item in menu"
        :key="item.id"
        :to="item.path"
        :icon="item.icon"
        :badge="item.path === '/mycart' ? cartlists : null"
        >{{ item.text }}</van-tabbar-item
      >
    </van-tabbar>
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
        { path: "/home", text: "首页", icon: "wap-home-o", id: 1 },
        { path: "/sorts", text: "分类", icon: "wap-home-o", id: 2 },
        { path: "/mycart", text: "购物车", icon: "wap-home-o", id: 3 },
        { path: "/mines", text: "我的", icon: "wap-home-o", id: 4 },
      ],
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
      localStorage.setItem("cartData", JSON.stringify(data.info));
    },
    goto() {
      console.log("home被点了");
      this.$router.push("/home");
      this.flag = false;
      // 通过nextTick把router-view先移除再添加，达到刷新页面的功能
      this.$nextTick(() => {
        // Dom更新后在通过v-if添加router-view节点
        this.flag = true;
        console.log("页面刷新了");
      });
    },
    rightPop() {
      this.show = false;
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
    .bodys{
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
    .temps{
      height: 50px;
    }
  }
</style>
