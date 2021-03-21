<template>
  <i :class="`y-icon-${name}`"></i>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'YIcon',
  props: {
    name: String
  },
  setup(props) {
    
  },
})
</script>
