<template>
  <div id="app">
    <!-- 上方导航 -->
    <van-nav-bar :title="getValue" right-text="编辑" left-arrow>
  <template #left>
    <van-icon name="arrow-left" size="18" @click="$router.back()" style="margin-right:15px" />
    <van-icon name="wap-home-o" size="18" @click="$router.push('/home')"/>
  </template>
    </van-nav-bar>
    <!-- 上方主要内容 -->
    <keep-alive>
       <router-view class="bodys"/>
    </keep-alive>
     <!-- 下方导航，全局 -->
    <van-tabbar v-model="active" class="bottomlists" >
  <van-tabbar-item  to="/home" icon="wap-home-o">首页</van-tabbar-item>
  <van-tabbar-item  to="/sorts" icon="qr-invalid">分类</van-tabbar-item>
  <van-tabbar-item  to="/mycart" icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item  to="/mines" icon="contact">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:'home',
    }
  },
  created(){
    
  },
  computed:{
    getValue(){
      return this.$route.path.slice(1,this.$route.path.length).toUpperCase()
    }
  }
}
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

    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
}
</style>
