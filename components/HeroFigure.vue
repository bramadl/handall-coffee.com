<script setup lang="ts">
const figureClass =
  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] aspect-[4/6]";
</script>

<template>
  <figure class="absolute lg:relative z-20 w-1/2 h-full flex flex-col">
    <img
      class="hidden lg:block -ml-20 -mt-10"
      :class="figureClass"
      src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      alt="Coffee 1"
    />

    <img
      class="hidden lg:block ml-20 mt-10"
      :class="figureClass"
      src="https://images.unsplash.com/photo-1498709112912-9be3173d30be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
      alt="Coffee 2"
    />

    <BrandPatternSquare class="absolute -z-10 -right-24 -bottom-24 lg:right-auto lg:bottom-0 w-60 h-60 object-cover lg:w-auto lg:h-auto" />
  </figure>
</template>
