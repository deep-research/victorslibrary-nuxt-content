<template>
  <div class="layout">
    <header>
      <NuxtLink to="/">Victor's Library</NuxtLink>
    </header>

    <div class="content">
      <slot />
    </div>

    <footer>
      <p>© {{ new Date().getFullYear() }} Victor Fisher</p>
    </footer>
  </div>
</template>

<style>
  @import url('../public/normalize.css');

  @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

  header {
    text-align: center;
  }

  header a {
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

  footer {
    text-align: center;
    font-family: Georgia, serif;

    position: sticky;
    top: 100%;
  }

  body {
    max-width: 750px;
    margin: auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  html {
    height: 100%;
  }

  #__nuxt, .layout, body {
    min-height: 100vh;
  }

  .layout { 
    display: flex;
    flex-direction: column;
  }

  .content {
    flex:1 0 auto;
  }

  ::selection {
    background: #a8d1ff; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: #a8d1ff; /* Gecko Browsers */
  }
</style>