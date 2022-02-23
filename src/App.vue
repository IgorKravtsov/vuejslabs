<template>
  <component is="main-layout"></component>
</template>

<script>
import { defineComponent } from 'vue'
import MainLayout from '@/layouts/MainLayout'
export default defineComponent({
  name: "App",
  components: {MainLayout}
})
</script>

<style lang="scss">

</style>
