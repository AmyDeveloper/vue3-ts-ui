import { defineComponent, h, PropType, inject, computed } from 'vue'

type SizeObject = {
  span: number
  offset: number
}

export default defineComponent({
  name: 'YCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    xs: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject)
    },
    sm: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject)
    },
    md: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject)
    },
    lg: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject)
    },
    xl: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject)
    }
  },
  setup(props, { slots }){
    const { gutter } = inject('YRow', { gutter: { value: 0} })

    const style = computed(() => {
      if (gutter.value) {
        return {
          paddingLeft: `${gutter.value / 2}px`,
          paddingRight: `${gutter.value / 2}px`
        }
      }
      return {}
    })

    const classList = computed(() => {
      const ret: string[] = []
      const pos = ['span', 'offset', 'pull', 'push'] as const
      pos.forEach(prop => {
        const size = props[prop]
        if (typeof size === 'number') {
          if (prop === 'span') ret.push(`y-col-${props[prop]}`)
          else if (size > 0) ret.push(`y-col-${prop}-${props[prop]}`)
        }
      })
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
      sizes.forEach(size => {
        if (typeof props[size] === 'number') {
          ret.push(`y-col-${size}-${props[size]}`)
        } else if (typeof props[size] === 'object') {
          const sizeProps: any = props[size]
          Object.keys(sizeProps).forEach(prop => {
            ret.push(
              prop !== 'span' ? `y-col-${size}-${prop}-${sizeProps[prop]}` : `y-col-${size}-${sizeProps[prop]}`,
            )
          })
        }
      })
      if (gutter.value) {
        ret.push('is-guttered')
      }
      return ret
    })

    return () => h(props.tag, {
      class: ['y-col', classList.value],
      style: style.value,
    }, slots.default?.())
  }
})