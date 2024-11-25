<template>
    <div class="event-section">
      <!-- <h2>活动剪影</h2> -->
      <div class="event-slider-wrapper">
        <!-- 左侧按钮 -->
        <!-- <button class="prev" @click="scrollLeft">&lt;</button> -->
        <!-- 活动滑动区域 -->
        <div class="event-slider" ref="slider">
          <div
            class="event-card"
            v-for="(event, index) in events"
            :key="index"
            @click="goToEventDetail(event.id)"
          ><!-- 点击事件 -->
            <div class="event-image">
              <img :src="event.image" :alt="event.title" />
            </div>
            <div class="event-content">
              <h3>{{ event.title }}</h3>
            </div>
          </div>
        </div>
        <!-- 右侧按钮 -->
        <!-- <button class="next" @click="scrollRight">&gt;</button> -->
      </div>
    </div>
  </template>

<script>
export default {
  name: "EventShowcase",
  data() {
    return {
      events: [
        {
          id: 1, // 活动 ID
          title: "2024 校运会短跑比赛",
          image: require("@/assets/images/event1.jpg"),
        },
        {
          id: 2,
          title: "团队户外拉练",
          image: require("@/assets/images/event2.jpg"),
        },
        {
          id: 3,
          title: "训练成果展示",
          image: require("@/assets/images/event3.jpg"),
        },
        {
          id: 4,
          title: "新生见面会",
          image: require("@/assets/images/event4.jpg"),
        },
      ],
    };
  },
  methods: {
    scrollLeft() {
      const slider = this.$refs.slider;
      slider.scrollBy({ left: -300, behavior: "smooth" });
    },
    scrollRight() {
      const slider = this.$refs.slider;
      slider.scrollBy({ left: 300, behavior: "smooth" });
    },
    goToEventDetail(eventId) {
      // 跳转到活动详情页，并传递活动 ID
      this.$router.push({ name: "EventDetail", params: { id: eventId } });
    },
  },
};
</script>

<style scoped>
.event-section {
  text-align: center;
  margin: 40px 20px;
}
.event-section h2{
  color: #990000;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.event-slider-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.event-slider {
  display: flex;
  overflow-x: auto;
  gap: 20px; /* 卡片间距 */
  padding: 10px;
  scroll-snap-type: x mandatory;
}

.event-card {
  flex: 0 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  width: 250px;
  scroll-snap-align: center;
}

.event-image img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.event-content h3 {
  margin: 10px 0;
  font-size: 1.2rem;
  color: #333;
}

button {
  background-color: #990000;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

button.prev {
  position: absolute;
  left: -50px;
}

button.next {
  position: absolute;
  right: -50px;
}

/* 隐藏滚动条（可选） */
/* .event-slider::-webkit-scrollbar {
  display: none;
} */
</style>