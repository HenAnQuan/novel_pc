<template>
  <div class="header">
    <el-container class="header_Container">
      <el-header height="120px" class="">
        <el-row :gutter="20" class="header_top">
          <el-col :span="4" :offset="0" class="logo">logo</el-col>
          <el-col :span="7" :offset="4">
            <el-input
              v-model="searchInput"
              placeholder="斗罗大陆"
              size="normal"
              clearable
              @change="search()"
              suffix-icon="el-icon-search"
              color="Danger"
              class="searchInput"
            >
            </el-input>
          </el-col>
          <el-col :span="7" :offset="2" class="header_top_link">
            <img src="../assets/images/bookList.png" width="30px" height="30px" alt="" style="margin-right:10px"/>
            <span>我的书架</span> 
            <img src="../assets/images/email.png" width="30px" height="30px" alt=""/>
            <img src="../assets/images/user.png" width="30px" height="30px" alt=""/>
          </el-col>
          
          <!-- <el-col :span="3" :offset="3" class="bookList pl-20"><img src="../assets/images/bookList.png" width="30px" height="30px" alt="" style="margin-right:10px">我的书架</el-col>
          <el-col :span="2" :offset="0" class="pl-20"><img src="../assets/images/email.png" width="30px" height="30px" alt=""></el-col>
          <el-col :span="2" :offset="0" class="pl-20"><img src="../assets/images/user.png" width="30px" height="30px" alt=""></el-col> -->
        </el-row>

        <el-menu
          :default-active="activeIndex"
          class="header_nav"
          mode="horizontal"
          @select="handleSelect"
          text-color="black"
          active-text-color="#f56c6c"
        >
          <el-submenu index="1" class="submenu">
            <template slot="title" @click="jump()">
              <router-link to="/nav1" style="font-size:16px">全部分类</router-link>
              </template>
            <el-menu-item index="1-1"><i class="el-icon-orange"></i>现代言情</el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-orange"></i>古代言情</el-menu-item>
            <el-menu-item index="1-3"><i class="el-icon-orange"></i>浪漫青春</el-menu-item>
          </el-submenu>
          <el-menu-item index="2"><span>排行榜</span></el-menu-item>
          <el-menu-item index="3"><span></span>免费</el-menu-item>
          <el-menu-item index="4"><span></span>完本</el-menu-item>
          <el-menu-item index="5"><span></span>现代言情</el-menu-item>
          <el-menu-item index="6"><span></span>古言玄幻</el-menu-item>
          <el-menu-item index="7"><span></span>神秘幻想</el-menu-item>
          <el-menu-item index="8" style="position:absolute;right:120px;">
            <img src="../assets/images/money.png" width="25px" height="25px" alt="">  
            <span style="margin-left:5px">充值</span>
          </el-menu-item>
          <el-menu-item index="9" style="position:absolute;right:0">
            <img src="../assets/images/pen.png" width="25px" height="25px" alt="">  
            <span style="margin-left:5px">作家专区</span>  
          </el-menu-item>
        </el-menu>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
      activeIndex: "1",
      activeIndex2: "2",
    };
  },
  methods: {
    search() {},
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if(key=="1"){
        this.$router.push("nav1");
      }
      if(key=="1-1"){
        this.$router.push("nav1-1");
      }
    },
  },
};
</script>

<style>
@import url(../assets/css/reset.css);
.header{
  background-color: white;
}
.header_Container{
  width: 1024px;
  margin: 0 auto;
}


.header_top {
  /* margin-top: 20px; */
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(230,230,230);
  font-size: 14px;
}
.header_top {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.searchInput>input{
    border: 2.5px solid #f56c6c;
    border-radius: 50px;
}
.el-icon-search{
  color: #f56c6c;
  font-size: 22px;
  margin-right: 10px;
}
.header_top_link{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.header_top_link>span:hover{
  color: #f56c6c;
}
.header_top_link>span,.header_top_link>img{
  margin-right: 25px;
}
.pl-20{
  margin-left: 50px;
}
.logo {
  text-align: center;
  border: 3px solid #f56c6c;
  background-color: #f56c6c;
  color:white;
  font-size: 18px;
  border-radius: 5px;
  padding: 7px;
}
a,a:hover{
  text-decoration: none !important;
}
.header_nav>li{
  font-size: 16px;
}
.header_nav .el-menu-item:hover,.el-submenu a:hover{
  color:#f56c6c !important;
}
.submenu>.el-menu-item:hover{
  color:#f56c6c;
}
</style>
