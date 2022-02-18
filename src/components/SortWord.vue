<template>
  <div class="home">
    <van-row>
      <van-col span="6">
        <van-sidebar v-model="activeKey" @change="changeMenu">
          <van-sidebar-item
            :title="item.conts"
            v-for="(item, index) in sortListsAll"
            :key="index"
          />
        </van-sidebar>
      </van-col>
      <van-col span="18">
        <div class="rightlists" v-if="consLenths">
          <keep-alive>
            <router-view
              :changeDatalists="rightDataLists"
              :conts="conts"
            ></router-view>
          </keep-alive>
          <p class="tempss"></p>
        </div>
        <div class="rightlists" v-else>
          <ul>
            <li v-for="(item, index) in sortListsAll" :key="index">
              <img :src="item.imgs" alt="" />
              <span>{{ item.conts }}</span>
            </li>
            <li class="tempsheight"></li>
            <li class="tempsheight"></li>
          </ul>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import "../../public/scss/dist/TempsCss.css";
export default {
  name: "SortWord",
  data() {
    return {
      activeKey: 0,
      sortListsAll: [
        {
          imgs: "https://i03piccdn.sogoucdn.com/4d2a9e73269e04cb",
          conts: "当季流行",
          path: "normalhots",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/181031_20c98cekk381c5i3ladb506e8g290_172x172.png",
          conts: "上衣",
          path: "jackets",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/181203_63cg95db7ifbg8e0aj2bfai3ga325_172x172.png",
          conts: "裙子",
          path: "skirts",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/190908_4ac7i9ea448ej5j16eeh2gfii7hi6_224x224.png",
          conts: "裤子",
          path: "pants",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/200115_1dgli62l42hlcda1a1ag55i4l8ie1_172x172.jpg",
          conts: "套装",
          path: "suits",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/181031_353i8ki02gfl955alfi9k3i9j4i5h_172x172.png",
          conts: "女鞋",
          path: "womanshoes",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/200309_6f03f5511fl8k9ccbh24jh956ld4c_224x224.png",
          conts: "包包",
          path: "baggs",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/190306_6ffi2507dhdicfkj3fcf528aki8ad_224x224.png",
          conts: "男装",
          path: "manskirts",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/200309_86i0e6f5550gl94d8fh8j824fcj9h_224x224.png",
          conts: "男鞋",
          path: "manshoes",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/200309_39cc76l5af0ajdbj5e2hifhk4234f_224x224.png",
          conts: "内衣",
          path: "underwears",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/201028_7dc04d5a9ga791eedgj7lllh76c5i_172x172.png",
          conts: "母婴",
          path: "motherladys",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/200309_27g7f601d0icj1aa21llkgj74kg17_224x224.png",
          conts: "家居",
          path: "homefunnishing",
        },
        {
          imgs: "https://s10.mogucdn.com/mlcdn/c45406/200309_3ka7843k3169b18fch0kkk5474i3i_224x224.png",
          conts: "快抢",
          path: "rightcatch",
        },
      ],
      rightDataLists: [],
      rightlisttops: [],
      consLenths: false,
      conts: "",
    };
  },
  provide() {
    return {
      sortlistalls: this.sortListsAll,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    formalConts(index) {
      console.log("index", index);
    },
    changeMenu(index) {
      this.activeKey = index;
      const currentcategorys = this.sortListsAll[this.activeKey].path;
      this.conts = this.sortListsAll[this.activeKey].conts;
      console.log("当前点击的分类", currentcategorys, this.conts);
      this.$router.push("/sorts/" + currentcategorys);
      //  点击切换回到顶部
      let top = document.documentElement.scrollTop;
      let timeId = setInterval(() => {
        document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeId);
        }
      }, 30);
      this.getData(this.conts);
    },
    async getData(conts) {
      //   const currentcategorys = this.sortListsAll[this.activeKey].conts
      const { data } = await this.$request.post("/goods/search", {
        values: conts,
      });
      console.log("当前点击搜索到的data", data.info);
      if (data.info.length > 0) {
        this.rightDataLists = data.info;
        this.consLenths = true;
      } else {
        //  this.rightDataLists = this.sortListsAll
        this.consLenths = false;
        // this.rightlisttops.push(this.sortListsAll.splice(1,this.sortListsAll.length))
        // console.log("其他发展",this.sortListsAll);
      }

      //  console.log("点击到的data",data.info);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 50px;
  .tempss {
    height: 50px;
  }
}
</style>