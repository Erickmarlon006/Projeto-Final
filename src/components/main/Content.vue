<template>
  <div class="content">
    <h2>Essa é a página de compras</h2>
    <div class="products-collection">
      <div v-for="item in itemsList" :key="item.id" class="product">
        <img
          :src="item.img"
          :alt="'Imagem de ' + item['title']"
          :title="'Imagem de ' + item['title']"
        />
        <h3>{{ item.title }}</h3>
        <p>R${{ item.price.toFixed(2) }}</p>
        <router-link to="/detalhes"
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
import { emitter } from "@/services/event-bus";
export default defineComponent({
  name: "ContentPlace",
  data() {
    return {
      itemsList: [] as {
        title: string;
        price: number;
        img: string;
        id: string;
      }[],
      id: "",
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
      this.id = itemId;
      emitter.emit("selectedId", this.id);
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
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
}
.product {
  width: 180px;
  height: auto;
  background-color: white;
  border-radius: 0.3rem;
}
.product > h3 {
  height: 50px;
  width: 100%;
  font-size: 20px;
  text-align: center;
  align-items: center;
  word-wrap: break-word;
  white-space: normal;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-top: 1rem;
  mix-blend-mode: multiply;
}
input {
  height: 2rem;
  border: none;
  width: 90%;
  margin-block: 1rem;
  border-radius: 0.4rem;
  background-color: rgb(231, 193, 69);
  font-size: 1em;
  cursor: pointer;
}
</style>
