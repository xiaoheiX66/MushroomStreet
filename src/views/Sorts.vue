<template>
  <div class="home">
    <SortWord/>
  </div>
</template>

<script>
// @ is an alias to /src
import SortWord from '@/components/SortWord.vue'

export default {
  name: 'Sorts',
  components: {
    SortWord
  },
}
</script>

<style lang="scss">
.price{
  color:red;font-weight:bold;font-size:16px
}
</style>
