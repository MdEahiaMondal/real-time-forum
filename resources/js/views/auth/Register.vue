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
                        @submit.prevent="register"
                    >
                        <v-text-field
                            v-model="registerAttr.name"
                            label="Name"
                            required
                            type="text"
                        >
                        </v-text-field>
                        <p v-if="errors.name" class="red--text">{{ errors.name[0] }}</p>

                        <v-text-field
                            v-model="registerAttr.email"
                            label="E-mail"
                            required
                            type="email"
                        ></v-text-field>
                        <p v-if="errors.email" class="red--text">{{ errors.email[0] }}</p>

                        <v-text-field
                            v-model="registerAttr.password"
                            label="password"
                            required
                            type="password"
                        ></v-text-field>
                        <p v-if="errors.password" class="red--text">{{ errors.password[0] }}</p>

                        <v-text-field
                            v-model="registerAttr.password_confirmation"
                            label="Confirm password"
                            required
                            type="password"
                        ></v-text-field>

                        <v-btn
                            color="success"
                            class="mr-4"
                            type="submit"
                        >
                            Sign Up
                        </v-btn>
                        <router-link :to="{name: 'login'}">
                            <v-btn
                                color="primary"
                                class="mr-4 btn btn-primary"
                            >
                                Login
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
    name: "Register",
    data() {
        return {
            registerAttr: {},
            errors: []
        }
    },
    methods: {
        register() {
            axios.post('api/auth/register', this.registerAttr)
            .then(res => {
                User.responseAfterLoggedIn(res)
                this.$router.push({name: 'forum'})
            })
            .catch(e => {
                console.log(e.response.data)
                this.errors = e.response.data.errors
            })
        }
    }
}
</script>

<style scoped>

</style>
