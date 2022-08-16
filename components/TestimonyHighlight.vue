<script setup lang="ts">
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const testimonies = ref([
  {
    id: 0,
    sender: "Bram Adl",
    message:
      "Gokil, kafenya enak banget. Bisa reservasi jadi saya sama tim kerja di sini dari pagi dan gak nentu mau berakhir kapan. Pokok tempatnya keren banget",
  },
  {
    id: 1,
    sender: "Iqbal Maulana",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quidem vero, impedit veritatis quas molestias optio consequuntur, quia alias distinctio, minus sapiente quaerat quam!",
  },
  {
    id: 2,
    sender: "Achmad Mukhlish",
    message: "OG White Fuel favorit banget!!!",
  },
  {
    id: 3,
    sender: "Galih Pratama",
    message:
      "Saya suka banget kalo ngedesign di sini, soalnya wi-fi nya kenceng dan tempatnya kondusif sih.",
  },
]);
</script>

<template>
  <div class="relative w-full h-auto">
    <div class="flex items-center justify-center mb-12">
      <img
        src="https://laurent.qodeinteractive.com/wp-content/plugins/laurent-core/post-types/testimonials/shortcodes/testimonials/assets/img/quote-mark.png"
        alt="Quotation Mark"
      />
    </div>
    <div class="relative z-20">
      <ClientOnly>
        <Swiper
          class="h-full select-none"
          :modules="[Autoplay]"
          :slides-per-view="1"
          loop
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }"
        >
          <SwiperSlide v-for="testimony in testimonies" :key="testimony.id">
            <div
              class="w-1/2 mx-auto flex flex-col items-center justify-center gap-12"
            >
              <p
                class="font-light font-merriweather tracking-widest leading-[1.75] text-lg text-center italic"
              >
                {{ testimony.message }}
              </p>
              <p
                class="text-2xl font-merriweather text-gold font-bold uppercase tracking-widest"
              >
                {{ testimony.sender }}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </div>
</template>

<style scoped></style>
