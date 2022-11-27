<template>
  <NuxtLayout>
    <main>
      <ContentDoc>
        <template #empty>
          <h1>Document is empty</h1>
          <NuxtLink to="/">Home page</NuxtLink>
        </template>
      </ContentDoc>

      <ContentList path="/" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
        </div>
      </ContentList>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/' }
</script>