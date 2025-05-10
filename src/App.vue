<script setup>
import Header from './components/Header.vue'
import info from './components/info.vue'
import we from './components/we.vue'
import price from './components/price.vue'
import gallery from './components/gallery.vue'
// import reviews from './components/reviews.vue'
import contact from './components/contact.vue'
</script>
<template>
  <header>
    <Header />
  </header>
  <main>
    <info />
    <we />
    <price />
    <gallery />
    <reviews />
    <contact />
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
  background-color: var(--accentcolor);
  max-width: 1920px;
  width: 100%;
}
body { 
color: var(--textcolor);
}
main{
  min-width: 768px;
}
@media (min-width: 1024px) {

}
</style>
