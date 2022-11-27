<template>
  <NuxtLayout>
    <main>
      <ContentDoc>
        <template #empty>
          <h1>Document is empty</h1>
          <NuxtLink to="/">Home page</NuxtLink>
        </template>
      </ContentDoc>
    </main>
  </NuxtLayout>
</template>
