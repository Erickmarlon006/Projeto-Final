<template>
  <div class="content">
    <h2>Essa é a página dos detalhes</h2>
    <h3 v-if="itemTitle">{{ itemTitle }}</h3>
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
      itemTitle: "",
    };
  },

  async created() {
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
        this.getItemDetails(this.itemDetailsId);
      });
    },
    async getItemDetails(id: string) {
      this.itemDetails = this.itemsList.filter((item) => item["id"] === id);
      this.itemTitle = this.itemDetails[0].title;
      console.log(this.itemTitle);
    },
  },
});
</script>
