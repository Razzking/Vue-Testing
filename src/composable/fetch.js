import { ref , watchEffect} from 'vue'


export function useFetch(url){

    const data = ref(null);
    const error = ref(null);

    async function dataFetch(){
        try {
            
            const res = await fetch(url);
            data.value = await res.json();
        } catch (e) {
            error.value = e
        }

    }
    dataFetch()
    console.log('call')
    return {data , error}
}