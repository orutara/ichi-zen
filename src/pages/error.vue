<script setup>
import Header from '@/components/organisms/Header.vue';
import Footer from '@/components/organisms/Footer.vue';

</script>

<template>
  <div class="relative h-screen">
    <Header />
    <main class="main text-center min-h-minHeight relative px-3 pt-20 h-94/100 lg:pt-0 lg:min-h-minHeight__lg">
      <div class="container max-w-md mx-auto lg:max-w-6xl">
        <div class="pt-7 lg:pt-24">
          <div class="max-w-2xl mx-auto bg-white/80 rounded-lg py-10 px-6">
            <h1 class="text-center relative pb-3 text-lg md:text-2xl">お探しのページが見つかりません</h1>
            <hr class="mb-8">
            <p class="mb-4">
              TOPページはこちらから
            </p>
            <div class="w-60 mx-auto rounded-lg bg-blue-500">
              <a href="/" class="block text-white font-bold py-4">TOPへ</a>
            </div>
          </div>
        </div>
      </div>
      <!-- / container -->
    </main>
    <Footer />
  </div>
</template>

<style scoped>
main::before {
  content: "";
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  background-image: url(@/assets/images/bg/bg_nightSky.jpg);
  background-size: cover;
}
</style>