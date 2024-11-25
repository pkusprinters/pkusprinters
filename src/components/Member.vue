<template>
    <div class="team-section">
    <!-- <h2>队员介绍</h2> -->
    <div class="team-slider">
        <div class="card" v-for="(member, index) in members" :key="index">
            <br>
        <div class="card-image">
            <img :src="member.photo" :alt="member.name" />
        </div>
        <div class="card-content">
            <h3>{{ member.name }}</h3>
            <p class="title">{{ member.role }}</p>
            <p class="description">{{ member.description }}</p>
        </div>
        </div>
    </div>
    </div>
    <!-- <img src="@/assets/images/member1.jpg" alt="社团logo" /> -->
  </template>
  
  <script>
  
  export default {
    name: "Member",
    components: {
    },
    data() {
      return {
        members: [
          {
            name: "张三",
            role: "队长",
            description: "擅长100米短跑。",
            photo: require("@/assets/images/member1.jpg"),
          },
          {
            name: "李四",
            role: "队员",
            description: "专攻200米短跑。",
            photo: require("@/assets/images/member2.jpg"),
          },
          {
            name: "王五",
            role: "教练",
            description: "负责训练指导。",
            photo: require("@/assets/images/member3.jpg"),
          },
          {
            name: "XX",
            role: "队员",
            description: "擅长400米",
            photo: require("@/assets/images/member4.jpg"),
          },
        ],
      };
    },
  };
  </script>
  
<style scoped>
.team-section {
  text-align: center;
  margin: 40px 20px;
  /* 背景色，浅灰色，使得浏览者可以很清晰地分辨出这部分是单独的一部分 */
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px; /* 添加圆角效果 */
}

.team-section h2{
  color: #990000;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.team-slider {
  display: flex;
  overflow-x: auto; /* 开启横向滚动 */
  gap: 20px; /* 卡片间距 */
  padding: 10px;
  scroll-snap-type: x mandatory; /* 启用滚动捕捉 */
}

.card {
  flex: 0 0 auto; /* 确保卡片不会缩放 */
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  width: 250px;
  scroll-snap-align: center; /* 滚动时卡片居中 */
}

.card-image img {
  width: 150px; /* 固定宽度 */
  height: 150px; /* 固定高度，确保比例一致 */
  border-radius: 50%; /* 将图片裁剪为圆形 */
  object-fit: cover; /* 确保图片内容按比例适应圆形区域 */
  border: 3px solid #ccc; /* 可选，添加边框让照片更突出 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 可选，添加阴影增强效果 */
  margin: 0 auto; /* 确保居中 */
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  margin: 10px 0 5px;
  font-size: 1.2rem;
  color: #333;
}

.card-content .title {
  font-size: 1rem;
  color: #990000; /* 北大红色 */
  margin-bottom: 10px;
}

.card-content .description {
  font-size: 0.9rem;
  color: #666;
}

/* 隐藏滚动条样式（可选） */
/* .team-slider::-webkit-scrollbar {
  display: none;
} */
</style>