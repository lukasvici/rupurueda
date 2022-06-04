<template>
  <div class="locationedit_content">
    <div class="title">Адреса</div>
    <div class="input_location">
      <div class="up_row">
        <input type="text" placeholder="Город"/>
        <input type="text" placeholder="Улица"/>
        <input type="text" placeholder="Этаж"/>
      </div>
      <div class="middle_row">
        <input type="text" placeholder="Дом"/>
        <input type="text" placeholder="Подъезд"/>
        <input type="text" placeholder="Кв."/>
        <input type="text" placeholder="Домофон"/>
        <div class="barrier_checkbox">
          <input type="checkbox">
          <span>Есть шлагбаум (нужен пропуск)</span>
        </div>
      </div>
      <div class="bottom_row">
        <input type="text" placeholder="Комментарий для курьера" id="locdescription">
        <div class="main_checkbox" >
          <input type="checkbox">
          <span>Сделать основным</span>
        </div>
      </div>
    </div>
  </div>



</template>

<script>
export default {
  name: "LocationeditView",
}
</script>
<style scoped>

</style>