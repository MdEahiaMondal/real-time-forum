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
                                color="primary"
                                class="mr-4"
                                type="submit"
                                v-if="editSlug"
                            >
                                Update
                            </v-btn>

                            <v-btn
                                color="success"
                                class="mr-4"
                                type="submit"
                                v-else
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

                            <div  v-for="(item, index ) in categories"
                                  :key="index">

                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title v-text="item.title"></v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item-icon @click="editCategory(index, item.slug)">
                                        <v-icon color="orange">mdi-pencil</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-icon @click="deleteCategory(index, item.slug)">
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
            categoryAttr:{
                title: null
            },
            categories: [],
            editSlug: null
        }
    },
    methods: {
        submitCategory(){
            this.editSlug ? this.updateCat() : this.createCat()
        },
        createCat()
        {
            axios.post('http://localhost:8000/api/categories', this.categoryAttr)
                .then(res => {
                    this.categories.unshift(res.data.category)
                    this.categoryAttr.title = null
                    this.editSlug = null
                })
        },
        updateCat()
        {
            axios.put(`http://localhost:8000/api/categories/${this.editSlug}`, this.categoryAttr)
                .then(res => {
                    this.categories.unshift(res.data.category)
                    this.categoryAttr.title = null
                    this.editSlug = null
                })
        },
        deleteCategory(index, slug)
        {
            axios.delete(`http://localhost:8000/api/categories/${slug}`)
                .then(res => {
                    console.log(res)
                    this.categories.splice(index, 1)
                })
        },
        editCategory(index, slug){
            this.editSlug = slug
            this.categoryAttr.title = this.categories[index].title
            this.categories.splice(index, 1);
        }
    }
}
</script>

<style scoped>

</style>
