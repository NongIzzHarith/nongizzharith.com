<template>
  <div>
    <NavBar />

    <!-- HERO SECTION WITH CENTER IMAGE -->
    <section class="hero">
      <h1 class="hero-title">NONG IZZ HARITH</h1>

      <!-- =============================================
           CENTER PROFILE IMAGE
           To change this image:
           1. Add your image to: public/images/
           2. Update the src below to: /images/your-image.jpg
           ============================================= -->
      <img
        src="/images/BNW landscape.png"
        alt="Profile"
        class="hero-image"
      />

      <a href="#contact" class="hero-btn">Get in Touch</a>
    </section>

    <!-- ABOUT SECTION -->
    <section class="section" id="about">
      <div class="container">
        <h2 class="section-title">About</h2>
        <div class="grid">
          <div class="card">
            <h3 class="card-title">Who I Am</h3>
            <p class="card-text">
              Add your personal bio and introduction here. Tell visitors about yourself,
              your background, and what you do.
            </p>
          </div>
          <div class="card">
            <h3 class="card-title">What I Do</h3>
            <p class="card-text">
              Describe your work, services, or expertise here. Let visitors know
              how you can help them.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- WORK/PORTFOLIO SECTION -->
    <section class="section" id="work">
      <div class="container">
        <h2 class="section-title">Work</h2>
        <div class="grid">
          <div class="card">
            <h3 class="card-title">Project One</h3>
            <p class="card-text">Brief description of your project or work.</p>
            <a href="#" class="card-link">View Project</a>
          </div>
          <div class="card">
            <h3 class="card-title">Project Two</h3>
            <p class="card-text">Brief description of your project or work.</p>
            <a href="#" class="card-link">View Project</a>
          </div>
          <div class="card">
            <h3 class="card-title">Project Three</h3>
            <p class="card-text">Brief description of your project or work.</p>
            <a href="#" class="card-link">View Project</a>
          </div>
        </div>
      </div>
    </section>

    <!-- NEWSLETTER SECTION -->
    <section class="section newsletter" id="contact">
      <div class="container">
        <h2 class="section-title">Stay Connected</h2>
        <form class="newsletter-form" @submit.prevent="handleSubmit">
          <input
            type="text"
            placeholder="Your Name"
            class="newsletter-input"
            v-model="form.name"
          />
          <input
            type="email"
            placeholder="Your Email"
            class="newsletter-input"
            v-model="form.email"
          />
          <textarea
            placeholder="Your Message"
            class="newsletter-input"
            rows="4"
            style="resize: vertical;"
            v-model="form.message"
          ></textarea>
          <button type="submit" class="hero-btn">Send Message</button>
        </form>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
  // Add your form submission logic here
  alert('Message sent! (Connect this to your backend)')
}
</script>
