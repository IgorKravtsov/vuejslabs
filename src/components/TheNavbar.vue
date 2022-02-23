<template>
  <nav class="navbar">
    <h3>VUE js Labs</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">LAB1</router-link>
      </li>
      <li>
        <router-link to="/lab2">LAB2</router-link>
      </li>
      <li>
        <router-link to="/lab3">LAB3</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "TheNavbar"
})
</script>

<style scoped>

</style>