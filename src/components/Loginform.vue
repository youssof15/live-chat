<template>
    <form @submit.prevent="handleSubmit">
        <input type="email" required placeholder="email" v-model="email">
        <input type="password" required placeholder="password" v-model="password">
        <button>Log in</button>
        <div class="error">{{ error }}</div>
    </form>
</template>

<script>
import {ref} from 'vue'
import useLogin from '../composables/useLogin.js'

export default{
    setup(props, context){
        const lat = ref(null)
        const lng = ref(null)

        const { error , login} = useLogin()

        const email = ref('')
        const password = ref('')
        const handleSubmit = async ()=>{
            await login(email.value,password.value)

            if(!error.value){
                context.emit('login')
                // equal to this.$emit
            }
        }
        return {email ,password, handleSubmit, error}
    }
}
</script>

<style>

</style>