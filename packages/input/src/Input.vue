<template>
  <div>
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div v-if="$slots.prepend" class="y-input-group__prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        v-if="type !== 'textarea'"
        ref="input"
        class="y-input__inner"
        v-bind="attrs"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      >
      <!-- 前置内容 -->
      <span v-if="$slots.prefix || prefixIcon" class="y-input__prefix">
        <slot name="prefix"></slot>
        <i v-if="prefixIcon" :class="['y-input__icon', prefixIcon]"></i>
      </span>
      <!-- 后置内容 -->
      <span v-if="getSuffixVisible()" class="y-input__suffix">
        <span class="y-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible || !isWordLimitVisible">
            <slot name="suffix"></slot>
            <i v-if="suffixIcon" :class="['y-input__icon', suffixIcon]"></i>
          </template>
          <i
            v-if="showClear"
            class="y-input__icon y-icon-circle-close y-input__clear"
            @mousedown.prevent
            @click="clear"
          ></i>
          <i
            v-if="showPwdVisible"
            class="y-input__icon y-icon-view y-input__clear"
            @click="handlePasswordVisible"
          ></i>
          <span v-if="isWordLimitVisible"></span>
        </span>
      </span>
      <!-- 后置元素 -->
      <div v-if="$slots.append" class="y-input-group__append">
        <slot name="append"></slot>
      </div>
    </template>
    <template v-else>
      <textarea ref="textarea"></textarea>
    </template>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, inject, nextTick, ref } from 'vue'
import { YFormContext, YFormItemContext, yFormItemKey, yFormKey } from '../../tokens/form'
import useAttrs from '../../hooks/use-attrs'
import { UPDATE_MODEL_EVENT } from '../../utils/constants'

export default defineComponent({
  name: 'YInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text'
    },
    suffixIcon: {
      type: String,
      default: '',
    },
    prefixIcon: {
      type: String,
      default: '',
    },
    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      tyoe: Boolean,
      default: false
    },
    maxlength: {
      type: [Number, String]
    }
  },
  emits: [UPDATE_MODEL_EVENT, 'change', 'clear', 'input'],
  setup(props, ctx) {
    const attrs = useAttrs()

    const input = ref(null)
    const textarea = ref(null)
    const focused = ref(false)
    const hovering = ref(false)
    const passwordVisible = ref(false)

    const yForm = inject(yFormKey, {} as YFormContext)
    const yFormItem = inject(yFormItemKey, {} as YFormItemContext)

    const inputOrTextarea = computed(() => input.value || textarea.value)
    const needStatusIcon = computed(() => yForm.statusIcon)
    const validateState = computed(() => yFormItem.validateState || '')
    const inputDisabled = computed(() => props.disabled || yForm.disabled)
    const nativeInputValue = computed(() => (props.modelValue === null || props.modelValue === undefined) ? '' : String(props.modelValue))
    const showClear = computed(() => {
      return props.clearable &&
      !inputDisabled.value &&
      !props.readonly &&
      nativeInputValue.value &&
      (focused.value || hovering.value)
    })
    const showPwdVisible = computed(() => {
      return props.showPassword &&
        !inputDisabled.value &&
        !props.readonly &&
        (!!nativeInputValue.value || focused.value)
    })
    const isWordLimitVisible = computed(() => {
      return props.showWordLimit &&
      props.maxlength &&
      (props.type === 'text' || props.type === 'textarea') &&
      !inputDisabled.value &&
      !props.readonly &&
      !props.showPassword
    })

    const getSuffixVisible = () => {
      return ctx.slots.suffix ||
      props.suffixIcon ||
      showClear.value ||
      props.showPassword ||
      isWordLimitVisible.value ||
      (validateState.value && needStatusIcon.value)
    }

    const clear = () => {
      ctx.emit(UPDATE_MODEL_EVENT, '')
      ctx.emit('change', '')
      ctx.emit('clear')
      ctx.emit('input', '')
    }

    const focus = () => {
      nextTick(() => {
        (inputOrTextarea?.value as any).focus()
      })
    }

    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value
      focus()
    }

    return {
      getSuffixVisible,
      attrs,
      input,
      passwordVisible,
      showClear,
      showPwdVisible,
      isWordLimitVisible,
      clear,
      handlePasswordVisible,
      focus,
      inputOrTextarea,
    }
  },
})
</script>
