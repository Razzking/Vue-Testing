<template>
    <p v-if="data" v-font-size="20"> {{ data }} </p>
    <p v-else-if="error"> {{ error }} </p>

</template>

<script setup lang="ts">
import {useFetch} from '../composable/fetch.js';

let url = 'https://jsonplaceholder.typicode.com/posts/1'
const { data , error } = useFetch(url)


</script>