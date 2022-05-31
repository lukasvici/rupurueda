<template>
  <div class="cards_content">
    <span class="title">Моя карта</span>
    <div class="cardlist" v-if="credit_cards.length > 0">
      <div class="card" v-for="(item,id) in credit_cards" :id="'card'+id" :key="item.name">
        <span class="number_card">{{ item.number }}</span>
        <span class="status_card">{{ item.status }}</span>
        <div class="card_buttons">
          <button :id="'edit_card'+id">Изменить</button>
          <button :id="'del_card'+id">Удалить</button>
        </div>
      </div>

    </div>
    <div class="no_card_text" v-else>
      <span>У вас пока что нет привязаных карт </span>
      <span>Нет доступных карт. Чтобы привязать карту, нужно оформить заказ и выбрать online оплату.</span>
      <router-link to="/" id="backtoprod">Вернутся к продуктам</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsView",
  data(){
    return{
      credit_cards: [{"number":"1234 1234 1234 1234", "status":"Основная"},{"number":"1234 1234 1234 1234", "status":"Запасная"}],

    }
  }
}
</script>

<style scoped>

</style>