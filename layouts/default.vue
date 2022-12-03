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
</style>