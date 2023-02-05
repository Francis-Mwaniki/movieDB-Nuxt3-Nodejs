<template>
  <div class="bg-slate-900">
    <div
      wire:isFetching
      v-show="isFetching"
      class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-900 opacity-75 flex flex-col items-center justify-center"
    >
      <h2 class="text-center dark:text-pink-300 text-indigo-100 text-xl font-semibold">
        <img src="../assets/img/loader.gif" class="bg-slate-900 w-20 h-20" alt="" />
      </h2>
      <p class="sm:w-1/3 w-2/3 text-center text-white text-2xl">
        it's loading hold on.....
      </p>
      <ClientOnly>
        <button
          class="btn-3 ring-1 ring-white hover:bg-slate-800 bg-gray-900 rounded-lg"
          @click="isFetching = false"
        >
          Cancel
          <Icon name="ic:outline-cancel" />
        </button>
      </ClientOnly>
    </div>
    <div class="box pt-6">
      <div class="box-wrapper">
        <div
          class="rounded flex items-center w-full shadow-sm border ring-1"
          :class="loading ? 'cursor-not-allowed bg-gray-500 ring-1 ' : ''"
        >
          <button
            @click="getImg"
            class="outline-none bg-slate-900 focus:outline-none rounded p-3"
            :class="loading ? 'cursor-not-allowed bg-gray-500' : ''"
          >
            <Icon name="ic:sharp-search" class="w-7 h-7 text-gray-100 cursor-pointer" />
          </button>

          <input
            type="text"
            :class="loading ? 'cursor-not-allowed bg-gray-500' : ' '"
            name=""
            :disabled="loading"
            v-model="query"
            :placeholder="loading ? 'Generating...' : 'Search for a movie'"
            id=""
            class="w-full pl-4 text-gray-200 text-sm outline-none focus:outline-none bg-transparent"
          />
        </div>
        <ClientOnly>
          <button
            :class="loading ? 'cursor-not-allowed bg-gray-500' : ''"
            class="outline-none rounded py-2 bg-red-600 px-6 hover:text-white gap-x-2 focus:outline-none dark:text-white text-black flex justify-center items-center mx-auto my-2"
            @click="refresh"
          >
            Refresh
            <Icon name="uil:refresh" />
          </button>
        </ClientOnly>
      </div>
    </div>
    <div
      class="flex justify-center gap-1 flex-row mx-auto py-3 items-center md:text-2xl text-sm dark:text-white text-black px-1"
    >
      <button class="px-4 py-2 bg-red-600" @click="nowPlaying">Now Playing</button>
      <button class="px-4 py-2 bg-red-600" @click="getTopRated">Top Rated</button>
      <button class="px-4 py-2 bg-red-600" @click="getMostPopular">Most popular</button>
    </div>
    <!-- component -->
    <div class="my-16 grid grid-cols-1 md:grid-cols-4 gap-4" v-if="now">
      <section
        v-for="movie in fetchPlayingMovies"
        class="hover:transition-transform hover:animate-pulse"
      >
        <img
          fit="cover"
          class="w-full h-64 object-cover cursor-pointer"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        />

        <div class="text-center">
          <h1 class="text-lg font-bold">{{ movie.title }}</h1>
        </div>
      </section>
    </div>
    <div class="my-16 grid grid-cols-1 md:grid-cols-4 gap-4" v-if="top_rated">
      <section
        v-for="movie in fetchTopRatedMovies"
        class="hover:transition-transform hover:animate-pulse"
      >
        <img
          fit="cover"
          class="w-full h-64 object-cover cursor-pointer"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        />

        <div class="text-center">
          <h1 class="text-lg font-bold">{{ movie.title }}</h1>
        </div>
      </section>
    </div>
    <div class="my-16 grid grid-cols-1 md:grid-cols-4 gap-4" v-if="most_popular">
      <section
        v-for="movie in fetchMostPopularMovies"
        class="hover:transition-transform hover:animate-pulse"
      >
        <img
          fit="cover"
          class="w-full h-64 object-cover cursor-pointer"
          :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
        />

        <div class="text-center">
          <h1 class="text-lg font-bold">{{ movie.title }}</h1>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const now = ref(true);
const allMovies = ref([]);
const isFetching = ref(false);
const fetchPlayingMovies = ref([]);
const fetchTopRatedMovies = ref([]);
const query = ref("");
const fetchMostPopularMovies = ref([]);
const not_connected = ref(false);
const loading = ref(false);
const downloading = ref(false);
const status = ref(false);
const most_popular = ref(false);
const top_rated = ref(false);
const success = ref("");
const refresh = () => {
  window.location.reload();
};
const getImg = async () => {
  loading.value = true;
  console.log(query.value);
  isFetching.value = true;
  const res = await fetch(`http://localhost:8000/search/${query.value}`);
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  allMovies.value = data;
  console.log(allMovies.value);
  setTimeout(() => {
    isFetching.value = false;
  }, 4000);

  //console.log(allMovies.value.filter((movie) => movie.results.poster_path !== null));

  loading.value = false;
};
const getTopRated = async () => {
  isFetching.value = true;
  const res = await fetch("http://localhost:8000/top-rated");
  if (!res.ok) {
    not_connected.value = true;
    throw new Error("Error fetching data");
  }
  most_popular.value = false;
  now.value = false;
  top_rated.value = true;
  const data = await res.json();

  fetchTopRatedMovies.value = data;
  setTimeout(() => {
    isFetching.value = false;
  }, 4000);
};
const nowPlaying = async () => {
  isFetching.value = true;
  const res = await fetch("http://localhost:8000/now");
  if (!res.ok) {
    not_connected.value = true;
    throw new Error("Error fetching data");
  }
  top_rated.value = false;
  most_popular.value = false;
  now.value = true;
  const data = await res.json();
  fetchPlayingMovies.value = data;
  setTimeout(() => {
    isFetching.value = false;
  }, 4000);
  console.log(fetchPlayingMovies.value);
};

const getMostPopular = async () => {
  isFetching.value = true;
  const res = await fetch("http://localhost:8000/popular");
  if (!res.ok) {
    not_connected.value = true;
    throw new Error("Error fetching data");
  }
  top_rated.value = false;
  now.value = false;
  most_popular.value = true;
  const data = await res.json();
  fetchMostPopularMovies.value = data;
  setTimeout(() => {
    isFetching.value = false;
  }, 4000);
  console.log(fetchMostPopularMovies.value);
};

onMounted(() => {
  nowPlaying();
});

try {
  if (query.value !== "" && query.value !== null) {
    getImg();
  } else {
    console.log("No query");
  }
} catch (error) {
  console.log(error);
}
</script>

<style scoped></style>
