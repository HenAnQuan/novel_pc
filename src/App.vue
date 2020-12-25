<template>
  <div style="background-color:rgb(245,245,245)">
    <Header style="padding-top:20px"/>
    <div  style="width:1048px;margin:0 auto;background-color:rgb(245,245,245);padding-top:25px">
      <router-view></router-view>
    </div>
    <Footer style="margin-top:50px"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components:{ Header,Footer }
}
</script>

<style>
  @import url(./assets/css/reset.css);
</style>  