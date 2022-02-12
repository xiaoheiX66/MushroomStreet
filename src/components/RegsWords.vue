<template>
    <div class="homepage">
       我是注册页
    </div>
</template>

<script>
export default {
    name:"RegsWords",
    data() {
    return {
      username: '',
      password: '',
    };
  },
   methods: {
    onSubmit(values) {
      console.log('submit', values);
   },
   checkuserIfSub(values){
       console.log("注册账户检测是否重叠values",values);
       return 200
   }
  },
}
</script>

<style lang="scss" scoped>
.toLogins{
  text-decoration: underline;
  font-size: 12px;
}
</style>