<script setup>
  import Footer from '@/components/organisms/Footer.vue';
  import RadiusButton from '@/components/atoms/RadiusButton.vue';
  import { useUserStore } from '@/store/user';
  import router from '@/router';
  
  const onClick = async () => {
    try {
      await useUserStore().login();
      router.replace({
        name:'Home'
      })
    } catch (e) {
      console.error(e);
    }
  }
  
  // RadiusButton Icon Switch Initialize
  const isInvisible = false
  
  </script>

<template>
  <main class="main relative">
    <!-- Outer grid -->
    <div class="lg:grid lg:grid-cols-2">
      <!-- Outer Left Side -->
      <div
        class="h-94/100 min-h-minHeight bg-nightSky bg-cover bg-no-repeat relative px-3 pt-20 md:h-95/100 lg:pt-0 lg:min-h-minHeight__lg">
      </div>
      <!-- / Outer Left Side -->
      <!-- Outer Rightt Side -->
      <div class="hidden lg:block"></div>
      <!-- / Outer Rightt Side -->
    </div>
    <!-- / Outer grid -->
    <!-- Inner container -->
    <div class="container w-9/10 max-w-md mx-auto absolute top-1/7 left-1/2 -translate-x-1/2 sm:top-1/5 lg:max-w-6xl">
      <div class="lg:grid lg:grid-cols-2">
        <!-- Inner Left Side -->
        <div class="max-w-md mx-auto bg-white/80 rounded-lg pt-10 pb-20 px-6 text-center">
          <img class="mx-auto mb-4" src="@/assets/images/logo/ichizen.svg" alt="ichi-zen">
          <img class="mx-auto mb-4" src="@/assets/images/img/img_onetweet.svg" alt="">
          <p class="mb-12 lg:text-lg">
            ハッシュタグ<span class="text-blue-600">#本日の一善</span>をつけて<br>
            今日一日を振り返ろう
          </p>
          <ol class="text-left mb-6 hidden lg:inline-block lg:text-base">
            <li class="mb-6">1.親切にできた</li>
            <li class="mb-6">2.ルールを守れた</li>
            <li class="mb-6">3.我慢できた</li>
            <li class="mb-6">4.努力した</li>
            <li class="mb-6">5.反省した</li>
          </ol>
          <p class="hidden lg:block">
            一つでもできれば、きっとあなたにとって「<span class="text-blue-600 font-bold">イイ日</span>」
          </p>
          <!-- Login Button Sp -->
          <div class="lg:hidden">
            <RadiusButton text="Twitterでログイン" @click="onClick" isInvisible="true" />
            <hr class="my-5 border-gray-300">
          </div>
          <!-- / Login Button Sp -->
        </div>
        <!-- /Inner Left Side -->
        <!-- Inner Right Side -->
        <div class="relative hidden lg:block">
          <!-- Login Button -->
          <div class="lg:absolute lg:top-45/100 lg:left-8 xl:left-16">
            <RadiusButton text="Twitterでログイン" @click="onClick" isInvisible="true" />
          </div>
          <!-- / Login Button -->
        </div>
        <!-- / Inner Right Side -->
      </div>
      <!-- /.grid -->
    </div>
    <!-- /Inner container -->
  </main>
  <!-- /.og_main -->
  <Footer />
</template>

<style scoped>

</style>