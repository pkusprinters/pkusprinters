<template>
    <div class="carousel">
      <!-- 显示当前激活的图片 -->
      <div class="carousel-item" v-for="(image, index) in images" :key="index" :class="{ active: currentIndex === index }">
        <img :src="image" alt="carousel image" />
      </div>
  
      <!-- 左右导航按钮 -->
      <button class="prev" @click="prevSlide">&lt;</button>
      <button class="next" @click="nextSlide">&gt;</button>
  
      <!-- 指示器 -->
      <div class="indicators">
        <span
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Carousel",
    props: {
      images: {
        type: Array,
        required: true, // 父组件必须传递图片数组
      },
      //自动轮播
      autoPlayInterval: {
      type: Number,
      default: 1000, // 自动轮播时间间隔（毫秒）
    },
    },
    data() {
      return {
        images: [
            require('@/assets/images/slide1.jpg'),
            require('@/assets/images/slide2.jpg'),
            require('@/assets/images/slide3.jpg'),
        ],
        currentIndex: 0, // 当前显示的图片索引
        autoPlayTimer: null, // 保存定时器的引用
      };
    },
    methods: {
      // 切换到上一张
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      // 切换到下一张
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      // 跳转到指定图片
      goToSlide(index) {
        this.currentIndex = index;
      },
      // 开始自动轮播
    startAutoPlay() {
    this.stopAutoPlay(); // 先清除可能存在的定时器
    this.autoPlayTimer = setInterval(() => {
        this.nextSlide(); // 自动切换到下一张
    }, this.autoPlayInterval);
    },
    // 停止自动轮播
    stopAutoPlay() {
    if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer);
        this.autoPlayTimer = null;
    }
    },
    },
    mounted() {
        // 组件挂载时启动自动轮播
        this.startAutoPlay();
    },
    beforeUnmount() {
        // 组件卸载前清除定时器
        this.stopAutoPlay();
    },
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    width: 100%; /* 设置轮播图宽度为 100% */
    max-width: 100%; /* 避免出现额外限制 */
    height: 400px; /* 固定高度 */
    /* max-width: 600px; */
    margin: 0 auto;
    overflow: hidden;/* 确保内容溢出时不显示 */
    background-color: #f8f9fa; /* 容器背景色 */
    box-sizing: border-box; /* 确保 padding 不影响宽度 */
  }
  
  .carousel-item {
    display: none;
    width: 100%;
    height: 100%;
  }
  
  .carousel-item.active {
    display: block;
  }

  .carousel-item img {
    background-color: #ffffff; /* 添加浅灰色背景，突出图片区域 */
    padding: 10px; /* 为图片添加内边距，使其与背景色有分隔 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加阴影效果，增强层次感 */
  }
  
  img {
    width: 100%; /* 让图片宽度尽可能填满框 */
    height: 100%; /* 让图片高度尽可能填满框 */
    object-fit: contain; /* 确保图片完整显示并维持原始比例 */
    object-position: center; /* 图片居中显示 */
    background-color: #f4f4f4; /* 可选，添加背景色以区分空白区域 */
  }
  
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
  }
  
  button.prev {
    left: 10px;
  }
  
  button.next {
    right: 10px;
  }
  
  .indicators {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .indicators span {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background: gray;
    border-radius: 50%;
    cursor: pointer;
  }
  
  .indicators span.active {
    background: black;
  }
  </style>
  