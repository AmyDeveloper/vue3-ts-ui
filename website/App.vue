<template>
  <y-button type="primary">Button</y-button>
  <y-button circle type="success" :loading="true"></y-button>
  <y-button disabled round type="info" icon="y-icon-menu">Submit</y-button>
  <Button type="primary">Button</Button>
  <y-icon name="loading"></y-icon>
  <y-icon name="menu"></y-icon>
  <br />
  <div>------------</div>
  <y-button-group>
    <y-button>y-button-group1</y-button>
    <y-button>y-button-group2</y-button>
    <y-button>y-button-group3</y-button>
  </y-button-group>
  <br />
  <div>-----------</div>
  <y-row :gutter="24">
    <y-col :span="4" class="col-test">444444</y-col>
    <y-col :span="6" class="col-test2">66</y-col>
  </y-row>
  <br />
  <y-link>默认链接</y-link>
  <y-link type="primary">主要链接</y-link>
  <y-link type="warning" :underline="true">警告链接 有下划线</y-link>
  <y-link type="success" disabled>成功链接 禁用</y-link>
  <y-link icon="edit" type="info">编辑</y-link>
  <y-link>查看<i name="view"></i></y-link>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../lib/button'

export default defineComponent({
  name: 'App',
  components:{ Button },
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
