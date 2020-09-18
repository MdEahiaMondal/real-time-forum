<template>
    <div class="text-center">
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    :color="color"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    icon
                >
                    <v-icon>mdi-bell</v-icon>
                    <sup>{{ unreadCount }}</sup>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="item in unread" :key="item.id">
                    <router-link :to="item.path">
                        <v-list-item-title @click="readItem(item)">{{ item.question }}</v-list-item-title>
                    </router-link>
                </v-list-item>
                <v-list-item v-for="item in read" :key="item.id">
                    <v-list-item-title>{{ item.question }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: "AppNotification",
    created() {
        if (User.loggedIn()) {
            this.getNotification()
        }
    },
    data() {
        return {
            read: {},
            unread: {},
            unreadCount: 0
        }
    },
    computed:{
        color()
        {
            return this.unreadCount > 0 ? 'indigo darken-3' : 'indigo lighten-2'
        }
    },
    methods: {
        getNotification() {
            axios.get(`http://localhost:8000/api/notification`)
                .then(res => {
                    this.read = res.data.read
                    this.unread = res.data.unread
                    this.unreadCount = res.data.unread.length
                })
                .catch(e => {
                    console.log(e.response.data.message)
                })
        },
        readItem(item){
            axios.post(`http://localhost:8000/api/notification/markAsRead`, {id: item.id})
                .then(res => {
                    this.unread.splice(item, 1)
                    this.read.push(item)
                    this.unreadCount --
                })
                .catch(e => {
                    console.log(e.response.data.message)
                })
        }
    }
}
</script>

<style scoped>

</style>
