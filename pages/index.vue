<script setup lang="ts"></script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      id="hero-section"
      class="w-full h-screen flex flex-col justify-between"
    >
      <NavigationMenu />
      <div class="w-full flex-1">
        <div
          class="relative w-auto h-full flex items-center justify-center mx-28"
        >
          <div
            class="absolute top-0 left-0 w-auto h-full border-l border-gold -translate-x-px"
          ></div>
          <div
            class="absolute top-0 left-1/4 w-auto h-full border-l border-[rgba(255,255,255,0.10)]"
          ></div>
          <div
            class="absolute top-0 left-2/4 w-auto h-full border-l border-[rgba(255,255,255,0.10)]"
          ></div>
          <div
            class="absolute top-0 left-3/4 w-auto h-full border-l border-[rgba(255,255,255,0.10)]"
          ></div>
          <div
            class="absolute top-0 left-full w-auto h-full border-l border-gold"
          ></div>

          <header
            class="relative w-1/2 h-full flex flex-col items-start justify-center p-12"
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
            <button class="mt-12 py-4 px-6 border border-gold hover:bg-gold hover:text-white transition ease-out duration-300">
              <span
                class="text-sm font-thin uppercase tracking-[2px]"
                >Register Membership</span
              >
            </button>
          </header>

          <figure class="relative w-1/2 h-full flex flex-col">
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
        </div>
      </div>
    </section>
    <!-- ./Hero Section -->
  </div>
</template>

<style scoped>
#hero-section {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.75)
    ),
    url(http://nunforest.com/restory-demo/upload/banners/background@2x.jpg)
      center center/cover fixed;
}
</style>
