<template>
    <div class="header">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="关注" name="first"></el-tab-pane>
            <el-tab-pane label="发现" name="second"></el-tab-pane>
            <el-tab-pane label="深圳" name="third"></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const activeName = ref('second')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
<style lang="less">
.header {
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
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
  }
}
</style>