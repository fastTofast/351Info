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
const isFullScreenPreview = ref(false)
</script>
<template>
  <div class="editor-content">
    <div class="header">
      <button class="mr-2" @click="isFullScreenPreview = !isFullScreenPreview">
        {{ isFullScreenPreview ? '关闭全屏预览' : '打开全屏预览' }}
      </button>
      <button @click="isShowPreview = !isShowPreview">
        {{ isShowPreview ? '关闭实时预览' : '打开实时预览' }}
      </button>
    </div>
    <div class="publish-page flex">
      <div v-show="!isFullScreenPreview" class="rich-editor-section flex-1 basis-1/2">
        <FroalaEditorCom
          :tag="'textarea'"
          :config="config"
          v-model:value="content"
        ></FroalaEditorCom>
      </div>
      <div
        v-show="isShowPreview || isFullScreenPreview"
        class="preview-section flex-1 basis-1/2 border-solid border-gray-300 border rounded"
        :class="[!isFullScreenPreview ? 'ml-4' : '']"
      >
        <PreviewContent :content="content"></PreviewContent>
      </div>
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
