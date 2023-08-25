<template>
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">TourHub</NuxtLink>
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
