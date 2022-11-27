<template>
  <NuxtLayout>
    <main>
      <ContentDoc>
        <template #not-found>
          <NotFound />
        </template>
        <template #empty>
          <NotFound />
        </template>
      </ContentDoc>
    </main>
  </NuxtLayout>
</template>