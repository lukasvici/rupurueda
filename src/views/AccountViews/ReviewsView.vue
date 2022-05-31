<template>
  <div class="reviews_content">
    <span class="title">Отзывы</span>
    <div class="reviewslist"  v-if="reviews.length > 0">
      <div class="review" v-for="(item,id) in reviews" :key="id">

      </div>

    </div>
    <div class="no_review_text" v-else>
      <span>Здесь будут продукты на которые вы можете оставить отзовы  </span>
      <router-link to="/" id="backtoprod">Вернутся к продуктам</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "ReviewsView",
  data(){
    return{
      reviews:[//{"productid":1}
       ]
    }
  }
}
</script>

<style scoped>

</style>