import { defineComponent, openBlock, createBlock } from 'vue';

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

export default script;
