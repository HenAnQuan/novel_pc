<template>
  <div class="footer">
      <ul>
          <li><a href="">关于我们</a></li>
          <li><a href="">联系我们</a></li>
          <li><a href="">帮助中心</a></li>
          <li><a href="">客服中心</a></li>
          <li><a href="">加入我们</a></li>
          <li><a href="">作家专区</a></li>
          <li><a href="">游戏频道</a></li>
          <li><a href="">举报中心</a></li>
      </ul>
      <p>联系方式 总机 010-83050798-6000 地址：北京市朝阳区天城天辰东路7号楼-2至8层101内北区7层701室</p>
      <p>本站所收录作品、社区话题、书库评论及本站所做之广告均属个人行为，与本站立场无关</p>
      <div>
          <a href="https://www.12377.cn/index.html"><img src="" alt=""></a>
          <a href="http://ningbo.zjjubao.com/"><img src="" alt=""></a>
      </div>
  </div>
</template>

<script>
export default {

}
</script>
@import  from ''
<style>
    .footer{
        width: 100%;
        text-align: center;
        /* display: flex;
        align-items: center; */
    }
    .footer>ul{
        width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-self: center;
    }
    .footer>ul>li:not(:last-child){
        margin-right: 20px;
    }
</style>