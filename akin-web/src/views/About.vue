<template>
  <div class="about">
    <ProductListView :product-list="productList"></ProductListView>
  </div>
</template>
<script>
import ProductListView from "@/components/ProductListView";
import {ProductService} from "@/Service/ProductService";

export default {
  components: {ProductListView},
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