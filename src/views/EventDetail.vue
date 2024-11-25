<template>
    <div class="event-detail">
      <h1>{{ event.title }}</h1>
      <img :src="event.image" :alt="event.title" />
      <p>{{ event.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "EventDetail",
    data() {
      return {
        event: {}, // 保存活动详情数据
      };
    },
    mounted() {
      // 获取路由参数中的活动 ID
      const eventId = this.$route.params.id;
      // 模拟从后台或本地数据中获取活动详情
      const events = [
        {
          id: 1,
          title: "2024 校运会短跑比赛",
          image: "/images/event1.jpg",
          description: "这是关于2024校运会短跑比赛的详细报道...",
        },
        {
          id: 2,
          title: "团队户外拉练",
          image: "/images/event2.jpg",
          description: "这是关于团队户外拉练的详细报道...",
        },
        {
          id: 3,
          title: "训练成果展示",
          image: "/images/event3.jpg",
          description: "这是关于训练成果展示的详细报道...",
        },
        {
          id: 4,
          title: "新生见面会",
          image: "/images/event4.jpg",
          description: "这是关于新生见面会的详细报道...",
        },
      ];
      // 查找对应的活动详情
      this.event = events.find((e) => e.id === parseInt(eventId));
    },
  };
  </script>
  
  <style scoped>
  .event-detail {
    text-align: center;
    padding: 20px;
  }
  
  .event-detail img {
    width: 100%;
    max-width: 800px;
    height: auto;
    margin-bottom: 20px;
  }
  
  .event-detail p {
    font-size: 1.2rem;
    color: #555;
  }
  </style>
  