import { ref } from 'vue'
import { projectAuth } from '../firebase/config.js'

// gets current user if logged in => firebase
const user = ref(projectAuth.currentUser)

// evrytime there is a change in authentication
projectAuth.onAuthStateChanged(_user=>{
    user.value = _user
})

const getUser = ()=>{
    return { user }
}

export default getUser