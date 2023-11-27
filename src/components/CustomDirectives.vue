<template>
    <p v-back-color="'red'" v-font-size="50">Globle Custom Directves (v-back-color="'red'")</p>

    <p v-font-size="30">Scoped Custom Directves (v-font-size="30")</p>

    <input type="text" v-focus  v-model="val">

</template>

<script setup lang="ts">
import {ref} from 'vue'
const vBackColor = {
    mounted:(el,binding)=>{
        el.style.backgroundColor = binding.value
    },
    beforeMount:(el,binding)=>{
        el.style.backgroundColor = binding.value
    },
    beforeUpdate:(el,binding)=>{
        el.style.backgroundColor = binding.value
    },
    updated:(el,binding)=>{
        el.style.backgroundColor = binding.value
    }
}

const vFocus = {
    mounted: (el)=> {
        el.focus(console.log(val.value))
    },
    beforeUpdate: (el)=> {
        el.focus(console.log(val.value))
    },
    updated: (el)=> {
        el.focus( console.log(val.value))
    }
}

const val = ref('')
console.log(val)

</script>