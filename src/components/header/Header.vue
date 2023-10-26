<template>
  <div class="header">
    <div class="logo">
      <h2>Logo</h2>
    </div>
    <div class="research">
      <router-link class="link" to="/">Home</router-link> |
      <router-link class="link" to="/carrinho">Carrinho</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeaderPlace",
});
</script>
<style>
.header {
  background-color: rgb(103, 144, 255);
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding-inline: 5%;
}
.link,
.link-active {
  text-decoration: none;
  color: black;
}
</style>
