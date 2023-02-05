<template>
  <div class="bg-slate-900">
    <!-- <div
          class="flex justify-around gap-x-4 items-center dark:text-black rounded text-black flex-row mx-auto max-w-lg dark:bg-gray-300 py-2 bg-gray-800 px-2 my-2"
          v-show="status"
        >
          <p class="text-lg leading-relaxed text-center" v-show="success">
            {{ success }}
          </p>
          <Icon
            @click="status = false"
            class="text-white p-1 cursor-pointer h-7 w-7 rounded-full bg-gray-700"
            name="ic:baseline-close"
          />
        </div> -->
    <div class="box pt-6">
      <div class="box-wrapper">
        <div
          class="rounded-full flex items-center w-full shadow-sm border ring-1"
          :class="loading ? 'cursor-not-allowed bg-gray-500 ring-1 ' : ''"
        >
          <button
            @click="getImg"
            class="outline-none bg-slate-900 focus:outline-none rounded-full p-3"
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
            class="outline-none ring-1 rounded py-1 px-6 hover:text-white gap-x-2 focus:outline-none dark:text-white text-black flex justify-center items-center mx-auto my-2"
            @click="refresh"
          >
            Refresh
            <Icon name="uil:refresh" />
          </button>
        </ClientOnly>
      </div>
    </div>
    <div
      class="flex justify-center mx-auto py-3 items-center md:text-2xl text-sm dark:text-white text-black px-1"
    >
      Your search is "{{ query }}"
    </div>
    <!-- component -->
    <div class="my-5 grid grid-cols-1 md:grid-cols-4 gap-4">
      <section
        v-for="movie in allMovies"
        class="hover:transition-transform hover:animate-pulse"
      >
        <img
          fit="cover"
          class="w-full h-64 object-cover cursor-pointer"
          caption="Movie Poster"
          src="../assets/img/movie.jpeg"
        />

        <div class="text-center">
          <h1 class="text-lg font-bold">{{ movie.title }}</h1>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const allMovies = ref([]);
const fetchMovies = ref([]);
const query = ref("");
const loading = ref(false);
const downloading = ref(false);
const status = ref(false);
const success = ref("");
const refresh = () => {
  window.location.reload();
};
const getImg = async () => {
  loading.value = true;
  console.log(query.value);

  const res = await fetch(`http://localhost:5000/search/${query.value}`);
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  allMovies.value = data;
  console.log(allMovies.value);

  //console.log(allMovies.value.filter((movie) => movie.results.poster_path !== null));

  loading.value = false;
};

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
