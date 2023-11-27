<script setup lang="ts">
// import { ref } from 'vue'

const props = defineProps({
  inputValue:{
    type:String,
    default: 'Default Value'
  }
})


</script>

<template>
  <label :for="inputValue"> {{ inputValue }} </label>
  <input type="text" :id="inputValue">
</template>


