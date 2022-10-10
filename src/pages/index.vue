<script setup>
import { ref } from 'vue'
import Header from '@/components/organisms/Header.vue';
import Footer from '@/components/organisms/Footer.vue';
import TweetModal from '@/components/molecules/TweetModal.vue';
import TweetCard from '@/components/atoms/TweetCard.vue';
import TweetButtonSp from '@/components/atoms/TweetButtonSp.vue';
import RadiusButton from '@/components/atoms/RadiusButton.vue';
import { useModalStore } from '@/store/modal';

const useModal = useModalStore();

const isOpen = ref(false) 

const showModal = () => {
  useModal.toggleOpenModal()
  
};

</script>

<template>
  <div class="relative flex flex-col min-h-screen">
    <Header />
    <main class="main relative px-3 pt-20 lg:pt-0 lg:min-h-minHeight__lg">
      <div class="container max-w-md mx-auto lg:max-w-6xl">
        <div class="lg:grid lg:grid-cols-2">
          <!-- Inner Left Side -->
          <div class="max-w-md mx-auto mt-7 lg:mt-24">
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
          </div>
          <!-- / Inner Left Side -->
          <!-- Inner Right Side -->
          <div class="relative hidden lg:block">
            <div class="lg:absolute lg:top-1/2 lg:left-8 xl:left-14">
              <RadiusButton @click="toggleOpenModal" text="#本日の一善 でツイート" />
            </div>
          </div>
          <!-- / Inner Right Side -->
        </div>
        <!-- /.grid -->
      </div>
      <!-- / container -->
      <!-- TweetButtonSp -->
      <TweetButtonSp />
      <!-- / TweetButtonSp -->
      <!-- TweetModal -->
      <TweetModal />
      <!-- / TweetModal -->
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
  background-image: url(@/assets/images/bg/bg_nightsky.jpg);
  background-size: cover;
}
</style>