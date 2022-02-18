<template>
  <div class="homepage">
    <!-- 上方头像区 -->
    <van-image
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://i03piccdn.sogoucdn.com/bd8daea9f5f7d857"
    />
    <!-- 下方注册区 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          { validator: checkuserIfSub, message: '用户已存在' },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="registercss">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
      <p @click="toSubss" class="toLogins">已有账号？点击登录</p>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "RegsWords",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(values) {
      const { data } = await this.$request.post("/user/reg", values);
      console.log("注册结果", data);
      if (data.code === 200) {
        console.log("values", values);
        this.$Toast.success("注册成功");
        this.$router.push({
          name: "Logins",
          query: { users: values.username },
        });
        values.password = "";
      } else {
        this.$Toast.failed("用户名已存在,请重新输入!");
        values.password = "";
      }
    },
    async checkuserIfSub() {
      const { data } = await this.$request.post("/user/checks", {
        username: this.username,
      });
      console.log("data", data, this.username);
      return data.code === 400;
    },
    toSubss() {
      this.$router.push({ name: "Logins", query: { users: this.username } });
      this.$Toast({ message: "进入登录页", position: "top" });
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.toLogins {
  text-decoration: underline;
  font-size: 12px;
}
.registercss {
  margin: 16px;
}
</style>