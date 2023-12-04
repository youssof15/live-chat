import { ref } from 'vue'
import { projectAuth } from '../firebase/config.js'
 
const error = ref(null)

// Create two function to store the output of one into the other
const logout = async (email,password,displayName) =>{
    // equalize the two functions in signUpform

    error.value = null 
    // to reset the error 
    try {
        
        await projectAuth.signOut()
        // signs out

    } 
    catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}
const useLogout =  () => { 
    return { error, logout }
}

export default useLogout