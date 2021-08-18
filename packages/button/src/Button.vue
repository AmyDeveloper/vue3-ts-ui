<template>
  <button :class="classes">
    <i v-if="loading" class="y-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

type IButton = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'

export default defineComponent({
  name: 'YButton',
  props: {
    type: {
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
    circle: Boolean,
  },
  setup(props, ctx) {
    console.log('button---type', props.type)
    const classes = computed(() => [
      'y-button',
      'y-button--'+ props.type,
      {
        'is-disabled': props.disabled,
        'is-loading': props.loading,
        'is-round': props.round,
        'is-circle': props.circle
      }
    ])
    return {
      classes
    }
  },
})
</script>
