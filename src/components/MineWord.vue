<template>
  <div class="homepage">
    <section>
      <van-image
        round
        width="5rem"
        height="5rem"
        :src="fileList[0]"
        @click="uploadTx"
      />
      <span v-if="isLogin"
        ><a
          ><i class="userss">{{ userinfos.username }}</i
          >&nbsp;&nbsp;&nbsp;,<i @click="loginOut" class="loginouts">退出</i></a
        ></span
      >
      <span v-else><a @click="gotoSubs">立即登录</a></span>
    </section>
    <section>
      <van-row style="height: 100%">
        <van-col span="7" class="cotss">
          <span>1000000</span><span>我的余额</span>
        </van-col>
        <van-col span="1" class="cotss cottsbrother"></van-col>
        <van-col span="9" class="cotss">
          <span>88888</span><span>我的优惠券</span>
        </van-col>
        <van-col span="1" class="cotss cottsbrother"></van-col>
        <van-col span="7" class="cotss">
          <span>1000MB</span><span>我的积分</span>
        </van-col>
      </van-row>
    </section>
    <section>
      <div>
        <ul>
          <li v-for="item in maininfos.slice(0, 3)" :key="item.id">
            <van-icon :name="item.icon" /><span>{{ item.text }}</span>
          </li>
        </ul>
      </div>
      <div></div>
      <div>
        <ul>
          <li
            v-for="item in maininfos.slice(3, maininfos.length)"
            :key="item.id"
          >
            <van-icon :name="item.icon" /><span>{{ item.text }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <h3 class="sureTitles">
        <b>清仓处理</b>&nbsp;
        <van-count-down
          :time="time"
          class="textCount"
          format=" DD 天 HH 时 mm 分 ss 秒 !!"
        />
      </h3>
      <ul>
        <li v-for="item in bottomLists" :key="item._id" @click="goto(item._id)">
          <van-card
            num="2"
            tag="精选"
            :price="item.price"
            :title="item.title"
            :thumb="item.img"
            origin-price="999"
          >
            <template #thumb>
              <img
                :src="item.img"
                alt="图片加载中.."
                height="100%"
                width="100%"
              />
            </template>
            <template #price>
              <span class="prices">￥</span
              ><span class="prices">{{ item.price }}</span>
            </template>
          </van-card>
        </li>
      </ul>
    </section>
    <section class="lastsections"></section>
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-uploader
        v-model="fileList"
        multiple
        :max-count="5"
        :max-size="500 * 1024"
        :before-read="beforeRead"
        @oversize="onOversize"
        :after-read="afterRead"
        :file="filepath"
      >
      </van-uploader>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "MineWord",
  data() {
    return {
      bottomLists: [],
      maininfos: [
        { id: 1, icon: "envelop-o", text: "我的消息" },
        { id: 2, icon: "shop-collect-o", text: "积分商城" },
        { id: 3, icon: "vip-card-o", text: "会员卡" },
        { id: 4, icon: "shopping-cart-o", text: "我的购物车" },
        { id: 5, icon: "shield-o", text: "下载购物APP" },
      ],
      show: false,
      shows: false,
      fileList: ["https://i03piccdn.sogoucdn.com/bd8daea9f5f7d857"],
      time: 99999999,
    };
  },
  created() {
    // this.$store.commit('isLogins')
    this.getData();
    console.log("初始状态fielist", this.fileList[0]);
  },
  computed: {
    extradata() {
      return this.$store.state.extradata;
    },
    userinfos() {
      return this.$store.state.userinfo;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    },
    filepath() {
      return "http://localhost:8088/public/img/";
    },
  },
  methods: {
    goto(id) {
      this.$router.push({ name: "Details", query: { id: id } });
      let top = document.documentElement.scrollTop;
      let timeId = setInterval(() => {
        document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeId);
        }
      }, 10);
      this.getData();
    },
    loginOut() {
      this.$Dialog
        .confirm({
          title: "退出登录",
          message: `亲爱的&nbsp;<b style="font-size:17px">${this.userinfos.username}</b>&nbsp;确认退出吗?`,
        })
        .then(() => {
          this.$store.commit("loginOut");
        });
    },
    getData() {
      this.bottomLists = JSON.parse(window.localStorage.getItem("extradata"));
    },
    //    上传头像
    uploadTx() {
      this.show = true;
      this.onOversize();
    },
    beforeRead(file) {
      if (file.type !== "image/jpeg") {
        this.$Toast("请上传 一张 jpg/jpeg 格式图片");
        return false;
      }
      return true;
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log("file", file);
      console.log("已上传的列表filelist1", this.fileList);
      let paths = "C:/Users/许男/Desktop/";
      this.fileList.push(paths + this.fileList[0].file);
      console.log("已上传的列表filelist2", this.fileList);
    },
    onOversize() {
      this.$Toast("文件大小不能超过 500kb");
    },
    gotoSubs() {
      this.$router.push("/logins");
      this.$Toast.success("进入登录页");
    },
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  overflow-y: scroll;
  section:nth-child(1) {
    width: 100%;
    height: 98px;
    background: url(https://i02piccdn.sogoucdn.com/1a2da54a024999ea);
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 47px;
    left: 0;
    z-index: 3;
    span {
      width: 65%;
      height: 1.6rem;
      text-align: left;
      line-height: 1.6rem;
      a {
        margin-left: 0.3667rem;
        color: #ffffff;
      }
      .loginouts {
        color: brown;
      }
      .userss {
        font-weight: bold;
        font-family: "方正舒体";
        font-size: 27px;
        color: brown;
      }
    }
    .rightpopsss {
      position: fixed;
      right: 9px;
      top: 13.5%;
      background-color: white;
      z-index: 12;
      font-size: 20px;
    }
  }
  section:nth-child(2) {
    height: 80px;
    margin-top: 154px;
    background-color: white;
    background-position-x: -386px;
    background-size: cover;
    .cotss {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .cotss span:nth-child(1) {
      font-size: 20px;
      color: #ff5f3e;
      font-weight: bold;
    }
    .cotss span:nth-child(2) {
      font-size: 12px;
      color: #a6a6a6;
    }
  }
  section:nth-child(3) {
    margin-top: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    div {
      ul {
        justify-content: space-around;
        img {
          border-radius: 10px;
        }
      }
    }
    div:nth-child(1),
    div:nth-child(3) {
      ul {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;

        li {
          height: 43px;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          i {
            width: 12%;
            color: #ff5f3e;
            font-size: 21px;
            padding: 6px 0px;
          }
          span {
            width: 88%;
            color: #3e393e;
            padding: 12px 0px;
            text-align: left;
            border-bottom: 1px solid #eee;
          }
        }
      }
    }
    div:nth-child(2) {
      height: 10px;
      background-color: #eee;
    }
  }
  section:nth-child(4) {
    margin-top: 10px;
    background-color: white;
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      li {
        height: 110px;
        width: 100%;
      }
    }
  }

  .lastsections {
    height: 50px;
  }
  .sureTitles {
    p {
      margin-block-start: 0em;
      margin-block-end: 0em;
    }
    .van-count-down {
      color: #ff5f3e;
      font-size: 16px;
    }
    b {
      margin-left: 13px;
      font-size: 35px;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 132px;
    // border-bottom: 3px solid #ff5f3e;
    background-image: url(https://i02piccdn.sogoucdn.com/1a2da54a024999ea);
    background-size: cover;
    font-family: "宋体";
    text-align: center;
    margin: 0 4px;
    color: #ff5f3e;
  }
  .prices {
    font-size: 15px;
    color: red;
    font-weight: bold;
  }
  .cottsbrother {
    background: #eee;
    width: 3px;
  }
}
</style>