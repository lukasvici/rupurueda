<template>
  <div   class="account_content">
    <span class="title">Профиль</span>
    <div class="acc_info_block">
      <table>
        <tr>
          <td>Фамилия и имя </td>
          <td>{{profile_info.name}}  <div class="btn_edit" @click="open_edit_name()"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 14.5521V17.0854C2.5 17.3187 2.68333 17.5021 2.91667 17.5021H5.45C5.55833 17.5021 5.66667 17.4604 5.74167 17.3771L14.8417 8.28542L11.7167 5.16042L2.625 14.2521C2.54167 14.3354 2.5 14.4354 2.5 14.5521ZM17.2583 5.86875C17.5833 5.54375 17.5833 5.01875 17.2583 4.69375L15.3083 2.74375C14.9833 2.41875 14.4583 2.41875 14.1333 2.74375L12.6083 4.26875L15.7333 7.39375L17.2583 5.86875Z" fill="#7E7E7E"/>
</svg>
</div></td>
        </tr>
        <tr>
          <td>Сумма заказов</td>
          <td>{{profile_info.sumorder}} рублей</td>
        </tr>
        <tr>
          <td>Контактный телефон</td>
          <td>{{profile_info.phone}}</td>
        </tr>
        <tr>
          <td>Контактный E-mail</td>
          <td>{{profile_info.email}}</td>
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
  },
  data(){
    return{
      profile_info:{"name":"Никита Андреевич", "phone":"+7 987 654 32 32", "sumorder":"0", "email":"test@temp.ru", "image":""}
    }
  }
}
</script>

<style scoped>

</style>