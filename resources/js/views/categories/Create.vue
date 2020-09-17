<template>
        <div>
            <v-row no-gutters>
                <v-col
                    md="12"
                >
                    <v-card
                        class="pa-2"
                    >
                        <v-form
                            ref="form"
                            @submit.prevent="submitCategory"
                        >
                            <v-text-field
                                v-model="categoryAttr.title"
                                label="Title"
                                required
                                type="text"
                            ></v-text-field>

                            <v-btn
                                color="success"
                                class="mr-4"
                                type="submit"
                            >
                                Create
                            </v-btn>
                        </v-form>


                        <div class="mt-5">
                            <v-toolbar
                                color="indigo"
                                dark
                            >
                                <v-toolbar-title>Categories</v-toolbar-title>
                            </v-toolbar>

                            <div  v-for="item in categories"
                                  :key="item.id">

                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="item.title"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item-icon>
                                        <v-icon color="orange">mdi-pencil</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-icon>
                                        <v-icon color="red">mdi-delete</v-icon>
                                    </v-list-item-icon>
                                </v-list>
                                <v-divider></v-divider>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
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
name: "Create",
    data()
    {
        return {
            categoryAttr:{},
            categories: []
        }
    },
    methods: {
        submitCategory(){
            axios.post('http://localhost:8000/api/categories', this.categoryAttr)
                .then(res => {
                    console.log(res)
                })
        }
    }
}
</script>

<style scoped>

</style>
