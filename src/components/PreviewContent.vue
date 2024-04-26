<script setup lang="ts">
defineProps({
  content: String
})
</script>
<template>
  <div class="preview-section fr-view">
    <div class="bg-gray-100 rounded px-2">
      <span class="font-bold text-base align-middle">内容预览</span>
    </div>
    <div class="preview-content px-2" v-html="content"></div>
  </div>
</template>
