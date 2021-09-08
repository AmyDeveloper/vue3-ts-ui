<template>
<div class="components-title">Basic Components:</div>
<div
  v-for="(item) in routes"
  :key="item.path"
  @click="goToComponent(item)"
  class="component-item"
>
  <template v-if="item.name">
    <span>{{ item.name }}</span>
    <y-icon class="arrow-right-icon" name="arrow-right"></y-icon>
  </template>
</div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { RouteRecordRaw, useRouter } from 'vue-router'
import basicRoutes from '../../router/basic'


export default defineComponent({
  setup() {
    const router = useRouter()
    const routes = computed(() => basicRoutes)
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
