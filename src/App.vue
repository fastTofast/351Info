<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="page-content p-4">
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/about">发布</RouterLink>
    <RouterView />
  </div>
</template>

<style scoped></style>
