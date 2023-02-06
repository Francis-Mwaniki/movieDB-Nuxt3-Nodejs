<template>
  <div>
    <!-- component -->
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
        <button class="px-5 py-2 bg-red-600 rounded-lg" @click="isFetching = false">
          Cancel
          <Icon name="ic:outline-cancel" />
        </button>
      </ClientOnly>
    </div>
    <div class="w-full max-w-screen-xl mx-auto px-6">
      <div class="flex justify-center p-4 px-3 py-10">
        <div class="w-full max-w-md">
          <div class="bg-slate-700 shadow-md rounded-lg px-3 py-2 mb-4">
            <div class="block text-gray-50 text-lg font-semibold py-2 px-2">
              Search Millions of people in movies with Keyword
            </div>
            <div class="flex items-center bg-gray-200 rounded-md">
              <div class="pl-2">
                <Icon name="ic:round-person-search" class="w-6 h-6 text-black" />
              </div>
              <input
                class="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2"
                id="search"
                @keyup.enter="getPeople"
                type="text"
                v-model="query"
                placeholder="Search teams or members"
              />
            </div>
            <div
              class="flex justify-center items-center mx-auto text-white flex-col md:flex-row"
              v-show="error"
            >
              <Icon name="noto:confounded-face" class="h-20 w-20" />
              <span class="my-2 text-2xl"> {{ error }}</span>
            </div>
            <div class="py-3 text-sm">
              <div
                class="flex justify-start cursor-pointer text-gray-700 hover:bg-gray-600 rounded-md px-2 py-2 my-2"
                v-for="people in allPeople"
              >
                <span class="bg-gray-700 h-2 w-2 m-2 rounded-full"></span>
                <img
                  :src="`https://image.tmdb.org/t/p/w500${people.profile_path}`"
                  class="h-7 w-7 rounded-full"
                  v-if="people.profile_path"
                  alt=""
                />
                <img
                  src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049__340.png"
                  class="h-7 w-7 rounded-full"
                  v-if="!people.profile_path"
                  alt=""
                />
                <div class="flex-grow font-medium px-2 text-white">{{ people.name }}</div>
                <div class="text-sm font-normal text-gray-50 tracking-wide">
                  {{ people.id }}
                </div>
              </div>
            </div>

            <div
              class="block bg-gray-800 text-sm text-right py-2 px-3 -mx-3 -mb-2 rounded-b-lg"
            >
              <button
                class="hover:text-gray-600 text-gray-500 font-bold py-2 px-4"
                @click="cancel"
              >
                Cancel
              </button>
              <button
                @click="getPeople"
                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const query = ref("");
const allPeople = ref([]);
const loading = ref(false);
const error = ref(null);
const isFetching = ref(false);

/* Search allPeople onMounting */
onMounted(() => {
  try {
    if (query.value.length > 0) {
      error.value = "";
      getPeople();
    } else {
      console.log("No query");
      error.value = "No query found";
      allPeople.value = [];
    }
  } catch (error) {
    console.log(error);
  }
});

const getPeople = async () => {
  error.value = "";
  loading.value = true;
  console.log(query.value);
  isFetching.value = true;
  const res = await fetch(`http://localhost:8000/person/${query.value}`);
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  allPeople.value = data;
  console.log(allPeople.value);

  setTimeout(() => {
    isFetching.value = false;
  }, 4000);
};
/* cancel  function */
const cancel = () => {
  error.value = "No query found";
  allPeople.value = [];
  query.value = "";
};
</script>

<style scoped></style>
