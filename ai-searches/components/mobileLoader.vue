<template>
  <div>
    <div class="">
      <div
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-900 opacity-75 flex flex-col items-center justify-center"
        v-show="isFetching"
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
    </div>
  </div>
</template>

<script>
export default {
  props: ["isFetching"],
};
</script>

<style scoped></style>
