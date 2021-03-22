import { defineComponent, computed, openBlock, createBlock, createCommentVNode, renderSlot } from 'vue';

var script = defineComponent({
    name: 'YButton',
    props: {
        type: {
            type: String,
            default: 'primary',
            validator: (val) => {
                return [
                    'primary',
                    'success',
                    'warning',
                    'danger',
                    'info',
                    'default'
                ].includes(val);
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
        console.log(props);
        const classes = computed(() => [
            'y-button',
            'y-button--' + props.type,
            {
                'is-disabled': props.disabled,
                'is-loading': props.loading,
                'is-round': props.round,
            }
        ]);
        return {
            classes
        };
    },
});

const _hoisted_1 = {
  key: 0,
  class: "y-icon-loading"
};
const _hoisted_2 = { key: 2 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", { class: _ctx.classes }, [
    (_ctx.loading)
      ? (openBlock(), createBlock("i", _hoisted_1))
      : createCommentVNode("v-if", true),
    (_ctx.icon && !_ctx.loading)
      ? (openBlock(), createBlock("i", {
          key: 1,
          class: _ctx.icon
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createBlock("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/button/src/button.vue";

script.install = (app) => {
    app.component(script.name, script); // 注册全局组件
};
const _Button = script;
// createApp({}).use(Button)

export default _Button;
