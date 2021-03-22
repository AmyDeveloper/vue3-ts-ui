<template>
  <y-button type="primary">Button</y-button>
  <y-button type="success" :loading="true"></y-button>
  <y-button type="info" icon="y-icon-loading">Submit</y-button>
  <!-- <Button type="primary">Button</Button> -->
  <y-icon name="loading"></y-icon>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import Button from '../lib/button'

export default defineComponent({
  name: 'App',
  // components:{ Button },
  setup() {
    
  },
})
</script>
