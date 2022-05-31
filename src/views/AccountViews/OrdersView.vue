<template>
  <div class="orders_content">
    <span class="title">История заказов</span>
    <div class="orderlist" v-if="orders.length > 0">
      <div class="order_block" v-for="(item, id) in orders" :key="item.name">
        <div class="order" :id="'order'+id">
          <div class="orderinfo">
            <span class="orderid">№{{ item.id }}</span>
            <span class="order_status">{{ item.status}}</span>
            <span class="order_price">{{ item.price }} ₽</span>
            <span class="order_date">{{ item.date }}</span>
            <span class="order_amount">{{ item.amount }} товар</span>
          </div>
          <button class="order_moreinfo" :id="'moreinfo'+id">Узнать больще</button>

        </div>
        <hr>
      </div>

    </div>
    <div class="no_order_text" v-else>
      <span>Пока что вы не сделали ни одного заказа</span>
      <router-link to="/" id="backtoprod">Вернутся к продуктам</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersView",
  data(){
    return{
      orders: [{"id":123123, "status":"Отменен", "price":10789, "date":"30.04.22", "amount": 1},{"id":123123, "status":"Отменен", "price":10789, "date":"30.04.22", "amount": 1}],

    }
  }
}
</script>

<style scoped>

</style>