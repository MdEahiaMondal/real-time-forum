<template>
    <div>
        <v-card
            class="mx-auto ml-5">
            <v-card-title>
                <v-list-item-avatar color="grey darken-3">
                    <v-img
                        class="elevation-6"
                        src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{ reply.user ? reply.user : '' }} said {{ reply.created_at }}</v-list-item-title>
                </v-list-item-content>
                <v-card-text>
                    {{ reply.body }}
                </v-card-text>
            </v-card-title>
            <v-divider></v-divider>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "Reply",
    props: ['reply']
}
</script>

<style scoped>

</style>
