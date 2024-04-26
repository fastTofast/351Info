<script setup lang="ts">
import { ref, defineAsyncComponent } from 'vue'
const FroalaEditorCom = defineAsyncComponent(() => import('@/components/FroalaEditorCom.vue'))
import PreviewContent from '@/components/PreviewContent.vue'
const content = ref('')
const config = {
  events: {
    initialized: function () {
      console.log('initialized')
    }
  }
}
const isShowPreview = ref(false)
function preview() {
  isShowPreview.value = !isShowPreview.value
}
</script>
<template>
  <div class="publish-page">
    <div class="header">
      <span @click="preview">{{ isShowPreview ? '关闭预览' : '打开预览' }}</span>
    </div>
    <div class="rich-editor-section">
      <FroalaEditorCom :tag="'textarea'" :config="config" v-model:value="content"></FroalaEditorCom>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
