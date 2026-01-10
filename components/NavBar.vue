<template>
  <nav class="nav" :class="{ scrolled: isScrolled }">
    <ul class="nav-links nav-left">
      <li><NuxtLink to="#work">Portfolio</NuxtLink></li>
      <li><NuxtLink to="#work">Work</NuxtLink></li>
      <li><NuxtLink to="#contact">Newsletter</NuxtLink></li>
    </ul>

    <NuxtLink to="/" class="nav-logo">NONG IZZ HARITH</NuxtLink>

    <ul class="nav-links nav-right">
      <li><NuxtLink to="#about">About</NuxtLink></li>
      <li><NuxtLink to="#contact">Contact</NuxtLink></li>
    </ul>

    <button class="mobile-menu-btn" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>

<script setup>
const isScrolled = ref(false)
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>
