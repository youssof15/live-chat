<template>
    <nav v-if="user">
        <div>
            <!-- subject to user obj ingetUser composable -->
            <p style="text-align: left;">Hi there {{ user.displayName }} </p>
            <!-- subject to user obj ingetUser composable -->
            <p class="email">currently logged in as {{user.email}} </p>
        </div>
        <button @click="handlesignout">Logout</button>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import useLogout from '../composables/useLogout';
import getUser from '../composables/getUser';
    export default {
        setup(){
            const {user} = getUser()
            const router = useRouter()
            const { logout , error } = useLogout()

            const handlesignout= async() => {
                await logout()
                router.push({name:'home'})
            }
            return{ handlesignout , error, user}
        }
    }
</script>