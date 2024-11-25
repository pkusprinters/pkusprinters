<template>
    <div class="admin-container">
      <h1>后台管理</h1>
      <!-- 报修记录 -->
      <h2>报修记录</h2>
      <ul>
        <li v-for="(record, index) in repairRecords" :key="index">
          姓名：{{ record.name }} | 问题：{{ record.description }} | 联系方式：{{ record.contact }}
        </li>
      </ul>
  
      <!-- 添加新活动 -->
      <h2>添加新活动</h2>
      <form @submit.prevent="addEvent">
        <input v-model="newEvent.title" placeholder="活动标题" required />
        <input v-model="newEvent.date" placeholder="活动日期" required />
        <button type="submit">添加</button>
      </form>
      <h3>活动列表</h3>
      <ul>
        <li v-for="(event, index) in events" :key="index">{{ event.title }} - {{ event.date }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "Admin",
    data() {
      return {
        repairRecords: [
          { name: "张三", contact: "123456789", description: "网络连接异常" },
        ],
        newEvent: {
          title: "",
          date: "",
        },
        events: [
          { title: "技术讲座", date: "2024-11-30" },
        ],
      };
    },
    methods: {
      addEvent() {
        if (this.newEvent.title && this.newEvent.date) {
          this.events.push({ ...this.newEvent });
          this.newEvent.title = "";
          this.newEvent.date = "";
          alert("活动添加成功！");
        } else {
          alert("请完整填写活动信息！");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .admin-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  form {
    margin-bottom: 20px;
  }
  </style>
  