<template>
  <div id="app">
    <!-- 这里可以放置全局的组件，例如导航栏 -->
    <Navbar />

    <!-- 路由出口 -->
    <!-- 路由匹配的组件会在这里显示 -->
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"; // 导入导航栏组件

export default {
  name: "App",
  components: {
    Navbar, // 注册 Navbar 组件
  },
};
</script>

<style>
/* 全局样式可以放置在这里或引入外部样式文件 */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
