<template>
  <div class="container">
    <div class="module">模块 1</div>
    <div class="module">
      <a>xxx</a>
      <van-tabbar v-model="active">
        <van-tabbar-item url="/book" icon="book" text="书籍"></van-tabbar-item>
        <van-tabbar-item url="/search" text="搜索"></van-tabbar-item>
        <van-tabbar-item url="/profile" icon="overview" text="概览"></van-tabbar-item>
      </van-tabbar>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import 'vant/lib/index.css'
export default {
  data() {
    return {
      active: -1
    }
  }
}
</script>
<style>
.global {
  display: flex;
  width: 100vh;
  height: 200vh;
}

body,
html {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.module:nth-child(1) {
  flex: 10%;
}

.module:nth-child(2) {
  flex: 80%;
}

.module:nth-child(3) {
  flex: 10%;
}

nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

nav>a {
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
}

@keyframes progress {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

.progress-bar {
  background-color: #ddd;
  height: 20px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.progress {
  background-color: #4caf50;
  height: 100%;
  width: 50%;
  animation: progress 2s linear;
}
</style>


