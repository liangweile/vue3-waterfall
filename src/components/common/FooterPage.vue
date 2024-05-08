<template>
    <div class="footer">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="首页" name="first"></el-tab-pane>
            <el-tab-pane label="购物" name="second"></el-tab-pane>
            <el-tab-pane label="+" name="third"></el-tab-pane>
            <el-tab-pane label="消息" name="four"></el-tab-pane>
            <el-tab-pane label="我" name="five"></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import { ref} from 'vue'
const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
<style lang="less">
 .footer {
    width:100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .demo-tabs {
        .el-tabs__content {
        padding: 0px;
        color: #6b778c;
        font-size: 32px;
        font-weight: 600;
        }
    }
    .el-tabs__item:nth-child(4) {
    background-color: red;
    }
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
  }
}
</style>