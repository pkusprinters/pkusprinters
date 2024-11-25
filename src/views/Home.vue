<template>
    <div class="home">
      <!-- 引入 Navbar 组件 -->
      <!-- <Navbar /> -->

      <div class="intro">
        <!-- <img src="./images/slide1.jpg" alt="社团logo" /> -->
        <!-- <h1>欢迎来到北京大学短跑队！</h1> -->
    
        <!-- 添加轮播图 --> 
        <!-- <div class="carousel">
          <img v-for="(image, index) in images" :key="index" :src="image" :alt="'图片' + index" />
        </div> -->
        <Carousel />
    
        <!-- 活动预告 -->
        <div class="events">
          <h2>近期活动</h2>
          <ul>
            <li v-for="(event, index) in events" :key="index">
              <strong>{{ event.title }}</strong> - {{ event.date }}
            </li>
          </ul>
        </div>
      </div>

      <Member />
      <EventShowcase />
    </div>
  </template>
  
<script>
// 导入 Navbar 组件
import Navbar from '../components/Navbar.vue';
import Carousel from "../components/Carousel.vue";
import Member from '@/components/Member.vue';
import EventShowcase from '@/components/EventShowcase.vue';
import VideoPlayer from "../components/VideoPlayer.vue";

export default {
  name: "Home",
  components: {
    Navbar, // 注册 Navbar 组件
    Carousel,
    Member, // 注册 Carousel 组件
    EventShowcase,
    VideoPlayer,
  },
  data() {
    return {
      events: [
        { title: "参加比赛", date: "2024-11-30" },
        { title: "成果展示", date: "2024-12-05" },
      ],
    };
  },
};
</script>
  
<style scoped>
.home {
  text-align: center;
  padding: 20px;
  background-color: #f4f4f4;
}
.home h2{
  color: #990000;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.intro h1 {
  color: #990000;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.intro p {
  font-size: 1.2rem;
  color: #333;
}

.home-container {
  text-align: center;
  padding: 20px;
}
.events ul {
  list-style: none;
  padding: 0;
}
.events li {
  margin-bottom: 10px;
}

</style>
