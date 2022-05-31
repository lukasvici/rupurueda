<template>
  <header  id="app">
    <div class="container">
      <!-- TODO: выбор города-->
      <div class="header_top">
        <router-link to="/"><img src="@/assets/source/images/Logo.svg" alt="Logo"></router-link>
        <a v-for="item in categories" :href="item.href" :key="item.name">{{ item.name }}</a>
      </div>
      <div class="header_bottom">
        <router-link to="/catalog" class="btn_catalog">
          <img src="@/assets/source/element_items/sandwich.svg" alt="sandwich">
          <span class="btn_title">Каталог</span>
        </router-link>
        <div @click="refocus_search()" class="search_block ml10">
          <div class="input">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5006 14.0006H14.7106L14.4306 13.7306C15.6306 12.3306 16.2506 10.4206 15.9106 8.39063C15.4406 5.61063 13.1206 3.39063 10.3206 3.05063C6.09063 2.53063 2.53063 6.09063 3.05063 10.3206C3.39063 13.1206 5.61063 15.4406 8.39063 15.9106C10.4206 16.2506 12.3306 15.6306 13.7306 14.4306L14.0006 14.7106V15.5006L18.2506 19.7506C18.6606 20.1606 19.3306 20.1606 19.7406 19.7506C20.1506 19.3406 20.1506 18.6706 19.7406 18.2606L15.5006 14.0006ZM9.50063 14.0006C7.01063 14.0006 5.00063 11.9906 5.00063 9.50063C5.00063 7.01063 7.01063 5.00063 9.50063 5.00063C11.9906 5.00063 14.0006 7.01063 14.0006 9.50063C14.0006 11.9906 11.9906 14.0006 9.50063 14.0006Z"/></svg>
            <input v-on:input="edit_search()" type="search" name="search_products" id="search_prod" placeholder="Поиск...">
          </div>
          <div class="buttons">
            <button id="Search_Clear"><img src="@/assets/source/element_items/close.svg" alt="close"></button>
            <button id="Search_Submit">Найти</button>
          </div>
        </div>
        <button class="btn_delivery ml10">
          <span class="btn_title"><b>Доставка: </b> все дни</span>
          <img src="@/assets/source/element_items/open.svg" alt="open_icon">
        </button>
        <button class="btn_cart ml10 chngclr">
          <img src="@/assets/source/element_items/shopping_cart.svg" alt="cart_icon">
          <span class="btn_title">2400 ₽</span>
        </button>
        <button class="btn_ContentLent ml10 chngclr">
          <img src="@/assets/source/element_items/ContentLent.svg" alt="ContentLent_icon">
        </button>
        <button class="btn_Message ml10 chngclr">
          <img src="@/assets/source/element_items/message.svg" alt="message_icon">
        </button>
        <router-link to="/acc/favorites" class="btn_Like ml10 chngclr">
          <img src="@/assets/source/element_items/Like.svg" alt="Like_icon">
        </router-link>
        <router-link to="/acc" class="btn_Account ml10 chngclr">
          <img src="@/assets/source/element_items/Account.svg" alt="Account_icon">
        </router-link>

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {
      IsZeroSymb: true,
      IsNotZero: false,
      categories: [{"name":"Хиты","href":"hits/"},
        {"name":"Ораника","href":"Organic/"},
        {"name":"Для детей","href":"ForKids/"},
        {"name":"Постное","href":"Lenten/"},
        {"name":"Кошер","href":"Kosher/"},
        {"name":"Халяль","href":"Halal/"},
        {"name":"Праздник","href":"Зresent/"},
        {"name":"Подарки","href":"Gifts/"},
        {"name":"Non-food","href":"NonFood/"}]
    }
  },
  methods:{
    refocus_search(){
      document.getElementById("search_prod").focus()
    },
    edit_search(){
      var btnsub = document.getElementById("Search_Submit")

      var search = document.getElementById("search_prod")
      if (search.value.length > 0 && btnsub.style.display == ""){
        btnsub.style.display = "block"
        document.getElementById("Search_Clear").style.display = "block"
        document.getElementsByClassName("input")[0].firstChild.style.fill = "#3D3D3D"

      }
      if (search.value.length == 0){
        document.getElementById("Search_Clear").style.display = ""
        btnsub.style.display = ""
        document.getElementsByClassName("input")[0].firstChild.style.fill = "#7E7E7E"
      }


    }
  }
}
</script>

<style scoped>

</style>