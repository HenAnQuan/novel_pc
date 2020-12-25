<template>
  <div>
    <div class="floor floor1">
      <el-row :gutter="20">
        <el-col :span="19" :offset="0">
          <el-carousel height="250px">
            <el-carousel-item>
              <router-link to=""
                ><img
                  src="../assets/images/5120_pc_1.jpg"
                  alt=""
                  width="100%"
                  height="100%"
              /></router-link>
            </el-carousel-item>
            <el-carousel-item>
              <router-link to=""
                ><img
                  src="../assets/images/5120_pc_2.jpg"
                  alt=""
                  width="100%"
                  height="100%"
              /></router-link>
            </el-carousel-item>
            <el-carousel-item>
              <router-link to=""
                ><img
                  src="../assets/images/5120_pc_3.jpg"
                  alt=""
                  width="100%"
                  height="100%"
              /></router-link>
            </el-carousel-item>
            <el-carousel-item>
              <router-link to=""
                ><img
                  src="../assets/images/5120_pc_4.jpg"
                  alt=""
                  width="100%"
                  height="100%"
              /></router-link>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="5" :offset="0">
          <div class="notice">
            <h2>公告</h2>
            <a href="" class="recommend">[公告] “阅实现”云端颁奖礼</a>
            <a href="">[公告] 北湖月新文来袭</a>
            <a href="">[公告] 2020网文全明星</a>
            <a href="">[公告] 江山一顾新书连载</a>
            <a href="">[公告] 叶语悠然新文来袭</a>
            <a href="">[公告] 好像住你隔壁</a>
          </div>
        </el-col>
      </el-row>
    </div>

    <div v-if="bookList.length > 0">
      <div
        class="floor floor2"
        v-for="(item, epubIndex) in epub"
        :key="epubIndex"
      >
        <h2>{{ item.title }}</h2>
        <el-row :gutter="20" v-if="bookList.length >0">
          <el-col
            v-for="(book, bookIndex) in bookList[epubIndex]"
            :key="bookIndex"
            class="book"
            :span="6"
            :offset="0"
            :class="bookList[epubIndex].length>4 ?
            (bookList[epubIndex].length%4>=bookList[epubIndex].length-bookIndex ? 'book_after' : 'book_before') :'book_after'"
          >
            <img
              :src="`http://statics.zhuishushenqi.com${book.cover}`"
              alt=""
              @click="toDetail(book)"
            />
            <div class="book_Info">
              <h3 class="book_title">{{ book.title }}</h3>
              <p class="book_shortIntro">{{book.shortIntro}}</p>
              <div class="book_sort">
                <div class="book_author">
                  <img src="../assets/images/user.png" alt=""/>
                  <span class="author">{{book.author}}</span>
                </div>
                <span class="majorCate">{{book.majorCate}}</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: null,
      epub: [],
      resouRanking: [],
      bookList: [], //此变量存储各个榜单的书籍类表
      dataReady: false,
    };
  },
  mounted() {
    console.log(this.epub);
    let url = "/user/ranking/gender";
    this.axios.get(url).then((res) => {
      console.log(res.data);
      this.gender = res.data;
      this.epub = res.data.epub;
      for (let index = 0; index < res.data.epub.length; index++) {
        let id = res.data.epub[index]._id;
        let url = "/user/ranking/" + id;
        this.axios.get(url).then((res2) => {
          console.log(res2);
          // this.bookList[index] = res2.data.ranking.books;
          // 当v-if判断的条件是数组或者对象时，及时用arr.length》0/obj 也无法在数据加载完成后重新渲染页面
          // 向对象中新增属性时，Vue无法监听新增的属性的数据变化，从而无法触发视图的改变
          // 所以，通过以下方式就可以可以响应式的更改数据
          this.$set(this.bookList, index, res2.data.ranking.books);
        });
      }
      this.dataReady = true;

      console.log(this.gender.epub);
      console.log(this.bookList);
    });
  },
  methods: {
    toDetail(book){
      this.$router.push({name:"Detail",query:{id:book._id}});
    }
  }
}

</script>

<style scoped>
/* @import url(../assets/css/reset.css); */
.floor {
  background-color: white;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 10px;
}



.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/* .el-carousel__indicators{
  display: flex;
  width: 100%;
  height: 50px;
  background-color: rgba(1, 1, 1, .3);
}
.el-carousel__indicators>.is-active{
  background-color: rgb(255, 57, 85)
}
.el-carousel__indicator--horizontal{
  padding: 0 !important;
}
.el-carousel__indicator{
  flex:1;
  border: 1px solide red;
  display: flex;
}
.el-carousel__indicator>button{
  width: 100%;
  height: 50px;
  background-color: rgba(1, 0, 0, 0);
}
.el-carousel__indicator:nth-child(1)>button:before{
  content:"护苗绿书签活动2020";
  color:white;
  font-size: 15px;
} */



.notice {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 250px;
}
.notice h2 {
  font-weight: normal;
  border-bottom: 2px solid gray;
  padding: 5px;
  margin-bottom: 10px;
}
.notice p,
.notice a {
  flex: 1;
  display: block;
}
.notice > a {
  display: flex;
  align-items: center;
  color: black;
  font-size: 14px;
  padding-bottom: -5px;
  border-bottom: 1px solid lightgray;
  /* line-height: 20px; */
}
.notice > a:hover:not(.recommend) {
  color: rgb(255, 57, 85);
}
.notice > .recommend {
  font-size: 14px;
  font-weight:600;
  color: rgb(255, 57, 85);
}

.floor h2 {
  font-size: 18px;
  font-weight: bold;
  border-bottom: 2px solid lightgray;
  padding-bottom: 8px;
}
.book_before{
  /* margin: 10px 0; */
  padding:80px 0;
  display: flex;
  align-items: center;
  height: 140px;
  border-bottom: 1px solid #ccc;
}
.book_after{
  /* margin: 10px 0; */
  padding: 80px 0;
  display: flex;
  align-items: center;
  height: 140px;
}
.book img {
  width: 75px;
  height: 100px;
  margin: 0 10px;
}
.book .book_Info img{
  width: 20px;
  height: 20px;
  margin: 0px;
}
.book_title{
  font-size: 16px;
  font-weight: bold;
}
.book_shortIntro {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 12px;
  margin: 5px 0;
}
.book_sort{
  color: #99a9bf;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.book_author{
  display: flex;
  align-items: center;
}
.author{
  font-size: 9px;
  margin: 0 5px;
}
.majorCate{
  padding: 3px;
  border:1px solid lightgray;
  margin: 0 ;
  font-size: 9px;
}
</style> 