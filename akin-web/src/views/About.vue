<template>
  <div class="about">
    <ProductListView :product-list="productList"></ProductListView>
    <ProductForm></ProductForm>
    <ProductForm :binding-product="{name:'alperen'}"></ProductForm>
  </div>
</template>
<script>
import ProductListView from "@/components/ProductListView";
import {ProductService} from "@/Service/ProductService";
import ProductForm from "@/Forms/ProductForm";

export default {
  components: {ProductForm, ProductListView},
  data(){
    return{
      productList:[]
    }
  },async created() {
    setTimeout(async ()=>{
      this.productList = await ProductService.getBuildingProduct()
    },2000)

  }
}
</script>