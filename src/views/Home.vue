<template>
  <div class="home">
    <!-- 上方导航 -->
    <HomeWord/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeWord from '@/components/HomeWord.vue'

export default {
  name: 'Home',
  components: {
    HomeWord
  }
}
</script>

<style lang="scss">
.home{
  width: 100%;
}
</style>
