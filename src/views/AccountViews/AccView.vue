<template>
  <div   class="account_content">
    <span class="title">Профиль</span>
    <div class="acc_info_block">
      <table>
        <tr>
          <td>Фамилия и имя </td>
          <td>Никита андреевич <button @click="open_edit_name()">test</button></td>
        </tr>
        <tr>
          <td>Сумма заказов</td>
          <td>0 рублей</td>
        </tr>
        <tr>
          <td>Контактный телефон</td>
          <td>+7 123 123 11 22</td>
        </tr>
        <tr>
          <td>Контактный E-mail</td>
          <td>temp@mail.ru</td>
        </tr>
        <tr>
          <td>Изображение профиля</td>
          <td><button id="btn_change_photo"><img src="@/assets/source/suplier_images/tempimage.png" alt="acc_photo"></button></td>
        </tr>
        <tr>
          <td></td>
          <td><button id="submit_change_profile">Изменить</button></td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  name: "AccView",
  methods:{
      open_edit_name(){
        var backgroundblock = document.getElementsByClassName("background")[0]
        var acc_block = document.getElementsByClassName("account_block_name")[0]
        console.log(backgroundblock.style)
        backgroundblock.style.visibility = "visible"
        backgroundblock.style.opacity = 1
        acc_block.style.transform = "translate(0px, 1000px)"
    }
  }
}
</script>

<style scoped>

</style>