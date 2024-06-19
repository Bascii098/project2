<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <HomePanel title="新鲜好物"  subtitle="新鲜好物 人气推荐">
<div>123456</div>
  </HomePanel>
  <HomePanel title="人气商品"  subtitle="新鲜好物 人气推荐">
  <div>123456</div>
   </HomePanel>

</template>