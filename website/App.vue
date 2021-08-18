<template>
  <y-button type="primary">Button</y-button>
  <y-button circle type="success" :loading="true"></y-button>
  <y-button disabled round type="info" icon="y-icon-menu">Submit</y-button>
  <Button type="primary">Button</Button>
  <y-icon name="loading"></y-icon>
  <y-icon name="menu"></y-icon>
  <br />
  <div>1213</div>
  <y-button-group>
    <y-button>y-button-group1</y-button>
    <y-button>y-button-group2</y-button>
    <y-button>y-button-group3</y-button>
  </y-button-group>
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
