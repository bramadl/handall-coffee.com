<script setup lang="ts">
defineProps({
  withLines: {
    type: Boolean,
    default: true
  },
});

const lineClass = "z-10 absolute top-0 w-auto h-full border-l select-none";
</script>

<template>
  <div class="w-full h-auto px-[111px]">
    <div class="relative w-auto h-full flex items-center justify-center border-x border-gold">
      <template v-if="withLines">
        <div :class="lineClass" class="left-0 border-gold -translate-x-px"></div>
        <div :class="lineClass" class="left-1/4 border-[rgba(255,255,255,0.10)]"></div>
        <div :class="lineClass" class="left-2/4 border-[rgba(255,255,255,0.10)]"></div>
        <div :class="lineClass" class="left-3/4 border-[rgba(255,255,255,0.10)]"></div>
        <div :class="lineClass" class="left-full border-gold"></div>
      </template>
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
