<template>
  <div>
      <el-row :gutter="20">
          <el-col :span="5" :offset="0">
              <sidebar/>
          </el-col>
          <el-col :span="18" :offset="0.5">
              <div style="background-color:white;border-radius: 10px;overflow: hidden;padding:20px">
                  <div class="floor1">
                      <ul>
                          <li class="actived"><a>综合</a></li>
                          <li><a>字数</a></li>
                          <li><a>点击</a></li>
                          <li><a>时间</a></li>
                      </ul>
                  </div>
                  <div style="border:1px solid red;display:flex;">
                      <div>
                          <img src="" alt="">
                          <div>
                              <p></p>
                              <p></p>
                              <div>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </div>
                              <p></p>
                          </div>
                      </div>
                  </div>
              </div>
          </el-col>
      </el-row>
      
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
  components: { Sidebar },
  data() {
      return {
          gender:null,
      }
  },
  mounted() {
    let url = "/user/ranking/gender";
    this.axios.get(url).then(res => {
        console.log(res);
        this.gender = res;
    }) 
  },
}
</script>

<style>
    .floor1{
        margin-bottom: 10px;
        padding: 10px 0;
        height: 30px;
        border-bottom: 1px solid black;
    }
    .floor1>ul>li{
        font-size: 14px;
        padding: 10px 15px;
        /* margin: 10px 15px; */
        display: inline;
    }
    .floor1>ul>li:hover:not(.actived){
        color:#f56c6c;
    }
    .floor1>ul>.actived{
        background:#f56c6c;
        color: white;
    }
</style>