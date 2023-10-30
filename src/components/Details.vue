<template>
  <div class="content">
    <h2>Essa é a página dos detalhes</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
//import EventBus from "@/services/event-bus.js";
export default defineComponent({
  name: "ProductDetails",
  data() {
    return {
      itemDetailsId: "",
      itemDetails: null,
    };
  },
  created() {
    /*/
      EventBus.$on("selectedId", (testeId: string) => {
      this.itemDetailsId = testeId;
      this.getItemDetails(this.itemDetailsId);
      console.log(this.itemDetailsId);
    });
    /*/
  },
  methods: {
    async getItemDetails(itemId: string) {
      try {
        const response = await axios.get(
          `http://localhost:3000/items/${itemId}`
        );
        this.itemDetails = response.data;
      } catch (error) {
        console.error("Erro ao buscar os detalhes do item:" + error);
      }
    },
  },
});
</script>
