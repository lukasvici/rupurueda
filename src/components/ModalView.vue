<template>
  <div class="background"></div>
  <div class="product_block" id="product_block">
    <div class="product_block_wrap">
      <div class="product_block_top">
        <button @click="close_product_block" class="btn_close"><img src="@/assets/source/element_items/close.svg" alt="close_product_block"></button>
        <div class="container">
          <div class="image_block">
            <img src="@/assets/source/products_images/image1.png" alt="prod_image">
          </div>
          <div class="info_block">
            <div class="product_title">Молоко</div>
            <a class="supplier" href="#">Купринов И.В.</a>
            <div class="rating_block">Потом сделаю</div>
            <div class="product_manage">
              <span class="price">100,00₽</span>
              <div class="amount_block">
                <button><img src="@/assets/source/element_items/minus.svg" alt="minus"></button>
                <span class="amount_count">1л</span>
                <button><img src="@/assets/source/element_items/plus.svg" alt="plus"></button>
              </div>
              <button class="btn_favorite"><img src="@/assets/source/element_items/Like-notfill.svg" alt="favorite"></button>
            </div>
            <span>Способ получения:</span>
            <div class="buttons_block">
              <div class="buttons">
                <button @click="change_button" class="selected">Самовывоз</button>
                <button @click="change_button" >Доставка</button>
              </div>

            </div>
          </div>

        </div>


      </div>
      <div class="product_block_bottom">
        <div class="nav_bottom_block">
          <div class="container">
            <button id="btndesc" @click="bottom_content_change" class="selected">Описание</button>
            <button id="btninf" @click="bottom_content_change">Информация</button>
            <button id="btnrev" @click="bottom_content_change">Отзывы ()</button>
            <button id="btnrec" @click="bottom_content_change">Рецепты</button>
          </div>
        </div>
        <div class="bottom_block_content">
          <div class="container">
            <div class="description">
              Описание: Деревенские яйца - не только вкусные, но очень полезные для здоровья. Из них получается сытный завтрак, который дает энергию на целый день. Также их можно добавлять в выпечку или другие блюда. Напоминаем вам, что польза яиц не зависит от цвета желтка. На цвет желтка влияет порода курицы и наличие в ее корме растений с каротиноидами - моркови, кукурузы, шпината и др.Описание: Деревенские яйца - не только вкусные, но очень полезные для здоровья. Из них получается сытный завтрак, который дает энергию на целый день. Также их можно добавлять в выпечку или другие блюда. Напоминаем вам, что польза яиц не зависит от цвета желтка. На цвет желтка влияет порода курицы и наличие в ее корме растений с каротиноидами - моркови, кукурузы, шпината и др.Описание: Деревенские яйца - не только вкусные, но очень полезные для здоровья. Из них получается сытный завтрак, который
            </div>
            <div class="information" style="display: none;">
              <div class="information_content">
                <div class="info_block">
                  <span><b>Пищевая ценнсоть:</b>белки - 12,7 г., жиры - 11,5 г., углеводы - 0,7 г.; на 100 г.</span>
                  <span><b>Энергетическая ценность:</b> 157,7 ккал / 657 кДж.</span>
                  <span><b>Срок годности: </b>25 суток.</span>
                  <span><b>Условия хранения: при температуре</b> от +2 до +6 °С.</span>
                  <span><b>Количество:</b> 10 штук.</span>
                  <span><b>Место происхождения:</b> Тверская область, Конаковский район.</span>
                </div>
                <div class="per_suplier_block">
                  <div class="suplier_block">
                    <div class="suplier_image"><img src="@/assets/source/suplier_images/sdf.png" alt="suplier_photo"></div>
                    <div class="suplier_info">
                      <div class="title"><span class="suplier_name">Евгений Чехов</span></div>
                      <div class="rating">Поставщик • <span class="star">★</span>4,5</div>
                      <button class="btn_more_info">Узнать больше</button>
                    </div>
                  </div>

                </div>
              </div>


            </div>
            <div class="reviews" style="display: none;">
              Отзывы
            </div>
            <div class="recipes" style="display: none;">
              Рецепты
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="account_block_name">
    <div class="account_block_name_wrap">
      <div class="title">Фамилия и имя</div>
      <input type="text" placeholder="Введите имя и фамилия">
      <div class="buttons">
        <button>Подтверидть </button>
        <button @click="close_edit_name()">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  data() {
    return {
      bottomcontent: {"btndesc":"description", "btninf":"information", "btnrev":"reviews", "btnrec":"recipes"}
    }
  },
  methods:{
    close_edit_name(){
      var backgroundblock = document.getElementsByClassName("background")[0]
      var acc_block = document.getElementsByClassName("account_block_name")[0]
      console.log(backgroundblock.style)

      backgroundblock.style.opacity = 0
      acc_block.style.transform = "translate(0px, -1000px)"
      console.log(acc_block.style.transform)
      backgroundblock.style.visibility = "hidden"
    },
    change_button(event){
      console.log(event.path[1].children[0].classList)
      event.path[1].children[0].classList.remove("selected")
      event.path[1].children[1].classList.remove("selected")
      event.target.classList.add("selected")
    },
    bottom_content_change(event){
      for(let i = 0; i< 4; i++) document.getElementsByClassName("bottom_block_content")[0].children[0].children[i].style.display = "none"
      for(let i = 0; i< 4; i++) document.getElementsByClassName("nav_bottom_block")[0].children[0].children[i].classList.remove("selected")
      document.getElementsByClassName(this.bottomcontent[event.target.id])[0].style.display = "block"
      event.target.classList.add("selected")
    },
    close_product_block(){
      var backgroundblock = document.getElementsByClassName("background")[0]
      var productblock = document.getElementsByClassName("product_block")[0]
      console.log(backgroundblock.style)

      backgroundblock.style.opacity = 0
      productblock.style.transform = "translate(0px, -1000px)"
      console.log(productblock.style.transform)
      backgroundblock.style.visibility = "hidden"
    }
  }
}
</script>

<style scoped>

</style>