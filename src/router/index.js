// 导入必要的模块
// createRouter 和 createWebHistory 是 Vue Router 提供的 API，用于创建路由实例和定义路由的历史记录模式
import { createRouter, createWebHistory } from 'vue-router';

// 导入视图组件
// 这些视图组件对应路由定义的页面
import Home from '../views/Home.vue';

import EventDetail from "../views/EventDetail.vue"; // 导入活动详情页

// 定义路由规则
// 每个路由规则由一个对象组成，包括路径 (path)、名称 (name) 和关联的组件 (component)
const routes = [
  {
    // 定义首页路由
    path: '/', // 当用户访问 "/" 时匹配该路由
    name: 'Home', // 路由的名字，可以在程序中使用，如 `<router-link :to="{ name: 'Home' }">`
    component: Home, // 与该路由关联的组件
  },
  {
    // 定义常见问题页面的路由
    path: '/faq', // "/faq" 对应 FAQ 页面
    name: 'FAQ', // 路由的名字
    // 使用动态导入方式加载组件，提高页面性能
    // 当用户访问 "/faq" 时才加载该组件
    component: () => import('../views/FAQ.vue'),
  },
  {
    path: "/event/:id", // 动态路由匹配活动 ID
    name: "EventDetail",
    component: EventDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
   
