<script setup>
defineProps(['text', 'isInvisible'])
const emit = defineEmits(['click'])

const onClick = () => {
  emit('click');
}

</script>

<template> 
  <div class="mt-5 text-center">
    <button @click="onClick" class="roundedButton rounded-4xl bg-twitter w-full py-4 mx-auto text-sm text-white block max-w-roundedButton relative sm:w-roundedButton">
    <img v-if="isInvisible" src="@/assets/images/icon/icon_twitter.svg" class="absolute w-6 h-auto left-5" />
        {{ text }}
    </button>
  </div>
</template>

<style scoped>
  

</style>