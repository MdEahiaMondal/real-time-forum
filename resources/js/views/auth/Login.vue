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
    name: "Login",
    data() {
        return {
            loginAttr: {}
        }
    },
    methods: {
        login(){
            User.login(this.loginAttr)
        }
    }
}
</script>

<style scoped>

</style>
