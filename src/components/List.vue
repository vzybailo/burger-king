<template>
    <v-container>
      <!-- header card -->
      <v-row class="list__cafes-title">
        <v-col>
          <h2 class="text-center text-h3 py-3">Burger menu</h2>
        </v-col>
      </v-row>
      <!-- content card -->
      <v-row>
        <v-col md="4" v-for="item in items_list" :key="item.id">
          <v-card>
            <v-img
              height="250"
              :src="item.img"
            >
            </v-img>
            <v-card-title>
              <router-link to="/burger">
                <h3 class="text-h4">{{ item.title }}</h3>
              </router-link>
            </v-card-title>
            <v-card-text>
              <p class="text-body-1">{{ item.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>

export default {
  name: 'List',
  data() {
    return {
      items_list: [
      {
        id: 0,
        title: 'Чикен Бургер',
        description: 'Хрустящее куриное филе, сыр «Чеддер», ароматный бекон, ломтик помидора, свежий салат, кетчуп, специальный дижонский соус и, конечно, та самая булочка с кунжутом.',
        img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/%D0%A7%D0%B8%D0%BA%D0%B5%D0%BD-%D0%BF%D1%80%D0%B5%D0%BC%D1%8C%D0%B5%D1%80.png'
      },
      {
        id: 1,
        title: 'Биг Мак',
        description: 'Большой сандвич с двумя рубленными бифштексами из натуральной цельной говядины на специальной булочке, заправленной луком,  двумя кусочками маринованного огурчика, ломтиком сыра чеддер, свежим салатом и специальным соусом.',
        img: 'https://mcdonalds.by/images/product-images/omnichannel/%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D1%8B%20%D0%B8%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/%D0%91%D0%B8%D0%B3-%D0%A2%D0%B5%D0%B9%D1%81%D1%82%D0%B8-%D0%A7%D0%B8%D0%BA%D0%B5%D0%BD.png'
      }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
