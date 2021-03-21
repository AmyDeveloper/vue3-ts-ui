import { defineComponent, openBlock, createBlock } from 'vue';

var script = defineComponent({
    name: 'YCheckBox',
    props: {
        name: String
    },
    setup(props) {
    },
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, "check box"))
}

script.render = render;
script.__file = "packages/check-box/src/Checkbox.vue";

script.install = (app) => {
    app.component(script.name, script);
};
const _Checkbox = script;

export default _Checkbox;
