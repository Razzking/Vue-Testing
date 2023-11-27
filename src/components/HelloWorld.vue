<template>
<div style="color: red;">
  
  <h1>Attributes inherit</h1>
  <h1 v-bind="$attrs">Attributes inherit</h1>
  <h1 >Attributes inherit</h1>

</div>

<HelloWorld_2 :="$attrs"/>
</template>

<script setup lang="ts">
import HelloWorld_2 from './HelloWorld_2.vue';

defineOptions({
  inheritAttrs: false
})
</script>