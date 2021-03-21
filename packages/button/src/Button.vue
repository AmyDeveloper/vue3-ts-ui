<template>
  <button>按钮</button>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

type IButton = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

export default defineComponent({
  name: 'YButton',
  props: {
    name: {
      type: String as PropType<IButton>,
      default: 'primary',
      validator: (val: string) => {
        return [
          'primary',
          'success',
          'warning',
          'danger',
          'info',
          'default'
        ].includes(val)
      }
    },
    icon: {
      type: String, 
      default: '',
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean,
  },
  setup(props, ctx) {
  },
})
</script>
