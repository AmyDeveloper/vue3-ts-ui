<template>
  <y-row :gutter="24">
    <y-col :span="4" class="col-test">444444</y-col>
    <y-col :span="6" class="col-test2">66</y-col>
  </y-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>
<style lang="scss" scoped>
.col-test {
  background-color: #d3dce6;
}
.col-test2 {
  background-color: #99a9bf;
}
</style>
