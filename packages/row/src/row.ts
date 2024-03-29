import { computed, defineComponent, provide, h } from 'vue'

const YRow = defineComponent({
  name: 'YRow',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  setup(props, { slots }) {
    const gutter = computed(() => props.gutter)
    provide('YRow', {
      gutter,
    })

    const style = computed(() => {
      const ret = {
        marginLeft: '',
        marginRight: '',
      }
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`
        ret.marginRight= ret.marginLeft
      }
      return ret
    })

    return () => h(props.tag, {
      class: [
        'y-row',
        props.justify !== 'start' ? `is-justify-${props.justify}` : '',
        props.align !== 'top' ? `is-align-${props.align}` : '',
      ],
      style: style.value,
    }, slots.default?.())
  }
})

export default YRow