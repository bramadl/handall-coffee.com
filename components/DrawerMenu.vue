<script setup lang="ts"></script>

<template>
  <button class="w-full h-full flex flex-col items-center justify-center gap-2 p-4 group">
    <div class="w-full h-auto flex flex-col items-center justify-center gap-1">
      <div class="w-6 h-auto border-b border-gold -translate-x-1 group-hover:-translate-x-[0.1rem] transition-transform duration-300 ease-out" />
      <div class="w-6 h-auto border-b border-gold -translate-x-2 group-hover:translate-x-[0.35rem] transition-transform duration-300 ease-out" />
    </div>
    <div class="w-full h-auto flex flex-col items-center justify-center gap-1">
      <div class="w-6 h-auto border-b border-gold translate-x-2 group-hover:-translate-x-[0.35rem] transition-transform duration-300 ease-out" />
      <div class="w-6 h-auto border-b border-gold translate-x-1 group-hover:translate-x-[0.1rem] transition-transform duration-300 ease-out" />
    </div>
  </button>
</template>
