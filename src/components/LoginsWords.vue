<template>
    <div class="homepage">
        <!-- 上方渲染区 -->
      <van-image
     width="100%"
     height="10rem"
     fit="contain"
     src="https://i03piccdn.sogoucdn.com/bd8daea9f5f7d857"
    />
      <!-- 下方登录区 -->
    <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="username"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button block type="info" native-type="submit" round>登录</van-button>
  </div>
  <p @click="$router.push('/regs')" class="toRegs">没有账号？点击注册</p>
</van-form>
    </div>
</template>

<script>
import { Notify } from 'vant';
export default {
    name:"LoginsWords",
    data() {
    return {
      username: '',
      password: '',
    };
  },
  created(){
    console.log("this",this.$route);
    const {username} = this.$route.query
    if(username){
      this.username = username
    }
  },
  methods: {
    async onSubmit(values) {
     console.log("values",values);
     const {data} = await this.$request.get("/user/login",{params:{username:this.username,password:this.password}})
     if(data.code===200){
      Notify({type:'success',message:`欢迎回来${data.info.username}`});
      localStorage.setItem("userinfo",JSON.stringify(data.info))
      this.$router.push({name:"Mines",query:{user:this.username}});
      this.username =""
      this.password =""
     }else{
      Notify({type:'danger',message:'用户名或密码错误!!'});
       this.username =""
      this.password =""
     }
     console.log("登录data",data);
    },
  },
}
</script>