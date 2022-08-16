<script setup lang="ts">
const thumbnail = "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80";
</script>

<template>
  <section
    id="video-section"
    class="w-full h-auto"
    :style="{ background: `url(${thumbnail}) center center/cover fixed;` }"
  >
    <SectionContainer :with-lines="false">
      <div class="w-full h-96 flex items-center justify-center">
        <button class="w-28 h-28 flex items-center justify-center border-4 border-gold hover:bg-gold group transition ease-out duration-300">
          <i class="bx bx-play text-6xl text-gold pl-2 group-hover:text-white transition ease-out duration-300" />
        </button>
      </div>
    </SectionContainer>
  </section>
</template>
