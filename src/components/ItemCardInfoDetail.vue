<script setup lang="ts">
import { ref, type PropType } from 'vue'
const props = defineProps({
  detailData: Object as PropType<any>
})
const emits = defineEmits(['toDetail'])
</script>

<template>
  <div class="item-card-detail">
    <div class="personal-info">
      <div class="left">
        <img src="" alt="" />
      </div>
      <div class="right">
        <span>{{ detailData.userName }}</span
        ><span>{{ detailData.createdTime }}</span>
      </div>
    </div>
    <div class="content" v-html="detailData.content"></div>
    <div class="footer-section"></div>
  </div>
</template>
