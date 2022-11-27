<template>
  <NuxtLayout>
    <main>
      <ContentDoc>
        <template #empty>
          <h1>Not Found</h1>
          <NuxtLink to="/">Home Page</NuxtLink>
        </template>
      </ContentDoc>
    </main>
  </NuxtLayout>
</template>
