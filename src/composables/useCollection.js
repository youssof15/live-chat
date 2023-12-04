import { ref } from 'vue'
import { projectfirestore } from '../firebase/config.js'
 
const useCollection =  (collection) => { 
const error = ref(null)
const addDoc = async (doc)=>{
    try {
            await projectfirestore.collection(collection).add(doc)
        } 
        catch (err) {
            console.log(err.message)
            error.value= 'no message'
        }
    }
    return { error, addDoc }
}

export default useCollection