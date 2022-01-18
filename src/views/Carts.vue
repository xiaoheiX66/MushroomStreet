<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
