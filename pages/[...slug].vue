<template>
  <NuxtLayout>
    <main>
      <ContentDoc>
        <template #not-found>
          <h1>Document is empty</h1>
          <p>
            <NuxtLink to="/">Home Page</NuxtLink>
          </p>
        </template>
      </ContentDoc>
    </main>
  </NuxtLayout>
</template>