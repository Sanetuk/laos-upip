<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // This is just for the prototype to ensure we start at the home page
  router.push('/')
})
</script>

<template>
  <div class="app-container">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
@import './assets/main.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.app-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  margin-top: 50px; /* Match the exact height of the navbar */
  width: 100%;
}

.container {
  width: 100%;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
