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
html,body{
  height: 100%;
}
.homepage{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            width: 47%;
            height: 250px;
            img{
                width: 100%;
                height: 80%;
            }
             .jieshaos{
                    p:nth-child(1){
                        width: 130px;
                        font-size: 15px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    p{
                        margin-block-start:0em;
                        margin-block-end:0em;
                    }
                    p:nth-child(2){
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        span{
                            width: 40%;
                            font-size: 16px;
                        }
                        span:nth-child(1){
                            color: #ff5777;
                            text-align: left;
                        }
                        span:nth-child(2){
                            text-align: right;
                        }
                    }
                }
        }
    }
}
</style>
