<template>
<div class="router-list">
  <div class="title">UI Components built on Vue 3</div>
  <BasicComponent />
  <FormComponent />
</div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { RouteRecordRaw, useRouter } from 'vue-router'
import BasicComponent from './basic/Index.vue'
import FormComponent from './form/Index.vue'

export default defineComponent({
  components: {
    BasicComponent,
    FormComponent
  },
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
