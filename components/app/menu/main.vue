<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="mainMenuOffcanvas"
    aria-labelledby="menuOffcanvasLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="menuOffcanvasLabel">Меню</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <template v-for="item in menuItems">
          <li class="nav-item">
            <NuxtLink
              :to="item.href"
              class="nav-link"
              active-class="active"
              ariaCurrentValue="page"
              >{{ item.title }}</NuxtLink
            >
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Offcanvas } from "bootstrap";

const route = useRoute();

const menuItems = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Карта",
    href: "/map",
  },
  {
    title: "Путеводитель",
    href: "/guidebook",
  },
  {
    title: "Календарь",
    href: "/calendar",
  },
];

watch(() => route.fullPath, () => {
  const offcanvas = Offcanvas.getOrCreateInstance("#mainMenuOffcanvas");
  offcanvas.hide();
});
</script>
