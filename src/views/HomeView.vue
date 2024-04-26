<script setup lang="ts">
import { ref } from 'vue'
import ItemCardInfo from '../components/ItemCardInfo.vue'
import ItemCardInfoDetail from '../components/ItemCardInfoDetail.vue'
const detailData = ref({})
function showDetail(data: any) {}
</script>

<template>
  <main>
    <ItemCardInfo @to-detail="showDetail" />
    <ItemCardInfoDetail :detailData="detailData" />
  </main>
</template>
