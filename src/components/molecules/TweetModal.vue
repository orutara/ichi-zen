<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, DialogDescription, } from '@headlessui/vue'
import { useModalStore } from '@/store/modal';

const useModal = useModalStore();

const isOpen = ref()

// const isOpen = ref(useModal.isOpen)
// console.log(isOpen.value)


const setIsOpen = (value) => {
  isOpen.value = value
}

setIsOpen(useModal.isOpen)
console.log(useModal.isOpen)

</script>

<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="relative z-50">
    <div class="fixed inset-0 bg-blue-700/30 flex items-center justify-center p-4" aria-hidden="true">
      <DialogPanel class="w-full max-w-md rounded bg-white p-6">
        <DialogTitle>Twitterでログイン</DialogTitle>
        <DialogDescription>
          This will permanently deactivate your account
        </DialogDescription>

        <p class="mb-4">
          Are you sure you want to deactivate your account? All of your data will be
          permanently removed. This action cannot be undone.
        </p>

        <button @click="setIsOpen(false)"
          class="bg-nightSky text-white text-sm px-4 py-3 mr-4 rounded">Deactivate</button>
        <button @click="setIsOpen(false)" class="bg-nightSky text-white text-sm px-4 py-3 mr-4 rounded">Cancel</button>
      </DialogPanel>
    </div>
  </Dialog>
</template>