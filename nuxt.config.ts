// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true,
    anchorLinks: false
  },
  app: {
    head: {
      link: [
        {
          href: "https://cdn.skypack.dev/sanitize.css",
          rel: "stylesheet"
        },
        {
          href: "https://unpkg.com/sanitize.css/forms.css",
          rel: "stylesheet"
        },
        {
          href: "https://unpkg.com/sanitize.css/assets.css",
          rel: "stylesheet"
        },
        {
          href: "https://unpkg.com/sanitize.css/typography.css",
          rel: "stylesheet"
        },
        {
          href: "https://unpkg.com/sanitize.css/reduce-motion.css",
          rel: "stylesheet"
        },
        {
          href: "https://unpkg.com/sanitize.css/system-ui.css",
          rel: "stylesheet"
        },
        {
          href: "https://unpkg.com/sanitize.css/ui-monospace.css",
          rel: "stylesheet"
        },
      ]
    }
  }
})
