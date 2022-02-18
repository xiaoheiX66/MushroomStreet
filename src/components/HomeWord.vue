<template>
  <div class="home">
    <section>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </section>
    <section>
      <ul>
        <li v-for="(item, index) in showHotS" :key="index">
          <van-image
            round
            :src="item.imgs"
            width="5rem"
            height="5rem"
            @click="popUps"
          />
          <span class="contentsss">{{ item.conts }}</span>
        </li>
      </ul>
    </section>
    <section class="tempsHeight"></section>
    <section>
      <h3>本周流行</h3>
      <div>
        <ul>
          <li v-for="(item, index) in weekHotS" :key="index">
            <van-image
              round
              width="5rem"
              height="5rem"
              :src="item.imgs"
              @click="popUps"
            />
            <span class="contentsss">{{ item.conts }}</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="tempsHeight"></section>
    <section>
      <div class="bottomSorts">
        <van-tabs v-model="active">
          <van-tab title="流行">
            <ul>
              <li
                v-for="item in bottomLists"
                :key="item._id"
                @click="goto(item._id)"
              >
                <img :src="item.img" alt="" height="80%" />
                <div class="jieshaos">
                  <p class="contentsss">&nbsp;{{ item.title }}</p>
                  <p>
                    <span>￥{{ item.price }}</span>
                    <span
                      >{{ item.cfav }}&nbsp;<van-icon
                        name="star-o"
                      />&nbsp;</span
                    >
                  </p>
                </div>
              </li>
            </ul>
          </van-tab>
          <van-tab title="新款">
            <ul>
              <li
                v-for="item in newShopslist"
                :key="item._id"
                @click="goto(item._id)"
              >
                <img :src="item.img" alt="" height="80%" />
                <div class="jieshaos">
                  <p class="contentsss">&nbsp;{{ item.title }}</p>
                  <p>
                    <span>￥{{ item.price }}</span>
                    <span
                      >{{ item.cfav }}&nbsp;<van-icon
                        name="star-o"
                      />&nbsp;</span
                    >
                  </p>
                </div>
              </li>
            </ul>
          </van-tab>
          <van-tab title="精选">
            <ul>
              <li
                v-for="item in sureSelects"
                :key="item._id"
                @click="goto(item._id)"
              >
                <img :src="item.img" alt="" height="80%" />
                <div class="jieshaos">
                  <p class="contentsss">&nbsp;{{ item.title }}</p>
                  <p>
                    <span>￥{{ item.price }}</span>
                    <span
                      >{{ item.cfav }}&nbsp;<van-icon
                        name="star-o"
                      />&nbsp;</span
                    >
                  </p>
                </div>
              </li>
            </ul>
          </van-tab>
        </van-tabs>
      </div>
      <ul>
        <li v-for="item in bottomLists" :key="item._id">
          <a href="#" @click="goto(item._id)">
            <img :src="item.img" alt=""
          /></a>
          <div class="jieshaos">
            <p class="contentsss">&nbsp;{{ item.title }}</p>
            <p>
              <span>￥{{ item.price }}</span>
              <span>{{ item.cfav }}&nbsp;<van-icon name="star-o" />&nbsp;</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
    <section></section>
  </div>
</template>

<script>
export default {
  name: "HomeWord",
  data() {
    return {
      active: 0,
      images: [
        "https://img.zcool.cn/community/01e5dc58004c4ba84a0e282b7fb451.png@1280w_1l_2o_100sh.png",
        "https://img.zcool.cn/community/01a4f258004c78a84a0e282ba15033.png@1280w_1l_2o_100sh.png",
        "https://img.zcool.cn/community/01b37658004c64a84a0e282ba117ba.png@1280w_1l_2o_100sh.png",
      ],
      showHotS: [
        {
          imgs: "http://p1.itc.cn/q_70/images03/20200815/2022d5ad014b4beeb041ddcd154ddc96.jpeg",
          conts: "十点抢券",
        },
        {
          imgs: "http://5b0988e595225.cdn.sohucs.com/q_70,c_zoom,w_640/images/20180922/3481ebaa2b3c4f8fb7fa2f8ce741a581.jpeg",
          conts: "好物特卖",
        },
        {
          imgs: "https://i02piccdn.sogoucdn.com/09a122ce608d2dbb",
          conts: "内购福利",
        },
        {
          imgs: "https://i02piccdn.sogoucdn.com/9fe4bef5d576c59a",
          conts: "初秋上新",
        },
      ],
      weekHotS: [
        {
          imgs: "http://dingyue.nosdn.127.net/GE24S0eqynnbgicmf3nBFW7ae8GoZRtLbCe=fydkIi9e41520068492143.jpg",
          conts: "霸街长袖裙",
        },
        {
          imgs: "http://5b0988e595225.cdn.sohucs.com/images/20180723/8260ec9386e74b35aa10d6184373eead.jpeg",
          conts: "时尚懒人套装",
        },
        {
          imgs: "http://img1.gtimg.com/hn/pics/hv1/104/44/1940/126159824.jpg",
          conts: "微胖遮肉穿搭",
        },
        {
          imgs: "https://pic.ulecdn.com/pic/user_800142278/product/prd20191205/c6d54cc8ae92e392_p800x800_xl.jpg",
          conts: "降温保暖鞋",
        },
        {
          imgs: "https://i01piccdn.sogoucdn.com/fa49fcba1b81f198",
          conts: "青春恋语装",
        },
        {
          imgs: "http://img.mp.sohu.com/upload/20170809/9a135604b9224b998c2f4e65eb0e9fa4_th.png",
          conts: "动感潮人装",
        },
        {
          imgs: "https://t00img.yangkeduo.com/goods/images/2018-08-10/a3a92898e5de65e9fea78d283c0add57.jpeg",
          conts: "口红套装",
        },
        {
          imgs: "http://5b0988e595225.cdn.sohucs.com/images/20191126/4b919f0e05254982868add2ee27c13c2.jpeg",
          conts: "精品包包",
        },
      ],
      bottomLists: [],
      newShopslist: [],
      sureSelects: [],
      conts: "上衣",
    };
  },
  created() {
    this.getData();
    this.sureGetData();
    this.loadingData();
  },
  methods: {
    async getData() {
      const { data } = await this.$request.get("/goods/list", {
        params: { page: 1, size: 50 },
      });
      //   console.log("请求首页数据",data);
      this.bottomLists = data.info.splice(1, 10);
      this.newShopslist = data.info.splice(10, 20);
      //   console.log("bottomlist",this.bottomLists);
    },
    goto(id) {
      console.log("被点了");
      this.$router.push({ name: "Details", query: { id: id } });
      let top = document.documentElement.scrollTop;
      let timeId = setInterval(() => {
        document.documentElement.scrollTop = top -= 550;
        if (top <= 0) {
          clearInterval(timeId);
        }
      }, 50);
    },
    async sureGetData() {
      const { data } = await this.$request.post("/goods/search", {
        values: this.conts,
      });
      this.sureSelects = data.info;
      window.localStorage.setItem(
        "extradata",
        JSON.stringify(this.sureSelects)
      );
    },
    loadingData() {
      console.log("页面加载中...");
    },
    popUps() {
      this.$Toast.fail("商品备货中...");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  img {
    width: 100%;
    height: 80%;
  }
  section:nth-child(1) {
    margin-top: 46px;
    width: 100%;
    img {
      width: 100%;
      height: 209px;
    }
  }
  section:nth-child(2) {
    height: 140px;
    width: 100%;
    background: white;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      li {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 90px;
          height: 90px;
        }
        span {
          margin-top: 3px;
          font-size: 16px;
          color: #666666;
        }
      }
    }
  }
  .tempsHeight {
    width: 94%;
    height: 10px;
    background-color: #eeeeee;
  }
  section:nth-child(4) {
    margin-top: 3px;
    width: 100%;
    height: 260px;
    display: flex;
    flex-direction: column;
    background: white;
    h3 {
      flex: 1;
      margin-block-start: 0.3em;
      margin-block-end: 0.3em;
    }
    div {
      width: 100%;
      height: 90%;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          height: 50%;
          width: 88px;
          display: flex;
          margin-top: 5px;
          flex-direction: column;
          align-items: center;
          img {
            width: 70%;
            height: 70%;
          }
          span {
            font-size: 15px;
            margin-top: 2px;
          }
        }
      }
    }
  }
  section:nth-child(5) {
    margin-top: 10px;
  }
  section:nth-child(6) {
    width: 100%;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      li {
        width: 48%;
        height: 300px;
        margin-top: 7px;
        display: flex;
        flex-direction: column;
        img {
          width: 100%;
          height: 258px;
          border-radius: 10px;
        }
        .jieshaos {
          p:nth-child(1) {
            width: 180px;
            font-size: 15px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          p {
            margin-block-start: 0em;
            margin-block-end: 0em;
          }
          p:nth-child(2) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              width: 40%;
              font-size: 16px;
            }
            span:nth-child(1) {
              color: #ff5777;
              text-align: left;
            }
            span:nth-child(2) {
              text-align: right;
            }
          }
        }
      }
    }
  }
  section:nth-child(7) {
    height: 10px;
    margin-bottom: 60px;
  }
  .contentsss {
    font-size: 14px;
    color: #666666;
  }
}
</style>