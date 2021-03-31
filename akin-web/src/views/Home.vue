<template>
  <div class="home">
    <ProductListView :product-list="productList"></ProductListView>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductListView from "@/components/ProductListView";
export default {
  name: 'Home',
  components: {
    ProductListView,
  },
  data(){
    return{
      productList:[
        {
          photo:"#ff0",
          brand:"efe tur",
          color:"black"
        },
        {
          photo:"#0ff",
          brand:"zeynep kamil",
          color:"green"
        },
        {
          photo:"#00f",
          brand:"metro",
          color:"blue"
        },
        {
          photo:"#f00",
          brand:"metro 31",
          color:"red"
        }
      ]
    }
  }
}
</script>
