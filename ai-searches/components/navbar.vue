<template>
  <div>
    <div
      class="hidden md:flex md:justify-end md:items-center justify-start items-start text-white gap-5 px-6 md:px-32 py-3 md:py-5 bg-slate-900"
    >
      <NuxtLink to="/" class="flex items-center gap-2">
        <Icon name="teenyicons:home-solid" class="w-6 h-6" />
        <span>Home</span>
      </NuxtLink>
      <NuxtLink to="/movies" class="flex items-center gap-2">
        <Icon name="bxs:movie-play" class="w-6 h-6" />
        <span>Movies</span>
      </NuxtLink>
      <NuxtLink to="/categorySearch" class="flex items-center gap-2">
        <Icon name="teenyicons:search-circle-solid" class="w-6 h-6" />
        <span>Search videos</span>
      </NuxtLink>
      <button class="px-9 py-3 bg-red-600 rounded hidden">Login</button>
    </div>
    <!-- mobile app -->
    <div class="md:hidden">
      <div class="btm-nav">
        <NuxtLink to="/">
          <Icon name="ic:round-home" class="w-5 h-5" />
          <span class="btm-nav-label">home</span>
        </NuxtLink>
        <NuxtLink to="/movies">
          <Icon name="ic:sharp-movie-filter" class="w-5 h-5" />
          <span class="btm-nav-label">movies</span>
        </NuxtLink>
        <NuxtLink to="/">
          <Icon name="ic:sharp-account-circle" class="w-5 h-5" />
          <span class="btm-nav-label">Account</span>
        </NuxtLink>
        <NuxtLink to="/categorySearch" class=" ">
          <Icon name="teenyicons:search-circle-solid" class="w-6 h-6" />
          <span class="btm-nav-label">Search</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
