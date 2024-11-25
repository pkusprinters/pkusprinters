<template>
    <!-- 页面模板部分 -->
    <div class="support-container">
      <h1>网络报修</h1>
      <p>请填写以下表单提交您的网络问题，我们将尽快处理。</p>
  
      <!-- 网络报修表单 -->
      <form @submit.prevent="handleSubmit">
        <!-- 用户姓名输入框 -->
        <div class="form-group">
          <label for="name">姓名：</label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="请输入您的姓名"
            required
          />
        </div>
  
        <!-- 联系方式输入框 -->
        <div class="form-group">
          <label for="contact">联系方式：</label>
          <input
            type="text"
            id="contact"
            v-model="contact"
            placeholder="请输入您的联系方式"
            required
          />
        </div>
  
        <!-- 网络问题描述输入框 -->
        <div class="form-group">
          <label for="description">问题描述：</label>
          <textarea
            id="description"
            v-model="description"
            placeholder="请描述您的网络问题"
            required
          ></textarea>
        </div>
  
        <!-- 提交按钮 -->
        <button type="submit" class="submit-button">提交</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    // 组件名称
    name: "Support",
  
    // 组件数据
    data() {
      return {
        // 表单数据
        name: "", // 用户姓名
        contact: "", // 联系方式
        description: "", // 问题描述
      };
    },
  
    // 组件方法
    methods: {
      // 提交表单的方法
      handleSubmit() {
        // 检查是否填写完整
        if (!this.name || !this.contact || !this.description) {
          alert("请完整填写表单！");
          return;
        }
  
        // 模拟提交表单
        // 这里可以替换成实际的API请求逻辑
        alert(`报修提交成功！\n姓名: ${this.name}\n联系方式: ${this.contact}\n问题描述: ${this.description}`);
  
        // 清空表单
        this.name = "";
        this.contact = "";
        this.description = "";
      },
    },
  };
  </script>
  
  <style scoped>
  /* 页面容器样式 */
  .support-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* 表单组样式 */
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  /* 标签样式 */
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  /* 输入框样式 */
  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  /* 提交按钮样式 */
  .submit-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition
  