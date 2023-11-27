<template>
    <button @click="show = !show">click</button>
    <Transition>
        <div id="box" v-if="show">
            <h1>Transition</h1>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const show = ref(false)
</script>

<style scoped>
.v-enter-active,
.v-leave-active{
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: rotate(180deg);
    transform: scale(0.2);
}

#box{
    background-color: red;
    height: 400px;
    width: 80%;
    align-items: center;
    justify-content: center;
    display: flex;

}


</style>