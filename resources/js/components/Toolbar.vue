<template>
    <v-card
        color="grey lighten-4"
        flat
        tile
    >
        <v-toolbar>
            <v-toolbar-title>Forum</v-toolbar-title>
            <v-spacer></v-spacer>
            <app-notification v-if="loggedIn"></app-notification>
            <div class="hidden-sm-and-down">
                <router-link v-for="menu in menus" :key="menu.title" v-if="menu.show" :to="{name: menu.toName}">
                    <v-btn text>{{ menu.title }}</v-btn>
                </router-link>
            </div>
        </v-toolbar>
    </v-card>
</template>

<script>
export default {
    name: "Toolbar",
    data() {
        return {
            menus: [
                {title: 'Forum', toName: 'forum', show: true},
                {title: 'Ask Question', toName: 'question-create', show: User.loggedIn()},
                {title: 'Category', toName: 'categories-create', show: User.loggedIn()},
                {title: 'Logout', toName: 'logout', show: User.loggedIn()},
                {title: 'Login', toName: 'login', show: !User.loggedIn()},
            ],
            loggedIn: User.loggedIn()
        }
    },

    created() {
        EventBus.$on('logout', () => {
            User.logout()
        })
    },
}
</script>

<style scoped>

</style>
