<template>
    <v-row no-gutters>
        <v-col
            md="12"
        >
            <v-card
                class="pa-2"
            >
                <v-form
                    ref="form"
                    @submit.prevent="createQues"
                >
                    <v-text-field
                        v-model="categoryAttr.title"
                        label="Title"
                        required
                        type="text"
                    ></v-text-field>
                    <v-select
                        v-model="categoryAttr.category_id"
                        :items="categories"
                        item-text="title"
                        item-value="id"
                        label="Category"
                    ></v-select>
                    <vue-simplemde v-model="categoryAttr.content" ref="markdownEditor" />
                    <v-btn
                        color="success"
                        class="mr-4"
                        type="submit"
                    >
                        Create
                    </v-btn>
                </v-form>
            </v-card>
        </v-col>
    </v-row>

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
    data() {
        return {
            categoryAttr: {},
            categories: [],
        }
    },
    methods: {
        createQues() {
            axios.post('http://localhost:8000/api/questions', this.categoryAttr)
                .then(res => {
                   this.$router.push({name: 'forum'})
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
