import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.directive('font-size',{
    mounted:(el,binding)=>{
        console.log(el, binding)
        el.style.fontSize = binding.value + 'px'
    }
})

app.mount('#app')
