<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="flex flex-col gap-4">
    <div class="flex items-center justify-center gap-8">
      <BrandPatternOrnament />
      <h2
        class="text-4xl font-merriweather text-gold font-bold uppercase tracking-widest"
      >
        {{ title }}
      </h2>
      <BrandPatternOrnament />
    </div>
    <div class="w-2/4 mx-auto">
      <p class="text-center">{{ message }}</p>
    </div>
  </header>
</template>
