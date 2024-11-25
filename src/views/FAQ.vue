<template>
    <div class="faq-container">
      <h1>常见问题</h1>
      <div v-for="(item, index) in faqs" :key="index" class="faq-item">
        <button @click="toggleFAQ(index)">
          {{ item.question }}
        </button>
        <p v-if="item.open">{{ item.answer }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FAQ",
    data() {
      return {
        faqs: [
          { question: "问题1？", answer: "请添加工作人员微信。", open: false },
          { question: "问题2？", answer: "一般情况下，24小时内会处理。", open: false },
        ],
      };
    },
    methods: {
      toggleFAQ(index) {
        this.faqs[index].open = !this.faqs[index].open;
      },
    },
  };
  </script>
  
  <style scoped>
  .faq-container {
    max-width: 600px;
    margin: 0 auto;
  }
  .faq-item button {
    width: 100%;
    text-align: left;
    background-color: #f1f1f1;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  .faq-item p {
    margin: 10px 0;
  }
  </style>
  