<template>
    <!-- 导航栏的模板部分 -->
    <nav>
      <ul class="navbar">
        <!-- 使用 Vue Router 提供的 router-link 组件进行页面导航 -->
        <!-- router-link 的 to 属性指定目标路由 -->
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/faq">常见问题</router-link></li>
        <!-- <li><router-link to="/support">网络报修</router-link></li>
        <li><router-link to="/join">加入我们</router-link></li> --> -->
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    // 组件的名称，便于在调试和开发中识别
    name: "Navbar",
  };
  </script>
  
<style scoped>
/* scoped 表示这些样式只作用于本组件 */
nav {
  background-color: #990000; /* 北大校徽红 */
  padding: 1rem; /* 内边距，增加空白空间 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影，增强视觉效果 */
}

.navbar {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: space-around; /* 子元素在水平方向均匀分布 */
  list-style: none; /* 去掉默认的列表样式 */
  padding: 0; /* 移除内边距 */
  margin: 0; /* 移除外边距 */
  width: 100%; /* 设置导航栏宽度为 100% */
  box-sizing: border-box; /* 确保 padding 不影响宽度 */
}

/* 列表项样式 */
ul {
  display: flex;
  justify-content: space-around;
  list-style: none;/* 移除默认的列表样式 */
  margin: 0;
  padding: 0;
}

.navbar li {
  margin: 0;
  padding: 0;
  font-size: 1rem; /* 字体大小 */
  font-weight: bold; /* 字体加粗 */
}

.navbar a {
  text-decoration: none; /* 去掉默认的链接下划线 */
  color: white; /* 链接文字为白色，便于与深红背景对比 */
  padding: 0.5rem 1rem; /* 增加链接内边距，使其更易点击 */
  border-radius: 4px; /* 添加圆角 */
  transition: background-color 0.3s; /* 添加平滑的背景色过渡效果 */
}

.navbar a:hover {
  background-color: #ae0000; /* 比背景稍亮的红色，用于交互反馈 */
  color: #fff; /* 悬停时的文字颜色 */
}

</style>
