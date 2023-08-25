<template>
  <header>
    <nav class="navbar fixed-top bg-body-tertiary">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">
          <img src="/img/logo.png" alt="Логотип" class="mb-1" style="max-height: 2rem;">
        </NuxtLink>
        <button
          id="navbar-toggler"
          class="navbar-toggler"
          type="button"
          aria-controls="menuOffcanvas"
          aria-label="Toggle navigation"
          @click="openOffcanvas"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </header>

  <AppMenuMain />
</template>

<script setup lang="ts">
import { Offcanvas } from "bootstrap";

function openOffcanvas() {
  const offcanvas = Offcanvas.getOrCreateInstance("#mainMenuOffcanvas");
  offcanvas.show();
};
</script>
