<script setup lang="ts">
const showScrollToTop = ref<boolean>(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const onDocumentScrolled = (e: Event) => {
  showScrollToTop.value = window.scrollY > window.innerHeight;
};

onMounted(() => {
  document.addEventListener("scroll", onDocumentScrolled);
});

onBeforeUnmount(() => {
  document.removeEventListener("scroll", onDocumentScrolled);
});
</script>

<template>
  <!-- Scroll to Top -->
  <Transition name="fade">
    <div
      class="opacity-0 fixed z-50 right-0 bottom-0 w-28 h-28 p-8 transition ease-out duration-300"
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
</template>

<style scoped></style>
