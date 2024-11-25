<template>
    <div class="video-player">
      <h2>{{ title }}</h2>
      <video ref="video" class="video" controls :poster="poster">
        <source :src="videoSrc" type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
      <div class="controls">
        <button @click="playVideo">播放</button>
        <button @click="pauseVideo">暂停</button>
        <button @click="restartVideo">重新播放</button>
      </div>
    </div>
  </template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    title: {
      type: String,
      default: "视频播放",
    },
    videoSrc: {
      type: String,
      required: true, // 视频源路径
    },
    poster: {
      type: String,
      default: "", // 视频封面
    },
  },
  methods: {
    playVideo() {
      this.$refs.video.play();
    },
    pauseVideo() {
      this.$refs.video.pause();
    },
    restartVideo() {
      this.$refs.video.currentTime = 0;
      this.$refs.video.play();
    },
  },
};
</script>

<style scoped>
.video-player {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.video {
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  background-color: #990000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #ae0000;
}
</style>
