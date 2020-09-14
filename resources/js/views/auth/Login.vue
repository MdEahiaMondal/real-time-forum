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
                    >
                        <v-text-field
                            v-model="loginAttr.email"
                            label="E-mail"
                            required
                            type="email"
                        ></v-text-field>

                        <v-text-field
                            v-model="loginAttr.password"
                            label="Name"
                            required
                            type="password"
                        ></v-text-field>

                        <v-btn
                            color="success"
                            class="mr-4"
                        >
                            Login
                        </v-btn>

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
    }
}
</script>

<style scoped>

</style>
