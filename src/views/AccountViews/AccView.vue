<template>
  <div   class="account_content">
    <span class="title">Профиль</span>
    <div class="acc_info_block">
      <table>
        <tr>
          <td>Фамилия и имя</td>
          <td>Никита андреевич</td>
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
      </table>
      <button id="submit_change_profile">Изменить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccView"
}
</script>

<style scoped>

</style>