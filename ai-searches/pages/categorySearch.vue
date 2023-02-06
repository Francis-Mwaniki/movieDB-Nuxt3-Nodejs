<template>
  <div>
    <div
      class="rounded-lg text-center shadow-xl bg-slate-900 text-white max-w-md mx-auto mt-4 md:mb-4"
    >
      <div
        class="px-6 py-5 bg-gradient-to-br from-red-600 via-slate-800 to-slate-800 rounded"
      >
        <span class="">
          <nuxt-img
            src="https://cdn.pixabay.com/photo/2013/07/13/14/03/film-162029__340.png"
            alt=""
            class="transform scale-100 opacity-0 hover:opacity-90 duration-500 animate-pulse"
          />
        </span>
        <p class="font-medium">Search By:?</p>

        <div class="mt-4 space-y-2">
          <nuxt-link
            class="block rounded-full border px-8 py-3 text-sm font-medium border-gray-500 bg-slate-900 text-gray-200"
            to="/search"
          >
            Person
          </nuxt-link>
          <nuxt-link
            class="block rounded-full border border-gray-500 px-8 py-3 text-sm font-medium text-gray-200 bg-slate-900"
            to="/movies"
          >
            Movie title
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
