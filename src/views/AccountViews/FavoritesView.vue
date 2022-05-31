<template>
  <div class="favorite_content">
    <span class="title">Избранное</span>
    <div class="favoritelist" v-if="favoites.length > 0">
      <div class="favorite">

      </div>
    </div>
    <div class="not_favorites_text">
      <span>Здесь будут продукты на которые вы добавили в избранные  </span>
      <router-link to="/" id="backtoprod">Вернутся к продуктам</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoritesView",
  data(){
    return{
      favoites:[]
    }
  }
}
</script>

<style scoped>

</style>