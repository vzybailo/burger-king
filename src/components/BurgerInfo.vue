<template>
    <v-row>
        <v-col md="6">
            <v-card class="h-100">
                <v-img
                height="350"
                :src="main_info.img"
                class="d-flex align-end"
                >
                    <h2 class="text-h4 ml-4 mb-4 white--text">{{ item.title }} Заголовок</h2>
                </v-img>
            </v-card>
        </v-col>
        <v-col md="6">
            <v-card class="h-100">
                <v-card-text>
                    <p class="font-weight-light">{{ main_info.description }}</p>
                </v-card-text>
            </v-card>
        </v-col>
  </v-row>
</template>

<script>

export default {
    props: {
        items_list: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
 .h-100 {
    height: 100%;
}
</style>
