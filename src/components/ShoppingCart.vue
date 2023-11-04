<template>
  <h2>Carrinho de Compras</h2>
  <div class="cart-collection">
    <div v-for="item in items" :key="item.id" class="cart-item">
      <h2>{{ item.title }}</h2>
      <h2>R${{ item.price.toFixed(2) }}</h2>
      <img :src="item.img" :alt="item.title" />
      <input type="button" value="Remover do Carrinho" @click="deleteItem()" />
    </div>
  </div>
  <h2>Preço Total: R$ {{ totalPrice }}</h2>
  <input type="button" value="Finalizar Compra" id="addBtn" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ShoppingCart",
  data() {
    return {
      items: [] as {
        title: string;
        price: number;
        img: string;
        id: string;
      }[],
      totalPrice: 0,
    };
  },
  created() {
    this.items.push(
      {
        title: "The lord of the rings",
        price: 190,
        img: "https://m.media-amazon.com/images/I/51yxqpcD9iL._SY445_SX342_.jpg",
        id: "6a40d997-63b7-40a3-8331-48c70bbce484",
      },
      {
        title: "Modo de apanhar pássaros à mão",
        price: 20,
        img: "https://m.media-amazon.com/images/I/81KsS+J4kmL._SY466_.jpg",
        id: "b3d67835-853c-47a6-94c4-e4c10ae24964",
      },
      {
        title: "O código limpo",
        price: 150,
        img: "https://m.media-amazon.com/images/I/41aHzYSXZkL._SY445_SX342_.jpg",
        id: "445b578a-5722-4968-a640-c775c448103f",
      }
    );
    this.getFinalPrice();
  },
  updated() {
    this.getFinalPrice();
  },
  methods: {
    getFinalPrice() {
      this.totalPrice = 0;
      for (let i = 0; i < this.items.length; i++) {
        this.totalPrice = this.totalPrice + Number(this.items[i].price);
      }
    },
    deleteItem() {
      this.items.shift();
    },
  },
});
</script>
<style scoped>
.cart-collection {
  display: flex;
}
.cart-item {
  width: 300px;
}
.cart-item img {
  width: 150px;
  aspect-ratio: 3/4;
  object-fit: contain;
}
</style>
