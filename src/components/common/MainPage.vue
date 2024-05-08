<template>
    <Input/>
    <div class="main">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="推荐" name="first"></el-tab-pane>
            <el-tab-pane label="视频" name="second"></el-tab-pane>
            <el-tab-pane label="直播" name="third"></el-tab-pane>
            <el-tab-pane label="动漫" name="four"></el-tab-pane>
            <el-tab-pane label="游戏" name="five"></el-tab-pane>
            <el-tab-pane label="穿搭" name="six"></el-tab-pane>
            <el-tab-pane label="学习" name="seven"></el-tab-pane>
            <el-tab-pane label="旅行" name="eight"></el-tab-pane>
            <el-tab-pane label="读书" name="nine"></el-tab-pane>
            <el-tab-pane label="职场" name="ten"></el-tab-pane>
        </el-tabs>
    </div>
        <div class="container">
            <div class="column">
            <div v-for="(item, index) in leftColumn" :key="index" class="block">
                <img :src="item.image" class="image" />
                <p class="text">{{ item.text }}</p>
            </div>
            </div>
            <div class="column">
            <div v-for="(item, index) in rightColumn" :key="index" class="block">
                <img :src="item.image" class="image" />
                <p class="text">{{ item.text }}</p>
            </div>
            </div>
        </div>
</template>
<script setup>
import Input from './InputPage.vue'
import { ref, onMounted, onUnmounted } from 'vue'
const activeName = ref('first')
const handleClick = (tab, event) => {
  console.log(tab, event)
}
// 生成随机尺寸和颜色的图片链接
const randomImage = (width, height, bgColor) => `https://placehold.co/${width}x${height}/${bgColor}/${bgColor}`;

// 生成模拟数据
const generateData = () => {
  const data = [];
  // 各种颜色的单词列表
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'black'];
    const texts = ['广州动漫星城怎么哪么多大学生实习卖笔的逛了5个小时，不下问了6次同样的话术“同学可以耽误你20s吗”然后就顿推销，拒绝了还凶的要死。', 
    '住酒店潜规则1、酒店的塑料拖鞋不要穿，很多人的脚气就是这么得来的', 
    '普吉岛的酒店也太好拍啦', 
    '住酒店潜规则1、很多酒店提供两瓶免费矿泉水，有留意有没有针头孔。', 
    '广州到深圳车票也太便宜了吧', 
    '来广州读书的感受,去年12月走过的路，今天又重走了一遍。那天刚好碰到夕阳，那是我见过珠江最美的一次，今天下着小雨非常凉爽又重走一遍，才不到半年时间已经是完全不同的心情和境界。在桥上看着珠江水东流，很感慨我在广州待的这段时间，尽管还不到一年，但是思想改变了很多。', 
    '国内强CBD之---珠江新城', 
    '未按学生票优惠区间买票被告知影响个人诚信', 
    '在长沙街头被帅哥要微信公居然是因为这人,报思，没瓜!只是个实用版攻略价', 
    '你的身材到底能打几分?无偿看身材,爆照评分，秀出好身材!身材打分:1分:没救了2分:辣眼睛'];

  for (let i = 0; i < 10; i++) {
    const width = Math.floor(Math.random() * 200) + 200; // 随机宽度
    const height = Math.floor(Math.random() * 200) + 200; // 随机高度
    const bgColor = colors[Math.floor(Math.random() * colors.length)]; // 随机颜色
    const image = randomImage(width, height, bgColor); // 随机图片链接
    const text = texts[Math.floor(Math.random() * texts.length)]; // 重复标题文字以达到指定长度
    data.push({ image,text });
  }

  return data;
};

// 分割数据，确保当前屏幕完整展示的内容区块项最多为4项
const splitData = (data) => {
  const itemCount = Math.min(data.length, 12);
  const perColumnItemCount = Math.ceil(itemCount / 2); // 每列的项数
  const leftColumn = data.slice(0, perColumnItemCount);
  const rightColumn = data.slice(perColumnItemCount, itemCount);
  return { leftColumn, rightColumn };
};

// 数据
const mockData = ref([]);
const leftColumn = ref([]);
const rightColumn = ref([]);

// 页面加载时生成数据并分割
onMounted(() => {
  mockData.value = generateData();
  const { leftColumn: left, rightColumn: right } = splitData(mockData.value);
  leftColumn.value = left;
  rightColumn.value = right;
});

// 窗口大小变化时重新分割数据
onMounted(() => {
  const handleResize = () => {
    const { leftColumn: left, rightColumn: right } = splitData(mockData.value);
    leftColumn.value = left;
    rightColumn.value = right;
  };
  window.addEventListener('resize', handleResize);
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });
});

// const scrollContainer = ref(null);
// // 处理滚动事件
// const handleScroll = () => {
//   const container = scrollContainer.value;
//   if (container.scrollHeight - container.scrollTop <= container.clientHeight + 200) {
//     // 如果滚动到距离底部200像素内，则加载更多图片数据
//     loadMoreImages();
//   }
// };

// 加载更多图片数据的逻辑
// const loadMoreImages = async () => {
//   try {
//     // 调用后端接口获取更多图片数据，这里假设使用了axios库
//     const response = await axios.get('/api/images', {
//       params: {
//         page: currentPage.value + 1, // 请求下一页的数据
//         pageSize: 10 // 每页的数量
//       }
//     });

//     // 将新数据添加到已有的图片数据列表中
//     const newData = response.data;
//     mockData.value = [...mockData.value, ...newData];

//     // 更新当前页数
//     currentPage.value++;
//   } catch (error) {
//     console.error('Failed to load more images:', error);
//   }
// };

// 监听页面加载时以及组件卸载时的事件，进行滚动事件的添加和移除
// onMounted(() => {
//   scrollContainer.value.addEventListener('scroll', handleScroll);
// });
// onUnmounted(() => {
//   scrollContainer.value.removeEventListener('scroll', handleScroll);
// });
</script>
<style lang="less">
.main {
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
  .main {
    flex-direction: column;
    align-items: left;
  }
}
.container {
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    .column {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .block {
        width:90%;
        text-align: center;
        .image {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }
        .title {
            margin-top: 10px;
        }
        .text {
            margin-top: 5px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* 最多显示两行 */
            -webkit-box-orient: vertical;
            text-overflow: ellipsis; /* 超过两行用省略号显示 */
        }
    }
}
/* 在手机端将两列布局变为垂直排列 */
@media (max-width: 768px)  {
  .container {
    overflow: hidden;
    display: flex;
    justify-content: space-around;
  }
  .column {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .block {
    width:90%;
    .image {
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }
    .title {
        margin-top: 10px;
    }
    .text {
        margin-top: 5px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* 最多显示两行 */
        -webkit-box-orient: vertical;
        text-overflow: ellipsis; /* 超过两行用省略号显示 */
    }
  }
}
</style>