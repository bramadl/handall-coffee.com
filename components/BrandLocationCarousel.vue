<script setup lang="ts">
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const swiperInstance = ref();
const swiperIndex = ref<number>(0);

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

const onSlideChange = () => {
  if (swiperInstance.value) {
    swiperIndex.value = swiperInstance.value.realIndex;
  }
};

const cafeImages = ref([
  "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1474899420076-a61e74989430?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
  "https://images.unsplash.com/photo-1474898856510-884a2c0be546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  "https://images.unsplash.com/photo-1456078003870-929d5986f0f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
  "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1783&q=80",
  "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
  "https://images.unsplash.com/photo-1513639595782-31f25c297fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1505620391902-46b120671eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1514134583630-250e42c36dbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
]);
</script>

<template>
  <article class="relative flex-1 overflow-hidden">
    <div
      class="z-[2] absolute left-0 top-0 -translate-y-1/2 w-full h-20 bg-[#0a0a0a] rounded-[100%]"
    ></div>

    <client-only>
      <Swiper
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        class="relative z-20 h-full select-none cursor-pointer"
        loop
        :modules="[Autoplay]"
        :slides-per-view="3"
        :space-between="48"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="image in cafeImages" :key="image">
          <img
            class="w-full aspect-[4/6] object-cover select-none"
            :src="image"
          />
        </SwiperSlide>
      </Swiper>
    </client-only>

    <div
      class="z-[2] absolute left-0 bottom-0 translate-y-1/2 w-full h-20 bg-[#0a0a0a] rounded-[100%]"
    ></div>

    <div
      class="z-10 absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 text-white"
    >
      <div class="relative w-[400px] h-full mx-auto rounded-full bg-white/5">
        <div
          class="absolute bg-gold h-full rounded-full transition-all ease-out duration-300"
          :style="{
            left: `${(swiperIndex / Math.ceil(cafeImages.length)) * 100}%`,
            width: `${(1 / Math.ceil(cafeImages.length)) * 100}%`,
          }"
        />
      </div>
    </div>
  </article>
</template>
