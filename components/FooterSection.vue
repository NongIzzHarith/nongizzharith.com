<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/work">Work</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Connect</h4>
        <div class="social-links">
          <a href="#" target="_blank">LinkedIn</a>
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">Instagram</a>
        </div>
      </div>

      <div class="footer-section">
        <h4>Contact</h4>
        <ul class="footer-links">
          <li><a href="mailto:hello@nongizzharith.com">hello@nongizzharith.com</a></li>
        </ul>
      </div>
    </div>

    <p class="copyright">&copy; {{ currentYear }} NONG IZZ HARITH. All rights reserved.</p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
