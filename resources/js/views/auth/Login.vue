<template>
    <v-container class="gray lighten mt-5 mb-5">
        <v-row no-gutters>
            <v-col
                md="6"
                offset-md="3"
            >
                <v-card
                    class="pa-2"
                >
                    <v-form
                        ref="form"
                        @submit.prevent="login"
                    >
                        <v-text-field
                            v-model="loginAttr.email"
                            label="E-mail"
                            required
                            type="email"
                        ></v-text-field>

                        <v-text-field
                            v-model="loginAttr.password"
                            label="password"
                            required
                            type="password"
                        ></v-text-field>

                        <v-btn
                            color="success"
                            class="mr-4"
                            type="submit"
                        >
                            Login
                        </v-btn>
                        <router-link :to="{name: 'register'}">
                            <v-btn
                                color="primary"
                                class="mr-4 btn btn-primary"
                            >
                                Sign Up
                            </v-btn>
                        </router-link>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    beforeCreate() {
        if (User.loggedIn()){
            this.$router.push({name: 'forum'})
        }
    },
    name: "Login",
    data() {
        return {
            loginAttr: {}
        }
    },
    methods: {
        login(){
            axios.post('api/auth/login', this.loginAttr)
                .then(res => {
                    User.responseAfterLoggedIn(res)
                    this.$router.push({name: 'forum'})
                })
                .catch(error => {
                    console.log(error.response)
                })
        }
    }
}
</script>

<style scoped>

</style>
