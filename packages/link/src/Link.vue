<template>
  <a
    :href="disabled || !href ? null : href"
    :class="[
      'y-link',
      type ? `y-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>

    <span v-if="$slots.default" class="y-link-inner">
      <slot></slot>
    </span>

    <slot v-if="$slots.icon" name="icon"></slot>
  </a>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

type ILinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export default defineComponent({
  name: 'YLink',
  props: {
    type: {
      type: String as PropType<ILinkType>,
      default: 'default',
      validator: (val: string) => {
        return ['default', 'primary', 'success', 'warning', 'info', 'danger'].includes(val)
      }
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    herf: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (event: Event) => {
      if (!props.disabled) {
        emit('click', event)
      }
    }
    return { handleClick }
  },
})
</script>
