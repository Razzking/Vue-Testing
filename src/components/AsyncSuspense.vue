<template>
    <h3>{{ data }}</h3>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const data = ref(null);

{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    data.value = await res.json();
    
}
</script>