<template>
  <div style="display: inline-flex; position: fixed;" class="name">
    <h1>Печник Александр </h1>
    <ul style="display: inline-flex; gap: 20px; margin: 0 auto;">
      <li><a href="#info" @click.prevent="scrollTo('info')" style="color:black; text-decoration: none;">О мне</a></li>
      <li><a href="#we" @click.prevent="scrollTo('we')" style="color:black; text-decoration: none;">О нас</a></li>
      <li><a href="#price" @click.prevent="scrollTo('price')" style="color:black; text-decoration: none;">Расценки</a></li>
      <li><a href="#gallery" @click.prevent="scrollTo('gallery')" style="color:black; text-decoration: none;">Галлерея</a></li>
      <li><a href="#news" @click.prevent="scrollTo('news')" style="color:black; text-decoration: none;">Новости</a></li>
      <li><a href="#review" @click.prevent="scrollTo('review')" style="color:black; text-decoration: none;">Отзывы</a></li>
    </ul>
  </div>
</template>

<style scoped>
.name {
  max-width: 1920px;
  width: 100%;
  padding: 5px;
  font-size: 14px;
  line-height: 1.5;
  background-color: var(--accentcolor);
  max-width: 1920px;
  width: 100%;
}
</style>
<script>
export default {
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>

