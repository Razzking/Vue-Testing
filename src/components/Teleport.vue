<template>
    <button @click="istel = !istel">Click Here for teleport</button>
    
    <Teleport :disabled="istel" to="#tele">
        <Transition name="box">
    
            <div class="box">
                <p>Teleport</p>
            </div>
    
        </Transition>
    </Teleport>

</template>

<script setup lang="ts">
import {ref} from 'vue'

const istel = ref(false)
</script>

<style scoped>
.box-enter-active,
.box-leave-active{
    transition: all 0.5s ease;
}

.box-enter-from,
.box-leave-to {
    opacity: 0;
    transform: rotate(180deg);
    transform: scale(0.2);
}

.box{
    background-color: red;
    height: 400px;
    width: 80%;
    align-items: center;
    justify-content: center;
    display: flex;

}


</style>