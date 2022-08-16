<script setup lang="ts">
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const mainWrapper = ref();
const swiperInstance = ref();
const swiperIndex = ref<number>(0);
const swiperPerPage = ref<number>(3);
const showScrollToTop = ref<boolean>(false);

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

const cafeMenu = reactive({
  foods: [
    {
      id: 0,
      name: "Fried Rice Beef Marangi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro deserunt quos.",
      price: "Rp 49.000",
      thumbnail:
        "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/00a6d01e-dc80-438c-b54b-e6995dbc8c55_Go-Biz_20220617_140216.jpeg?h=206&w=206&fit=crop&auto=compress",
    },
    {
      id: 1,
      name: "Kwetiaw Goreng Sapi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro deserunt quos.",
      price: "Rp 50.000",
      thumbnail:
        "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/c5366629-42bd-4c7b-af23-cadb77b2d268_Go-Biz_20220617_140441.jpeg?h=206&w=206&fit=crop&auto=compress",
    },
    {
      id: 2,
      name: "Bakmi Karet Lidah Sapi Matah",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro deserunt quos.",
      price: "Rp 40.000",
      thumbnail:
        "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/f49dade0-82aa-46c2-bfd4-0d616bfb2ed2_Go-Biz_20220617_140747.jpeg?h=206&w=206&fit=crop&auto=compress",
    },
    {
      id: 3,
      name: "Aromatic Beef Rib Soup",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro deserunt quos.",
      price: "Rp 72.000",
      thumbnail:
        "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/9c2243fc-e50c-458a-8018-017cf1ff6b23_Go-Biz_20220617_140806.jpeg?h=206&w=206&fit=crop&auto=compress",
    },
  ],
  drinks: [
    {
      id: 0,
      name: "OG White Fuel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro deserunt quos.",
      price: "Rp 33.000",
      thumbnail:
        "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/7b157afe-b410-4cbb-8d59-f12f9e4a9ca5_Go-Biz_20220617_152056.jpeg?h=206&w=206&fit=crop&auto=compress",
    },
    {
      id: 1,
      name: "Tropical Paradise",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro deserunt quos.",
      price: "Rp 28.000",
      thumbnail:
        "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/3be87ef4-1e28-4710-a6c2-ab5311a402b6_Go-Biz_20220617_152329.jpeg?h=206&w=206&fit=crop&auto=compress",
    },
    {
      id: 2,
      name: "Vegan White Fuel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro deserunt quos.",
      price: "Rp 31.000",
      thumbnail:
        "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/6fd5da8a-26af-4f5e-80ad-7503098ef960_Go-Biz_20220617_152244.jpeg?h=206&w=206&fit=crop&auto=compress",
    },
    {
      id: 3,
      name: "Orange Sunset",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus porro deserunt quos.",
      price: "Rp 28.000",
      thumbnail:
        "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/2bb8e25b-b638-4958-936a-29b7dec37bce_Go-Biz_20220617_152425.jpeg?h=206&w=206&fit=crop&auto=compress",
    },
  ],
});

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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper;
};

const onSlideChange = () => {
  if (swiperInstance.value) {
    swiperIndex.value = swiperInstance.value.realIndex;
  }
};

const onDocumentScrolled = (e: Event) => {
  if (mainWrapper.value) {
    showScrollToTop.value = window.scrollY > window.innerHeight;
  }
};

onMounted(() => {
  document.addEventListener("scroll", onDocumentScrolled);
});

onBeforeUnmount(() => {
  document.removeEventListener("scroll", onDocumentScrolled);
});
</script>

<template>
  <main ref="mainWrapper" class="relative">
    <!-- Scroll to Top -->
    <Transition name="fade">
      <div
        class="opacity-0 fixed right-0 bottom-0 w-28 h-28 p-8 transition ease-out duration-300"
        :class="{ 'opacity-100': showScrollToTop }"
      >
        <button
          class="w-full h-full flex items-center justify-center border border-gold"
          @click="scrollToTop"
        >
          <i class="bx bx-chevron-up text-3xl text-gold"></i>
        </button>
      </div>
    </Transition>
    <!-- ./Scroll to Top -->

    <!-- Hero Section -->
    <section
      id="hero-section"
      class="relative w-full h-screen flex flex-col justify-between"
    >
      <NavigationMenu />

      <SectionContainer class="flex-1">
        <header
          class="relative z-20 w-1/2 h-full flex flex-col items-start justify-center p-12"
        >
          <div>
            <h1
              class="font-merriweather text-[4rem] font-bold uppercase tracking-[12px] text-gold"
            >
              Handall
            </h1>
            <p class="mt-3 font-light leading-[1.5]">
              The Pursuit Of Brewing Speciality Coffee That You'll Remember.
            </p>
          </div>
          <button
            class="mt-12 py-4 px-6 border border-gold hover:bg-gold hover:text-white transition ease-out duration-300"
          >
            <span class="text-sm font-thin uppercase tracking-[2px]">
              Register Membership
            </span>
          </button>
        </header>

        <figure class="relative z-20 w-1/2 h-full flex flex-col">
          <img
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] aspect-[4/6] -ml-20 -mt-10"
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
          <img
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] aspect-[4/6] ml-20 mt-10"
            src="https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
            alt=""
          />
        </figure>
      </SectionContainer>

      <BrandPatternCircle
        class="absolute -bottom-1/2 left-[6px] -translate-x-1/4 -translate-y-40 z-20"
      />
    </section>
    <!-- ./Hero Section -->

    <!-- About Section -->
    <section id="about-section" class="w-full h-auto">
      <SectionContainer class="!h-full" direction="column">
        <div class="w-full h-full flex flex-col gap-16 py-16">
          <header
            class="relative z-20 flex flex-col items-center gap-1 text-4xl font-merriweather uppercase"
          >
            <div>
              <span class="text-gold pl-16 pr-4">Increasing</span>
              <span class="text-white font-thin italic">The</span>
            </div>
            <div>
              <span class="font-bold pl-40"> Social Value </span>
            </div>
            <div>
              <span class="font-thin italic lowercase">of</span>
              <span class="font-thin italic px-4">The</span>
              <span class="text-gold">Coffee Industry</span>
            </div>
            <div class="font-thin italic">
              <span class="pl-16">In</span>
              <span class="font-bold pl-16">Malang City</span>
            </div>
          </header>
          <article class="relative flex-1 overflow-hidden">
            <div
              class="z-[2] absolute left-0 top-0 -translate-y-1/2 w-full h-20 bg-[#0a0a0a] rounded-[100%]"
            ></div>
            <client-only>
              <Swiper
                class="relative z-20 h-full select-none cursor-pointer"
                :slides-per-view="swiperPerPage"
                :space-between="48"
                loop
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
              <div
                class="relative w-[400px] h-full mx-auto rounded-full bg-white/5"
              >
                <div
                  class="absolute bg-gold h-full rounded-full transition-all ease-out duration-300"
                  :style="{
                    left: `${
                      (swiperIndex / Math.ceil(cafeImages.length)) * 100
                    }%`,
                    width: `${(1 / Math.ceil(cafeImages.length)) * 100}%`,
                  }"
                />
              </div>
            </div>
          </article>
        </div>
      </SectionContainer>
    </section>
    <!-- ./About Section -->

    <!-- Menu Section -->
    <section id="menu-section" class="w-full h-auto">
      <SectionContainer>
        <div class="w-full grid grid-cols-4 py-16">
          <article class="flex flex-col items-center gap-8 px-4 text-center">
            <img
              class="w-24 h-24"
              src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/home-3-icon-img-1.png"
              loading="lazy"
            />
            <h2
              class="font-merriweather font-thin text-gold uppercase text-lg tracking-widest"
            >
              Handall Coffee
            </h2>
            <p class="font-thin tracking-wider leading-[1.75] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              deleniti velit consequuntur.
            </p>
          </article>
          <article class="flex flex-col items-center gap-8 px-4 text-center">
            <img
              class="w-24 h-24"
              src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/home-3-icon-img-2.png"
              loading="lazy"
            />
            <h2
              class="font-merriweather font-thin text-gold uppercase text-lg tracking-widest"
            >
              Handall Breakfast
            </h2>
            <p class="font-thin tracking-wider leading-[1.75] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              deleniti velit consequuntur.
            </p>
          </article>
          <article class="flex flex-col items-center gap-8 px-4 text-center">
            <img
              class="w-24 h-24"
              src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/home-3-icon-img-4.png"
              loading="lazy"
            />
            <h2
              class="font-merriweather font-thin text-gold uppercase text-lg tracking-widest"
            >
              Handall Music
            </h2>
            <p class="font-thin tracking-wider leading-[1.75] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              deleniti velit consequuntur.
            </p>
          </article>
          <article class="flex flex-col items-center gap-8 px-4 text-center">
            <img
              class="w-24 h-24"
              src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/home-3-icon-img-5.png"
              loading="lazy"
            />
            <h2
              class="font-merriweather font-thin text-gold uppercase text-lg tracking-widest"
            >
              Handall Membership
            </h2>
            <p class="font-thin tracking-wider leading-[1.75] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              deleniti velit consequuntur.
            </p>
          </article>
        </div>
      </SectionContainer>
    </section>
    <!-- ./Menu Section -->

    <!-- Video Section -->
    <section
      id="video-section"
      class="w-full h-auto bg-[url(https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80)] bg-center bg-cover bg-fixed"
    >
      <SectionContainer :with-lines="false">
        <div class="w-full h-96 flex items-center justify-center">
          <button
            class="w-28 h-28 flex items-center justify-center border-4 border-gold hover:bg-gold group transition ease-out duration-300"
          >
            <i
              class="bx bx-play text-6xl text-gold pl-2 group-hover:text-white transition ease-out duration-300"
            ></i>
          </button>
        </div>
      </SectionContainer>
    </section>
    <!-- ./Video Section -->

    <!-- Menu Section -->
    <section id="menu-section" class="w-full h-auto">
      <SectionContainer>
        <div class="w-full h-auto flex flex-col gap-16 py-16">
          <header class="flex flex-col gap-4">
            <div class="flex items-center justify-center gap-8">
              <BrandPatternOrnament />
              <h2
                class="text-4xl font-merriweather text-gold font-bold uppercase tracking-widest"
              >
                Explore Our Menu
              </h2>
              <BrandPatternOrnament />
            </div>
            <div class="w-2/4 mx-auto">
              <p
                class="font-thin tracking-wider leading-[1.75] text-sm text-center"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                perspiciatis! Ducimus blanditiis, maiores id ratione hic
                reiciendis aliquam eum sequi? Tempore iste provident quasi!
              </p>
            </div>
          </header>
          <div class="grid grid-cols-2">
            <ul class="flex flex-col gap-8 px-12">
              <li
                v-for="food in cafeMenu.foods"
                :key="food.id"
                class="flex items-center gap-4"
              >
                <img :src="food.thumbnail" class="w-16 aspect-square" alt="" />
                <article class="flex-1">
                  <div class="flex items-center justify-between">
                    <h3
                      class="font-merriweather text-lg uppercase font-thin text-gold"
                    >
                      {{ food.name }}
                    </h3>
                    <p
                      class="font-merriweather text-lg uppercase font-thin text-gold"
                    >
                      {{ food.price }}
                    </p>
                  </div>
                  <p class="font-thin tracking-wider leading-[1.75] text-sm">
                    {{ food.description }}
                  </p>
                </article>
              </li>
            </ul>
            <ul class="flex flex-col gap-8 px-12">
              <li
                v-for="food in cafeMenu.drinks"
                :key="food.id"
                class="flex items-center gap-4"
              >
                <img :src="food.thumbnail" class="w-16 aspect-square" alt="" />
                <article class="flex-1">
                  <div class="flex items-center justify-between">
                    <h3
                      class="font-merriweather text-lg uppercase font-thin text-gold"
                    >
                      {{ food.name }}
                    </h3>
                    <p
                      class="font-merriweather text-lg uppercase font-thin text-gold"
                    >
                      {{ food.price }}
                    </p>
                  </div>
                  <p class="font-thin tracking-wider leading-[1.75] text-sm">
                    {{ food.description }}
                  </p>
                </article>
              </li>
            </ul>
          </div>
          <div class="relative z-10 flex items-center justify-center">
            <button
              class="mt-12 py-4 px-6 border border-gold hover:bg-gold hover:text-white transition ease-out duration-300"
            >
              <span class="text-sm font-thin uppercase tracking-[2px]">
                View All Menu
              </span>
            </button>
          </div>
        </div>
      </SectionContainer>
    </section>
    <!-- ./Menu Section -->

    <!-- Image Section -->
    <section
      id="image-section"
      class="w-full h-auto bg-[url(https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80)] bg-center bg-cover bg-fixed"
    >
      <SectionContainer :with-lines="false">
        <div class="w-full h-96 flex items-center justify-center"></div>
      </SectionContainer>
    </section>
    <!-- ./Image Section -->

    <!-- Testimony Section -->
    <section id="testimony-section" class="relative w-full h-auto">
      <SectionContainer class="!h-full">
        <div
          class="w-full h-full flex flex-col items-center justify-center py-16"
        >
          <div class="relative w-full h-auto">
            <div class="flex items-center justify-center mb-12">
              <img
                src="https://laurent.qodeinteractive.com/wp-content/plugins/laurent-core/post-types/testimonials/shortcodes/testimonials/assets/img/quote-mark.png"
                alt=""
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
                  <SwiperSlide
                    v-for="testimony in testimonies"
                    :key="testimony.id"
                  >
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
        </div>
      </SectionContainer>
    </section>
    <!-- ./Testimony Section -->

    <!-- Booking Section -->
    <section id="booking-section" class="w-full h-auto">
      <SectionContainer>
        <div class="w-full h-full p-12">
          <div
            class="relative z-10 w-full h-auto flex flex-col gap-16 p-16 bg-neutral-900"
          >
            <header class="flex flex-col gap-4">
              <div class="flex items-center justify-center gap-8">
                <BrandPatternOrnament />
                <h2
                  class="text-4xl font-merriweather text-gold font-bold uppercase tracking-widest"
                >
                  Make Reservation
                </h2>
                <BrandPatternOrnament />
              </div>
              <div class="w-2/4 mx-auto">
                <p
                  class="font-thin tracking-wider leading-[1.75] text-sm text-center"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae, perspiciatis! Ducimus blanditiis, maiores id ratione
                  hic reiciendis aliquam eum sequi? Tempore iste provident
                  quasi!
                </p>
              </div>
            </header>
            <div class="grid grid-cols-4 gap-4">
              <button
                class="text-left py-4 px-6 border border-gold hover:bg-gold hover:text-white transition ease-out duration-300"
              >
                <span class="text-sm font-thin uppercase tracking-[2px]">
                  1 Person
                </span>
              </button>
              <button
                class="text-left py-4 px-6 border border-gold hover:bg-gold hover:text-white transition ease-out duration-300"
              >
                <span class="text-sm font-thin uppercase tracking-[2px]">
                  08 / 08 / 2022
                </span>
              </button>
              <button
                class="text-left py-4 px-6 border border-gold hover:bg-gold hover:text-white transition ease-out duration-300"
              >
                <span class="text-sm font-thin uppercase tracking-[2px]">
                  7.00 P.M
                </span>
              </button>
              <button
                class="py-4 px-6 bg-gold text-white transition ease-out duration-300"
              >
                <span class="text-sm font-bold uppercase tracking-[2px]">
                  Book Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
    <!-- ./Booking Section -->

    <!-- Footer -->
    <footer id="footer" class="w-full h-auto">
      <SectionContainer>
        <div class="w-full h-auto flex flex-col items-start mb-6">
          <div class="w-full grid grid-cols-2">
            <div class="flex flex-col gap-6 px-12">
              <NuxtLink class="inline-block mb-4" to="/">
                <img
                  class="w-16 h-16 border border-gold"
                  src="~/assets/img/logo.png"
                  alt="Logo"
                />
              </NuxtLink>

              <div>
                <p class="font-thin tracking-wider leading-[1.75] text-sm">
                  Handall Coffee, Coffee Shop (0813-4455-7778)
                </p>
                <address
                  class="not-italic font-thin tracking-wider leading-[1.75] text-sm"
                >
                  Jl. Semanggi Timur No.7, <br />
                  Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141
                </address>
                <p class="font-thin tracking-wider leading-[1.75] text-sm">
                  Open Monday - Sunday at 06.00 - 22.00
                </p>
              </div>

              <div class="grid grid-cols-3 gap-6">
                <div>
                  <a
                    class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                    href="#"
                  >
                    Instagram
                  </a>
                </div>
                <div>
                  <a
                    class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                    href="#"
                  >
                    Facebook
                  </a>
                </div>
                <div>
                  <a
                    class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                    href="#"
                  >
                    Twitter
                  </a>
                </div>
                <div>
                  <a
                    class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                    href="#"
                  >
                    Go-food
                  </a>
                </div>
                <div>
                  <a
                    class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                    href="#"
                  >
                    Grab-food
                  </a>
                </div>
                <div>
                  <a
                    class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                    href="#"
                  >
                    Shopee-food
                  </a>
                </div>
              </div>
            </div>
            <div class="px-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5028776149866!2d112.61610131477914!3d-7.946870994276003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e788275dfc0467f%3A0xa6f5f0141e127b0b!2sJl.%20Semanggi%20Timur%20No.7%2C%20Jatimulyo%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065141!5e0!3m2!1sen!2sid!4v1660632623485!5m2!1sen!2sid"
                class="w-full h-full"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div class="w-full mt-12 flex items-center justify-center">
            <p class="font-thin tracking-wider leading-[1.75] text-xs">
              &copy; 2022 Handall Coffee - All rights reserved. Website made by
              <a href="https://fluxt.co" class="font-normal">Fluxt</a>
            </p>
          </div>
        </div>
      </SectionContainer>
    </footer>
    <!-- ./Footer -->
  </main>
</template>
