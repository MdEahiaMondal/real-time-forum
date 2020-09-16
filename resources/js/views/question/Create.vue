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
                        id="id"
                        label="Category"
                    ></v-select>
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
                console.log(res)
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
            console.log(this.categoryAttr)
        }
    }
}
</script>

<style scoped>

</style>
