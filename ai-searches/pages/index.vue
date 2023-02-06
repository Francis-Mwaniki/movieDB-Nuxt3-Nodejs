<template>
  <!-- component -->
  <div>
    <div
      class="h-screen flex justify-center items-center bg-cover bg-center"
      style="
        background-image: linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)),
          url('https://assets.nflxext.com/ffe/siteui/vlv3/c0a32732-b033-43b3-be2a-8fee037a6146/2fe6e3c0-5613-4625-a0c1-3d605effd10b/IN-en-20210607-popsignuptwoweeks-perspective_alpha_website_large.jpg');
      "
    >
      <div
        class="space-y-5 bg-gradient-to-br from-slate-900 to-pink-800 p-10 translate-x-5 transform scale-95 animate-pulse duration-500"
      >
        <div
          class="text-white font-bold text-2xl md:text-5xl flex justify-start items-center m-0 md:mx-32 flex-col"
        >
          <span>Unlimited movies</span>
          <span>shows and more.</span>
        </div>

        <p class="text-white text-lg flex flex-col items-center">
          <span>Readily Performant </span>
          <span class="text-orange-600 text-xl flex flex-col items-center font-extrabold"
            >Search with our api.</span
          >
        </p>
      </div>
    </div>
    <hr />
    <div
      class="h-screen flex items-center justify-center bg-black p-5 md:flex-row flex-col"
    >
      <div class="space-y-5 p-5">
        <p class="text-white font-bold text-4xl">Enjoy on your TV.</p>
        <p class="text-white font-semiboldbold text-xl">
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and
          more.
        </p>
      </div>
      <div>
        <img
          alt="TV"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        />
      </div>
    </div>
    <hr />
    <div
      class="h-screen flex items-center justify-center bg-black p-5 md:flex-row flex-col"
    >
      <div>
        <img
          alt=""
          class="our-story-card-img"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          data-uia="our-story-card-img"
        />
      </div>
      <div class="space-y-5">
        <p class="text-white font-bold text-4xl">Download your shows to watch offline.</p>
        <p class="text-white font-semiboldbold text-xl">
          Save your favourites easily and always have something to watch.
        </p>
      </div>
    </div>
    <hr />
    <div
      class="h-screen flex items-center justify-center bg-black p-5 md:flex-row flex-col"
    >
      <div class="space-y-5 p-5">
        <p class="text-white font-bold text-4xl">Watch everywhere.</p>
        <p class="text-white font-semiboldbold text-xl">
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
        </p>
      </div>
      <div>
        <img
          alt=""
          class="our-story-card-img"
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
          data-uia="our-story-card-img"
        />
      </div>
    </div>
    <hr />
    <div
      class="h-screen flex items-center justify-center bg-black p-5 md:flex-row flex-col"
    >
      <div class="p-5">
        <img
          alt=""
          class="our-story-card-img"
          src="https://occ-0-5556-3662.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
          data-uia="our-story-card-img"
        />
      </div>
      <div class="space-y-5">
        <p class="text-white font-bold text-4xl">Create profiles for children.</p>
        <p class="text-white font-semiboldbold text-xl">
          Send children on adventures with their favourite characters in a space made just
          for them—free with your membership.
        </p>
      </div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
