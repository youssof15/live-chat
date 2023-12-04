import { ref } from 'vue'
import { projectAuth } from '../firebase/config.js'
 
const error = ref(null)

// Create two function to store the output of one into the other
const login = async (email,password) =>{
    // equalize the two functions in signUpform

    try {
        error.value = null 
        // to reset the error 
        
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        // this func from firebase sends the request to firebase
        // applicable on firebase

        if (!res){
            throw new Error('Incorrect login credentials')
        }

        error.value = null

        return res 
        // return res on signup from => const signup
    } 
    catch (err) {
        console.log(err.message)
        error.value = 'Incorrect login credentials'
    }
}
const useLogin =  () => { 
    return { error, login }
}

export default useLogin