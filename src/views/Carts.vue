<template>
  <div class="home">
    <CartWord/>
  </div>
</template>

<script>
// @ is an alias to /src
import CartWord from '@/components/CartWord.vue'

export default {
  name: 'Carts',
  components: {
    CartWord
  }
}
</script>
<style lang="scss" scoped>
.home{
  padding-top: 47px;
}
</style>
