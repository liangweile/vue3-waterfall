<template>
    <div class="input">
        <el-input 
        v-model="input" 
        placeholder="大家都在搜索“妆容画廊”">
        <template #prefix>
            <el-icon>
                <Search />
            </el-icon>
        </template>
        </el-input>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const input = ref('')
</script>
<style lang="less">
.input {
    position: fixed;
    top: 50px;
    width: 90%;
    background-color: #fff;
    z-index: 999;
    display: flex;
    justify-content: center; /* 水平居中 */
    position: fixed;
    .el-input__inner{
    text-align: center; /* 文本水平居中 */
    width: 100%;
    }
    .el-icon {
        text-align: right; /* 文本水平居中 */
    }
}
</style>