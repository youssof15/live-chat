<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" required placeholder="display name" v-model="displayName">
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model="password">
        <div class="error">{{ error }}</div>
        <button>Sign up</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'

export default{
    setup(props, context){
        const {user} = getUser()
        const {er, addDoc} = useCollection('users')

        const lat = ref(null)
        const lng = ref(null)

        const {error, signup} = useSignup()

        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => { 
            await signup(email.value,password.value,displayName.value)

            //after successful signup
            if(!error.value){
                context.emit('signup')
            }

            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(pos=>{
                    lat.value = pos.coords.latitude
                    lng.value = pos.coords.longitude
                    const userArr={
                        userX:user.value.uid,
                        geolocation:{lat:pos.coords.latitude,lng:pos.coords.longitude}
                                        }
                    addDoc(userArr)
            },err => {console.log(err)},
            {maximumAge:60000, timeout:3000})
            }

            
        }
        return {displayName, email, password,handleSubmit, error}
    }
}
</script>

<style>

</style>