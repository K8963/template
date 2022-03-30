<template>
  <div>
    <p>用户名：{{ mainStore.name }}</p>
    <p>用户名长度:{{ mainStore.nameLength }}</p>
    <hr />
    <el-button type="primary">Primary</el-button>
    <button @click="updataName">修改name</button>
  </div>
</template>
<script setup lang="ts">
import { useMainStore } from '@/store/main'
import { onMounted } from 'vue'
const mainStore = useMainStore()
const updataName = () => {
  mainStore.$patch({
    name: '8963',
  })
}
onMounted(() => {
  mainStore.insertPost('哇')
})
</script>
