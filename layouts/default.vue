<template>
  <div>
    <h1 class="website-title">Victor's Library</h1>
    <slot />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@600&display=swap');

.website-title {
  text-align: center;
  margin: 0;
  font-family: 'Merienda', cursive;
  font-weight: 600;
}
</style>