<template>
  <div class ="product-box">
    <div class="photo" :style = "{backgroundColor: product.photo}"></div>
    <AttributeValue name="Marka Adi" :value="product.brand"/>
    <AttributeValue name="Renk" :value="product.color"/>
  </div>
</template>

<script>
import AttributeValue from "@/components/AttributeValue";
export default {
  name: "Product",
  components: {AttributeValue},
  props:{
    product:Object
  }
}
</script>

<style scoped>
    .photo{
      width: 100px;
      height: 100px;
    }
    .brand-name{
      font-weight: bold;
    }
</style>