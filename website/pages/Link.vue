<template>
  <y-link>默认链接</y-link>
  <y-link type="primary">主要链接</y-link>
  <y-link type="warning" :underline="true">警告链接 有下划线</y-link>
  <y-link type="success" disabled>成功链接 禁用</y-link>
  <y-link icon="edit" type="info">编辑</y-link>
  <y-link>查看<i name="view"></i></y-link>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>
