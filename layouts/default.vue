<template>
  <div>
    <h1 class="website-title">Victor's Library</h1>
    <slot />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

.website-title {
  text-align: center;
  font-family: 'Merienda', cursive;
  font-size: 2.25rem;
}

p, li, a {
  font-family: 'Lora', serif;
  line-height: 2;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Source Sans Pro', sans-serif;
}

body {
  max-width: 750px;
  margin: auto;
  padding-right: 20px;
  padding-left: 20px;
}
</style>