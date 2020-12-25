<template>
  <div v-if="data != null">
    <div class="floor1 floor" :class="hidden ? 'floor1_hidden':'floor1_show'">
      <img :src="`http://statics.zhuishushenqi.com${data.cover}`" alt="" />
      <div class="bookInfo">
        <div class="mainInfo">
          <h3 class="title">{{ data.title }}</h3>
          <p class="author">{{ data.author }} 著</p>
        </div>

        <div class="majorCate">
          <span style="border-color: rgb(255, 57, 85">{{
            data.majorCateV2
          }}</span>
          <span style="border-color: rgb(45, 130, 226)">{{
            data.minorCateV2
          }}</span>
        </div>
        <p class="wordCont">{{ calcu(data.wordCount) }}</p>
        <p :class="hidden == true ? 'longIntro_hidden' : 'longIntro_show'">
          {{ data.longIntro }}
        </p>
        <div class="button" @click="open()" v-if="hidden">
          <img src="../assets/images/show.png" alt="" />
          <span style="color: #2560df">展开</span>
        </div>
        <div class="button" @click="open()" v-else>
          <img src="../assets/images/hidden.png" alt="" />
          <span style="color: #2560df">收起</span>
        </div>
        <div class="buttonLine">
          <button>免费试读</button>
          <button>加入书架</button>
          <button>
            <img src="../assets/images/interaction.png" alt="" /> 投票互动
          </button>
          <div class="subscribe">
            <img src="../assets/images/subscribe.png" alt="" />
            <a href="">订阅</a>
            <img src="../assets/images/phone.png" alt="" />
            <a href="">手机阅读</a>
          </div>
        </div>
      </div>
    </div>

    <div class="floor floor2" v-if="source_id != ''">
      <h3>目录</h3>
      <div class="catalog" v-if="chapters.length > 0">
        <div class="catalog_title">
          <span class="cata_title">正文卷-共{{ chapters.length }}章</span>
          <span class="cata_sign">vip</span>
          <span class="cata_wordCount">本卷共 {{ data.wordCount }} 字</span>
        </div>

        <el-row :gutter="20">
          <el-col :span="8" :offset="0" v-for="(chapter, chapterIndex) in chapters" :key="chapterIndex" class="chapterItem">
              <!-- <a :href="chapter.link">{{ chapter.title }}</a>  -->
              <a href="">{{ chapter.title }}</a>
          </el-col>
        </el-row>
      </div>
    </div>
    <div v-else>暂无书源</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      data: null,
      hidden: true,
      activeName: "second",
      catalog: null,
      source_id: "",
      chapters: [],
    };
  },
  mounted() {
    // console.log(this.$route);
    this.id = this.$route.query.id;
    let url = "/user/book/" + this.id;
    this.axios.get(url).then((res) => {
    //   console.log(res);
      this.data = res.data;
    });
    let url2 = `/user/btoc?book=${this.id}&view=summary`;
    this.axios.get(url2).then((res2) => {
      console.log(res2);
      this.source_id = res2.data[0]._id;
      let url3 = `/user/atoc/${this.source_id}?view=chapters`;
      this.axios.get(url3).then((res3) => {
        // console.log(res3);
        for (let index = 0; index < res3.data.chapters.length; index++) {
          this.$set(this.chapters, index, res3.data.chapters[index]);
        }
        
      });
    });
    console.log(this.chapters);
  },
  methods: {
    open() {
      this.hidden = !this.hidden;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    calcu(num){
        return (num/10000).toFixed(1)+" 万字";
        
    }
  },
};
</script>

<style scoped>
@import url(../assets/css/reset.css);
.floor {
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 10px 0 10px 0;
}
.floor1_show {
  display: flex;
  align-items: flex-start;
  padding-bottom: 30px;
}
.floor1_hidden {
  display: flex;
  align-items: flex-start;
  padding-bottom: 10px;
}
.floor1 > img {
  width: 186px;
  height: 240px;
  margin: 20px 20px;
}
.title {
  font-size: 24px;
}
.bookInfo{
    padding-right: 25px;
    margin-top: 30px;
}
.mainInfo {
  display: flex;
  align-items: baseline;
}
.author {
  font-size: 15px;
  margin-left: 10px;
}
.majorCate {
  margin: 15px 0;
}
.majorCate span {
  border: 1px solid rgb(45, 130, 226);
  margin-right: 5px;
  padding: 3px;
}
.wordCont{
    font-size: 15px;
}
.longIntro_hidden {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-right: 20px;
  font-size: 15px;
  line-height: 24px;
}
.longIntro_show {
  padding-right: 20px;
  font-size: 15px;
  line-height: 24px;
}
.button {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row-reverse;
  margin: 5px;
  padding-right: 30px;
}
button {
  outline: none;
}
.button > img {
  width: 15px;
  height: 15px;
  margin-right: 25px;
}

.buttonLine {
  position: relative;
}
.buttonLine > button:first-child {
  background-color: #f56c6c;
  color: white;
}
.buttonLine > button {
  width: 120px;
  border-radius: 50px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid #f56c6c;
  background-color: white;
  margin: 5px 10px 0 0;
  color: #f56c6c;
}
.buttonLine img {
  width: 15px;
  height: 15px;
}
.subscribe {
  position: absolute;
  right: 30px;
  display: flex;
  align-items: center;
}
.subscribe > img {
  margin-right: 5px;
  margin-left: 15px;
}
.subscribe > a {
}

.el-tabs__item.is-active {
  color: #f56c6c !important;
}
.el-tabs__item:hover {
  color: #f56c6c !important;
}

.floor2{
    padding: 25px;
    text-align: center;
}
.floor2>h3{
    font-size: 18px;
    margin-bottom: 10px;
}
.catalog_title{
    display: flex;
    align-items: center;
    width: 100%;
}
.catalog>.el-row{
    padding: 5px;
}
.catalog>div>span{
    margin-right: 10px;
}
.cata_title{
    font-size: 16px;
}
.cata_sign{
    padding: 3px;
    background-color: rgb(230, 73, 11);
    color: white;
    border-radius: 5px;
}
.cata_wordCount{
    font-size: 15px;
}
.chapterItem{
    border-top: 1px solid #e2e0e0;
    padding: 15px;
    text-align: start;
}
</style>