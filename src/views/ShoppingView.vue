<template>
  <div class="container">
    <ShoppingCart />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
export default defineComponent({
  name: "ShoppingView",
  components: {
    ShoppingCart,
  },
  created() {
    console.log("Foi criado");
  },
});
</script>
<style scoped></style>
