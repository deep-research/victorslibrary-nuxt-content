<template>
  <div class="layout">
    <header>
      <NuxtLink class="site-title" to="/">Victor's Library</NuxtLink>
    </header>

    <main class="content">
      <div class="center">
        <slot />
      </div>
    </main>

    <footer class="footer">
      <p>© {{ new Date().getFullYear() }} Victor Fisher</p>
    </footer>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap');

  header {
    text-align: center;
    margin-top: 16px;
  }
  .site-title {
    text-decoration: none;
    color: black;
    font-size: 2rem;
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
    padding-right: 15px;
    padding-left: 15px;
  }

  .content {
    flex:1 0 auto;
    /* 50 - 75 is readable https://baymard.com/blog/line-length-readability */
    padding-right: 15px;
    padding-left: 15px;
  }

  .center {
    max-width: 75ch;
    margin: auto;
  }

  ::selection {
    background: lightblue; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: lightblue; /* Gecko Browsers */
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 16px;
    margin-bottom: 16px;
  }
</style>