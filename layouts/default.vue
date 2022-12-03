<template>
  <div class="layout">
    <header>
      <NuxtLink to="/">Victor's Library</NuxtLink>
    </header>

    <div class="content">
      <slot />
    </div>

    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Victor Fisher</p>
    </footer>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap');

  header {
    text-align: center;
  }

  header a {
    text-decoration: none;
    color: black;
    font-size: 2.25rem;
    font-family: 'Merienda', cursive;
  }

  footer {
    text-align: center;
  }

  #__nuxt, .layout, body {
    min-height: 100vh;
  }
  .layout { 
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: auto;
    padding: 0 15px 0 15px;
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