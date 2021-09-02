<template>
<div class="index-router">
  <div class="components">Components:</div>
  <div
    v-for="(item) in routes"
    :key="item.path"
    @click="goToComponent(item)"
    class="index-item"
  >
   {{ item.name }}
  </div>
</div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { RouteRecordRaw, useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const routes = computed(() => router.options.routes)
    const goToComponent = (item: RouteRecordRaw) => {
      router.push({ name: item.name })
    }
    return {
      routes,
      goToComponent
    }
  },
})
</script>
<style lang="scss" scoped>
.index-router {
  padding: 10px;
  .components {
    margin-bottom: 20px;
    color: #e6a23c;
    font-size: 48px;
  }
  .index-item {
    padding-bottom: 20px;
    color: #99a9bf;
    font-size: 32px;
    text-decoration: underline;
  }
}
</style>
