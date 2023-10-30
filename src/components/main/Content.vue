<template>
  <div class="content">
    <h2>Essa é a página de compras</h2>
    <div class="products-collection">
      <div v-for="item in itemsList" v-bind:key="item" class="product">
        <h3>{{ item["title"] }}</h3>
        <img
          v-bind:src="item['img']"
          v-bind:alt="'Imagem de ' + item['title']"
          v-bind:title="'Imagem de ' + item['title']"
        />
        <p>R${{ item["price"] }}</p>
        <router-link to="/details"
          ><input
            type="button"
            value="Ver Detalhes"
            @click="showDetails(item['id'])"
        /></router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
//import EventBus from "@/services/event-bus.js";
export default defineComponent({
  name: "ContentPlace",
  data() {
    return {
      itemsList: [],
      testeId: "",
    };
  },
  async mounted() {
    this.itemsList = await axios
      .get("http://localhost:3000/items")
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  },
  methods: {
    showDetails(itemId: string) {
      this.testeId = itemId;
      //EventBus.$emit("selectedId", this.testeId);
    },
  },
});
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.content {
  height: auto;
  min-height: calc(100vh - 140px);
  background-color: rgb(223, 222, 222);
}
.content h2 {
  text-align: left;
  padding: 1rem;
}
.products-collection {
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
}
.products-collection h3 {
  height: 50px;
  width: 100%;
  text-align: center;
  vertical-align: center;
}
.product {
  width: 180px;
  height: auto;
}
img {
  width: 150px;
  height: 200px;
}
input {
  height: 2rem;
  border: none;
  width: 90%;
  border-radius: 0.4rem;
  background-color: rgb(231, 193, 69);
  font-size: 1em;
  cursor: pointer;
}
</style>
