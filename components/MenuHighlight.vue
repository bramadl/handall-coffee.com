<script setup lang="ts">
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
</script>

<template>
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
            <h3 class="font-merriweather text-lg uppercase font-thin text-gold">
              {{ food.name }}
            </h3>
            <p class="font-merriweather text-lg uppercase font-thin text-gold">
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
            <h3 class="font-merriweather text-lg uppercase font-thin text-gold">
              {{ food.name }}
            </h3>
            <p class="font-merriweather text-lg uppercase font-thin text-gold">
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
    <button class="py-4 px-6 border border-gold hover:bg-gold hover:text-white transition ease-out duration-300">
      <span class="text-sm font-thin uppercase tracking-[2px]">
        View All Menu
      </span>
    </button>
  </div>
</template>
