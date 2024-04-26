<script setup lang="ts">
import { ref } from 'vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

const emits = defineEmits(['toDetail'])
const item: any = ref({})
function toDetail(data: any) {
  emits('toDetail', data)
}
</script>

<template>
  <div class="item-card-com" @click="toDetail(item)">
    <div class="personal-info">
      <div class="left">
        <img src="" alt="" />
      </div>
      <div class="right">
        <span>{{ item.userName }}</span
        ><span>{{ item.createdTime }}</span>
      </div>
    </div>
    <div class="content" v-html="item.content"></div>
    <div class="footer-section"></div>
  </div>
</template>
