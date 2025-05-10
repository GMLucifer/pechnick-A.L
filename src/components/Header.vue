<template>
  <div style="display: inline-flex; position: fixed;" class="name">
    <h1>Печник Александр </h1>
    <ul style="display: inline-flex; gap: 20px; margin: 0 auto;">
      <li><a href="#info" @click.prevent="scrollTo('info')" style=" text-decoration: none;">О мне</a></li>
      <li><a href="#we" @click.prevent="scrollTo('we')" style=" text-decoration: none;">О нас</a></li>
      <li><a href="#price" @click.prevent="scrollTo('price')" style=" text-decoration: none;">Расценки</a></li>
      <li><a href="#gallery" @click.prevent="scrollTo('gallery')" style=" text-decoration: none;">Галлерея</a></li>
      <li><a href="#news" @click.prevent="scrollTo('news')" style=" text-decoration: none;">Новости</a></li>
      <li><a href="#review" @click.prevent="scrollTo('review')" style=" text-decoration: none;">Отзывы</a></li>
    </ul>
  </div>
</template>

<style scoped>
.name {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.459);
  max-width: 1920px;
  width: 100%;
  padding: 5px;
  font-size: 14px;
  line-height: 1.5;
  background-color: var(--accentcolor);
  max-width: 1920px;
  width: 100%;
  color: var(--maincolor);
}
a{
  color: var(--maincolor);
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

