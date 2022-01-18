<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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
  }
}
</script>
