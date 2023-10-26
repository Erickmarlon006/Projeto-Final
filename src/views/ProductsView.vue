<template>
  <ContentPlace />
  <FooterPlace />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ContentPlace from "@/components/main/Content.vue";
import FooterPlace from "@/components/footer/Footer.vue";
export default defineComponent({
  name: "ProductsView",
  components: {
    ContentPlace,
    FooterPlace,
  },
});
</script>
