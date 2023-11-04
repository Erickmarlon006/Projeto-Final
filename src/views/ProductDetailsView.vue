<template>
  <ProductDetails />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ProductDetails from "@/components/Details.vue";
export default defineComponent({
  name: "ProductDetailsView",
  components: {
    ProductDetails,
  },
});
</script>
<style></style>
