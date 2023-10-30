<template>
  <HeaderPlace />
  <router-view />
</template>

<script lang="ts">
import HeaderPlace from "@/components/header/Header.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomePage",
  components: {
    HeaderPlace,
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
