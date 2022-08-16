<script setup lang="ts">
type ButtonProps = {
  textAlignment?: "left" | "center";
}

const { textAlignment = "left" } = defineProps<ButtonProps>();
const textAlignmentClass = textAlignment === "left" ? "text-left" : "text-center";
</script>

<template>
  <button class="py-4 px-6 border border-gold hover:bg-gold hover:text-white transition ease-out duration-300">
    <span
      class="text-sm font-thin uppercase tracking-[2px]"
      :class="textAlignmentClass"
    >
      <slot />
    </span>
  </button>
</template>
