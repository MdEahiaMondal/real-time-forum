<template>
    <div>
        <v-toolbar
            color="indigo"
            dark
        >
            <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>
        <v-list>
            <v-list-item
                v-for="item in categories"
                :key="item.id"
            >
                <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </div>
</template>

<script>
export default {
    created() {
        axios.get('http://localhost:8000/api/categories')
            .then(res => {
                this.categories = res.data
            })
    },
    name: "AppSidebar",
    data() {
        return {
            categories: []
        }
    },

}
</script>

<style scoped>

</style>
