// 导入 Vue
import { createApp } from "vue";

// 导入根组件
import App from "./App.vue";

// 导入路由
import router from "./router";

// 导入全局样式文件
import "./assets/styles.css";

// 创建 Vue 应用并挂载到 #app
createApp(App).use(router).mount("#app");
