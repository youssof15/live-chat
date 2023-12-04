import { ref } from 'vue'
import { projectAuth } from '../firebase/config.js'
 
const error = ref(null)

// Create two function to store the output of one into the other
const signup = async (email,password,displayName) =>{
    // equalize the two functions in signUpform

    try {
        error.value = null 
        // to reset the error 
        
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        // this func from firebase sends the request to firebase
        // applicable on firebase

        if (!res){
            throw new Error('Could not sign user up')
        }

        await res.user.updateProfile({ displayName })
        // updates the user disp name once successful signup



        error.value = null

        return res 
        // return res on signup from => const signup
    } 
    catch (err) {
        console.log(err.message)
        error.value = 'Could not sign user up'
    }
}
const useSignup =  () => { 
    return { error, signup }
}

export default useSignup