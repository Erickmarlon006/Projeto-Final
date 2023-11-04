<template>
  <div class="content">
    <h2>Essa é a página dos detalhes</h2>
    <div v-if="itemDetails.length">
      <div v-for="item in itemDetails" :key="item.id" class="item-card">
        <h3>{{ item.title }}</h3>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { emitter } from "@/services/event-bus";
export default defineComponent({
  name: "ProductDetails",
  data() {
    return {
      itemDetailsId: "",
      itemsList: [],
      itemDetails: [] as {
        title: string;
        price: number;
        img: string;
        id: string;
      }[],
    };
  },
  async mounted() {
    this.itemsList = await axios
      .get("http://localhost:3000/items/")
      .then((resp) => resp.data)
      .catch((error) => console.log(error));
    this.getItemId();
  },
  methods: {
    async getItemId() {
      emitter.on("selectedId", async (id: string) => {
        this.itemDetailsId = id;
        await this.getItemDetails(this.itemDetailsId);
      });
    },
    async getItemDetails(id: string) {
      console.log(id);
      this.itemDetails = this.itemsList.filter((item) => item["id"] === id);
      console.log(this.itemDetails);
    },
  },
});
</script>
