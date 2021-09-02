<template>
<div class="index-router">
  <div class="title">UI Components built on Vue 3</div>
  <div class="components-title">Basic Components:</div>
  <div
    v-for="(item) in routes"
    :key="item.path"
    @click="goToComponent(item)"
    class="index-item"
  >
    <template v-if="item.name">
      <span>{{ item.name }}</span>
      <y-icon class="arrow-right-icon" name="arrow-right"></y-icon>
    </template>
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
  padding: 46px 20px 20px;;
  font-size: 14px;
  .title {
    margin: 0 0 40px;
    padding-left: 16px;
    font-size: 18px;
  }
  .components-title {
    color: rgba(69, 90, 100, 0.6);
    margin: 24px 0 8px 16px;
  }
  .index-item {
    margin: 0 0 12px;
    padding-left: 20px;
    color: #323233;
    border-radius: 99px;
    font-weight: 600;
    line-height: 40px;
    background: #f7f8fa;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .arrow-right-icon {
      color: #B6C3D2;
      position: relative;
      right: 16px;
    }
  }
}
</style>
