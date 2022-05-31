<template>

  <div  class="main_page"   id="products">
    <div class="container">
      <div  class="compilation">
        <div class="prod_block" v-for="item in compilation" :key="item.name">
          <div class="image_block" :style="{'background-color': randomColor()}">
            <img :src="getImgUrl(item.img)" alt="fwafwa">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="best_price">
        <span>Какая-то акция в месте с какой-то красивой картинкой</span>
        <button class="btn_moreinfo">Подробнее</button>
      </div>
      <div class="sales">
        <div class="sales_top">
          <div class="sales_title">
            <span>Скидки</span>
            <a href="sales/"><img src="@/assets/source/element_items/arrow.svg" alt="arrow_icon"></a>
          </div>
          <div class="sales_nav">
            <button class="prev"><img src="@/assets/source/element_items/arrownav-prev.svg" alt="arrow_prev"></button>
            <button class="next" @click="next_list"><img src="@/assets/source/element_items/arrownav.svg" alt="arrow"></button>
          </div>
        </div>
        <div class="sales_products">
          <div class="sales_slider">
            <div v-for="item in sales" class="prod" @click="open_product_block()" :key="item.name">
              <div class="prod_image">
                <img :src="getImgUrl(item.img)">
                <div class="sale_value">-{{ item.sale_size }}%</div>
              </div>
              <div class="prod_info">
                <span class="prod_title">{{ item.name }}</span>
                <div class="prod_maininfo">
                  <span class="prod_sizevalue">{{ item.value }} • <span class="star">★</span> {{ item.rating}} • <span class="delivery">Рядом с домом</span></span>
                </div>
                <div class="prod_manageinfo">
                  <div class="prices">
                    <span class="old_price">{{item.oldprice}}</span>
                    <span class="new_price">{{item.newprice}}₽</span>
                  </div>

                  <div class="buttons">
                    <button><img src="@/assets/source/element_items/plus.svg"></button>
                    <button><img src="@/assets/source/element_items/Like-notfill.svg"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div class="products">
        <div class="products_title">
          <span>Продукты</span>
        </div>
        <div v-for="item in products" :key="item.name">
          <div class="prod_top">
            <div class="prod_title">
              <span>{{ item.name }}</span>
              <a :href="item.href"><img src="@/assets/source/element_items/arrow.svg" alt="arrow_icon"></a>
            </div>
            <div class="prod_nav">
              <button class="prev"><img src="@/assets/source/element_items/arrownav-prev.svg" alt="arrow_prev"></button>
              <button class="next"><img src="@/assets/source/element_items/arrownav.svg" alt="arrow"></button>
            </div>
          </div>
          <div class="products_list">
            <a :key="prod.name" v-for="prod in item.Responce" :href="prod.href" class="prod" :style="{'background-color': randomColor()}">
              <img :src="getImgUrl(prod.img)">
              <span>{{ prod.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexView",
  data() {
    return {
      sales: [{"name":"Молоко", "value":"1л", "sale_size": "10", "rating":"4,5", "oldprice":"150,00", "newprice":"139,00", "img":"image1.png", "path":"fawfwafwa"},
        {"name":"Молоко", "value":"1л", "sale_size": "5", "rating":"4,5", "oldprice":"1300,00", "newprice":"1250,00", "img":"image1.png","path":"fawfwafwdfwaf"},
        {"name":"Молоко", "value":"1л", "sale_size": "12", "rating":"4,5", "oldprice":"150,00", "newprice":"139,00", "img":"image1.png","path":"gwahgawag"},
        {"name":"Молоко", "value":"1л", "sale_size": "10", "rating":"4,5", "oldprice":"150,00", "newprice":"139,00", "img":"image1.png", "path":"fahfa"},
        {"name":"Молоко", "value":"1л", "sale_size": "10", "rating":"4,5", "oldprice":"150,00", "newprice":"139,00", "img":"image1.png", "path":"fhfawgwa"},
        {"name":"Молоко", "value":"1л", "sale_size": "10", "rating":"4,5", "oldprice":"150,00", "newprice":"139,00", "img":"image1.png","path":"fawfwafwdgaw"},
      ],
      compilation: [{"name":"шашлык и барбекю", "img":"barbeku.png"},
        {"name":"шашлык и барбекю", "img":"barbeku.png"},
        {"name":"шашлык и барбекю", "img":"barbeku.png"},
        {"name":"шашлык и барбекю", "img":"barbeku.png"},
        {"name":"шашлык и барбекю", "img":"barbeku.png"},
        {"name":"шашлык и барбекю", "img":"barbeku.png"},
        {"name":"шашлык и барбекю", "img":"barbeku.png"},],
      products: [{"name": "Молоко, сыр, яйца", "href":"milk/",
        "Responce":[
          {"name":"Молоко", "img":"image.png", "href":"#"},
          {"name":"Сыр", "img":"image.png", "href":"#"},
          {"name":"Яйца", "img":"image.png", "href":"#"},
          {"name":"Творог", "img":"image.png", "href":"#"},
          {"name":"Масло", "img":"image.png", "href":"#"},
          {"name":"Сырки", "img":"image.png", "href":"#"}]},
        {"name": "Овощи, фрукты, грибы", "href":"Veg/", "Responce":
              [{"name":"Молоко", "img":"49582376993_75772ee54a_b_ccexpress 1.png", "href":"#"},
                {"name":"Сыр", "img":"image.png", "href":"#"},
                {"name":"Яйца", "img":"image.png", "href":"#"},
                {"name":"Творог", "img":"image.png", "href":"#"},
                {"name":"Масло", "img":"image.png", "href":"#"},
                {"name":"Сырки", "img":"image2.png", "href":"fawawgwagwa"}]},
      ],
      listcolors: ["#F0E1BC", "#AAE3D9", "#C4B7D4", "#E3BBBB", "#AAE3D9"]
    }
  },
  methods:{
    randomColor(){
      return this.listcolors[Math.floor(Math.random() * 5)]
    },
    next_list(){


    },
    getImgUrl(pic) {
      return require('../assets/source/products_images/'+pic)
    },
    open_product_block(){
      var backgroundblock = document.getElementsByClassName("background")[0]
      var productblock = document.getElementsByClassName("product_block")[0]
      console.log(backgroundblock.style)
      backgroundblock.style.visibility = "visible"
      backgroundblock.style.opacity = 1
      productblock.style.transform = "translate(0px, 1000px)"
      console.log(productblock.style.transform)
    },

  }
}
</script>

<style scoped>

</style>