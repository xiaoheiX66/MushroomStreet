<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MineWord/>
  </div>
</template>

<script>
// @ is an alias to /src
import MineWord from '@/components/MineWord.vue'

export default {
  name: 'Mines',
  components: {
    MineWord
  }
}
</script>
