<template>
    <div class="product-list-view-box">
      <Product v-for="(item,index) in  productList" :key="index" :product="item"></Product>
    </div>
</template>

<script>
import Product from "@/components/Product";
export default {
  name: "ProductListView",
  components: {Product},
  props:{
    productList:Array
  }
}
</script>

<style scoped>
.product-list-view-box{
  display: grid;
  grid-template-columns:  1fr 1fr 1fr;
  grid-gap: 10px;
}
</style>