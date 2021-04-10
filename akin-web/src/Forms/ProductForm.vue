<template>
  <div class="product-form-box">
    <label>
      Name
    <input type="text" v-model="product.name"> </label>
    {{product.name}}
    <button @click="load">Load</button>
  </div>
</template>

<script>

import {ProductService} from "@/Service/ProductService";

export default {
  name: "ProductForm",
  props: {
    bindingProduct: {type: Object, default: ()=>{return {}}}
  },
  data() {
    return {
      product: {
        name: "",
      }
    }
  },
  created() {
    if (this.$props.bindingProduct.name){
      this.product.name = this.$props.bindingProduct.name
    }
  },
  methods:{
    async load(){
      await ProductService.setProduct("building",this.product);
    }
  }
}
</script>

<style scoped>

</style>