import { defineComponent, openBlock, createBlock } from 'vue';

var script$1 = defineComponent({
    name: 'YButton',
    props: {
        name: {
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
    },
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("button", null, "按钮"))
}

script$1.render = render$1;
script$1.__file = "packages/button/src/button.vue";

script$1.install = (app) => {
    app.component(script$1.name, script$1); // 注册全局组件
};
const _Button = script$1;
// createApp({}).use(Button)

var script = defineComponent({
    name: 'YIcon',
    props: {
        name: String
    },
    setup(props) {
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("i", {
    class: `y-icon-${_ctx.name}`
  }, null, 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/icon/src/Icon.vue";

script.install = (app) => {
    app.component(script.name, script);
};

const components = [
    _Button,
    script,
];
const install = (app) => {
    components.forEach((component) => {
        app.component(component.name, component);
    });
};
// 使用组件库是可以 createApp().use(xxx)
var index = {
    install
};

export default index;
