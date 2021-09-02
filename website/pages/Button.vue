<template>
  <y-button type="primary">Button</y-button>
  <y-button circle type="success" :loading="true"></y-button>
  <y-button disabled round type="info" icon="y-icon-menu">Submit</y-button>
  <br />
   <y-button-group>
    <y-button>y-button-group1</y-button>
    <y-button>y-button-group2</y-button>
    <y-button>y-button-group3</y-button>
  </y-button-group>
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  setup() {
    
  },
})
</script>
