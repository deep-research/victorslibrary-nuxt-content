<template>
  <div>
    <div class="site-title">
      <NuxtLink to="/">Victor's Library</NuxtLink>
    </div>
    <slot />
    <div class="footer">
      <p>© {{ new Date().getFullYear() }} Victor Fisher</p>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

.site-title {
  text-align: center;
}

.site-title a {
  text-decoration: none;
  color: black;
  font-family: 'Merienda', cursive;
  font-size: 2.25rem;
}

p, li, a {
  font-family: 'Lora', serif;
  line-height: 2;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0
}

body {
  max-width: 750px;
  margin: auto;
  padding-right: 20px;
  padding-left: 20px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.footer p {
  font-family: Georgia, serif;
  font-size: 1rem;
}
</style>