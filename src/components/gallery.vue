

<script>

import Galleria from 'primevue/galleria';

export default {
    components: {
        Galleria
    },
   data() {
    return {
        images: [
        {
            itemImageSrc: '/pechnick-A.L/img/pech1.jpg',
            thumbnailImageSrc: '/pechnick-A.L/img/pech1.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: '/pechnick-A.L/img/pech2.jpg',
            thumbnailImageSrc: '/pechnick-A.L/img/pech2.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: '/pechnick-A.L/img/pech3.jpg',
            thumbnailImageSrc: '/pechnick-A.L/img/pech3.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: '/pechnick-A.L/img/pech4.jpg',
            thumbnailImageSrc: '/pechnick-A.L/img/pech4.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: '/pechnick-A.L/img/pech5.jpg',
            thumbnailImageSrc: '/pechnick-A.L/img/pech5.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: '/pechnick-A.L/img/pech6.jpg',
            thumbnailImageSrc: '/pechnick-A.L/img/pech6.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: '/pechnick-A.L/img/pech7.jpg',
            thumbnailImageSrc: '/pechnick-A.L/img/pech7.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: '/pechnick-A.L/img/pech8.jpg',
            thumbnailImageSrc: '/pechnick-A.L/img/pech8.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: '/pechnick-A.L/img/pech9.jpg',
            thumbnailImageSrc: '/pechnick-A.L/img/pech9.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: '/pechnick-A.L/img/pech10.jpg',
            thumbnailImageSrc: '/pechnick-A.L/img/pech10.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: '/pechnick-A.L/img/pech11.jpg',
            thumbnailImageSrc: '/pechnick-A.L/img/pech11.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        }
        
      ],
      responsiveOptions: [
        { breakpoint: '1024px', numVisible: 5 },
        { breakpoint: '768px', numVisible: 5 },
        { breakpoint: '560px', numVisible: 5 }
      ]
    };
   },

}
</script>


<template>
    <div class="gallery" id="gallery">
        <h3 style="text-align: center; font-size: 30px; max-width:1920px ; width: 100%;">Галлерея</h3>
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px">
    <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
    </template>
    <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block; width: 80%;" />
    </template>
    <template #caption="slotProps">
        <div class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</div>
        <p class="text-white">{{ slotProps.item.alt }}</p>
    </template>
</Galleria>
    </div>
</template>

<style>
.gallery{
    max-width: 1980px;
    width: 100%;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
}
#thumbnail{
    background-color: var(--maincolor);
}
.p-galleria-thumbnails-content{
    background-color: var(--maincolor);
    border: 1px solid var(--textcolor);
}

@media (max-width:560px) {


}
</style>