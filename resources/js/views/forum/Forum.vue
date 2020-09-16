<template>
    <v-row no-gutters>
            <v-col>
                <v-card
                    class="pa-2"
                    outlined
                    tile
                >
                    <question></question>
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card
                    class="pa-2"
                    outlined
                    tile
                >
                    Variable width content
                </v-card>
            </v-col>
        </v-row>
</template>
<script>
import Question from "./Question";
export default {
    name: "Forum",
    components: {Question},
}
</script>

<style scoped>

</style>
