<script setup lang="ts">
const drawerIsOpened = ref<boolean>(false);

const lineGroupClass =
  "w-full h-auto flex flex-col items-center justify-center gap-1";
const lineClass =
  "w-6 h-auto border-b border-gold transition-transform duration-300 ease-out";

const onKeyup = (e: KeyboardEvent) => {
  if (e.key === "Escape") closeDrawer();
}

const openDrawer = () => {
  drawerIsOpened.value = true
  document.body.classList.add("overflow-hidden");
  document.addEventListener("keyup", onKeyup)
}

const closeDrawer = () => {
  drawerIsOpened.value = false
  document.body.classList.remove("overflow-hidden");
  document.removeEventListener("keyup", onKeyup)
}
</script>

<template>
  <div class="w-full h-full">
    <button
      class="w-full h-full flex flex-col items-center justify-center gap-2 p-4 group"
      @click="openDrawer"
    >
      <div :class="lineGroupClass">
        <div
          class="-translate-x-1 group-hover:-translate-x-[0.1rem]"
          :class="lineClass"
        />
        <div
          class="-translate-x-2 group-hover:translate-x-[0.35rem]"
          :class="lineClass"
        />
      </div>
      <div :class="lineGroupClass">
        <div
          class="translate-x-2 group-hover:-translate-x-[0.35rem]"
          :class="lineClass"
        />
        <div
          class="translate-x-1 group-hover:translate-x-[0.1rem]"
          :class="lineClass"
        />
      </div>
    </button>

    <Transition name="drawer">
      <aside
        v-if="drawerIsOpened"
        class="fixed z-30 right-0 top-0 w-full h-full"
      >
        <div
          class="w-full h-full bg-black/50"
          @click="closeDrawer"
        />
        <div
          id="menu-panel"
          class="z-10 absolute top-0 right-0 w-96 h-full bg-[#111a13] transition-all ease-out duration-300"
        >
          <button class="absolute right-8 top-8" @click="closeDrawer">
            <i class="bx bx-x text-gold text-4xl" />
          </button>
        
          <div
            class="w-full h-full flex flex-col items-center justify-between gap-16 p-16"
          >
            <NuxtLink class="inline-block w-32 h-32" to="/">
              <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
            </NuxtLink>

            <div class="flex-1 text-center">
              <p>Handall Coffee, Coffee Shop</p>
              <p>0813-4455-7778</p>
              <address class="not-italic">
                <p> Jl. Semanggi Timur No.7, Jatimulyo, <br> Kec. Lowokwaru, Kota Malang, Jawa Timur 65141</p>
              </address>
              <p>Open Monday - Sunday at 06.00 - 22.00</p>
            </div>

            <div class="flex flex-col items-center gap-8">
              <div>
                <a
                  class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                  href="#"
                >
                  Instagram
                </a>
              </div>
              <div>
                <a
                  class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                  href="#"
                >
                  Facebook
                </a>
              </div>
              <div>
                <a
                  class="nav-link active relative text-sm font-thin uppercase tracking-wider"
                  href="#"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </Transition>
  </div>
</template>

<style>
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from #menu-panel,
.drawer-leave-to #menu-panel {
  right: -100%;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: 0.3s ease-out;
}

.drawer-enter-active #menu-panel,
.drawer-leave-active #menu-panel {
  transition: 0.8s ease-out;
}

.drawer-enter-to,
.drawer-leave-from {
  opacity: 1;
}

.drawer-enter-to #menu-panel,
.drawer-leave-from #menu-panel {
  right: 0;
}
</style>
