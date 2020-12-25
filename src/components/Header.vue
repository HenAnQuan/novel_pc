<template>
  <div class="header">
    <el-container class="header_Container">
      <el-header height="116px" class="">
        <el-row :gutter="20" class="header_top">
          <el-col :span="5" :offset="0" class="logo">logo</el-col>
          <el-col :span="6" :offset="3">
            <el-input
              v-model="searchInput"
              placeholder="斗罗大陆"
              size="normal"
              clearable
              @change="search()"
              suffix-icon="el-icon-search"
              color="Danger"
            >
            </el-input>
          </el-col>
          <el-col :span="3" :offset="3">我的书架</el-col>
          <el-col :span="2" :offset="0">信箱</el-col>
          <el-col :span="2" :offset="0">我的</el-col>
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
              <router-link to="/nav1">全部分类</router-link>
              </template>
            <el-menu-item index="1-1"><i class="el-icon-orange"></i>现代言情</el-menu-item>
            <el-menu-item index="1-2"><i class="el-icon-orange"></i>古代言情</el-menu-item>
            <el-menu-item index="1-3"><i class="el-icon-orange"></i>浪漫青春</el-menu-item>
          </el-submenu>
          <el-menu-item index="2" class=".header_nav_item"><span>排行榜</span></el-menu-item>
          <el-menu-item index="3"><span></span>免费</el-menu-item>
          <el-menu-item index="4"><span></span>完本</el-menu-item>
          <el-menu-item index="5"><span></span>现代言情</el-menu-item>
          <el-menu-item index="6"><span></span>古言玄幻</el-menu-item>
          <el-menu-item index="7"><span></span>神秘幻想</el-menu-item>
          <el-menu-item index="8" style="position:absolute;right:120px;">充值</el-menu-item>
          <el-menu-item index="9" style="position:absolute;right:0">作家专区</el-menu-item>
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
.header{
  background-color: white;
}
.header_Container{
  width: 80%;
  margin: 0 auto;
}


.header_top {
  /* margin-top: 20px; */
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(230,230,230);
}
.header_top {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo {
  text-align: center;
  border: 1px solid #f56c6c;
  border-radius: 5px;
  padding: 7px;
}
a,a:hover{
  text-decoration: none !important;
}
.header_nav_item:hover{
  color:#f56c6c;
}
</style>
