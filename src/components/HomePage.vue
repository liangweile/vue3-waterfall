<template>
  <div class="home">
    <el-container>
      <el-header><Header></Header></el-header>
      <el-main><Main></Main></el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script setup>
import Header from './common/HeaderPage.vue'
import Main from './common/MainPage.vue'
import Footer from './common/FooterPage.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.home {
  width: 100%;
  height: 100%;
  .el-main {
    margin-top: 0px;
  }
  .el-header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 999;
    display: flex;
    justify-content: center; /* 水平居中 */
    position: fixed;
  }
  .el-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 999;
    display: flex;
    justify-content: center; /* 水平居中 */
    position: fixed;
  }
}
</style>
