<script setup lang="ts">
const navMenus = ref([
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/menus", text: "Menus" },
  { path: "/blogs", text: "Blogs" },
  { path: "/contact-us", text: "Contact Us" },
]);
</script>

<template>
  <nav class="w-full h-20 lg:h-28 flex items-center justify-between border-b border-gold">
    <div class="aspect-square h-full p-4">
      <NuxtLink to="/">
        <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
      </NuxtLink>
    </div>
    <ul class="h-full flex-1 hidden md:flex items-center justify-center gap-8 lg:gap-16 border-x border-gold">
      <li v-for="menu in navMenus" :key="menu.path">
        <NuxtLink
          class="nav-link relative text-sm font-thin uppercase tracking-wider"
          exact-active-class="active-link"
          :to="menu.path"
        >
          {{ menu.text }}
        </NuxtLink>
      </li>
    </ul>
    <div class="aspect-square h-full p-4">
      <DrawerMenu />
    </div>
  </nav>
</template>

<style>
.nav-link::after,
.nav-link::before,
.active-link::after,
.active-link::before {
  content: "";
  position: absolute;
  left: 0;
  height: auto;
  border-bottom: 1px solid #d2ae67;
}

.nav-link::after,
.nav-link::before {
  width: 0;
}

.nav-link::after {
  transition: .3s ease-out;
  transition-delay: 0.1s;
}

.nav-link::before {
  transition: .3s ease-out;
  transition-delay: 0.2s;
}

.nav-link:hover::after,
.nav-link:hover::before {
  width: 100%;
}

.nav-link.active::after,
.nav-link.active::before,
.active-link::after,
.active-link::before {
  width: 100%;
}

.nav-link::after,
.active-link::after {
  bottom: -8px;
}

.nav-link::before,
.active-link::before {
  bottom: -12px;
}
</style>
