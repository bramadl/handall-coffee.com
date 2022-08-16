<script setup lang="ts">
type FacilityProps = {
  id: 0,
  icon: string;
  name: string;
  description: string;
};

const facilities = ref<FacilityProps[]>([
  {
    id: 0,
    icon: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/home-3-icon-img-1.png",
    name: "Handall Coffee",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti velit consequuntur.",
  },
  {
    id: 0,
    icon: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/home-3-icon-img-2.png",
    name: "Handall Breakfast",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti velit consequuntur.",
  },
  {
    id: 0,
    icon: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/home-3-icon-img-4.png",
    name: "Handall Music",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti velit consequuntur.",
  },
  {
    id: 0,
    icon: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/home-3-icon-img-5.png",
    name: "Handall Membership",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti velit consequuntur.",
  },
]);
</script>

<template>
  <div class="w-full grid grid-cols-4 py-16">
    <article
      v-for="facility in facilities"
      :key="facility.id"
      class="flex flex-col items-center gap-8 px-4 text-center"
    >
      <img
        class="w-24 h-24"
        :src="facility.icon"
        loading="lazy"
      />
      <h2 class="font-merriweather font-thin text-gold uppercase text-lg tracking-widest">
        {{ facility.name }}
      </h2>
      <p class="font-thin tracking-wider leading-[1.75] text-sm">
        {{ facility.description }}
      </p>
    </article>
  </div>
</template>
