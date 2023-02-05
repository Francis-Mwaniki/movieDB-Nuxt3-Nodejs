<template>
    <div>
        <section class=" bg-gradient-to-b from-gray-900 via-slate-900 to-pink-900 md:overflow-hidden">
        <div class=" flex md:justify-end md:items-center justify-start items-start text-white gap-5 space-x-6 mx-6 md:mx-32 py-3 md:py-6">
        <NuxtLink
        to="/" class="flex items-center gap-2">
        <Icon name="teenyicons:home-solid" class="w-6 h-6" />
         <span>Home</span>
        </NuxtLink>
        <NuxtLink
        to="/" class="flex items-center gap-2">
        <Icon name="teenyicons:search-circle-solid" class="w-6 h-6" />
        <span>Search vids</span>
        </NuxtLink>
        <button class=" px-9 py-3 bg-red-600 rounded">Login</button>
        </div>
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"

  >
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
        Understand Search Flow.
        <strong class="font-extrabold text-red-700 sm:block">
          Increase Conversion.
        </strong>
      </h1>

      <p class="mt-4 sm:text-xl sm:leading-relaxed text-blue-400">
       Performant search. Searches for the best Movies using the Movie Database API.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          class="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto ring-1 ring-white"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>