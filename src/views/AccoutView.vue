<template>
  <div class="account_page">
    <div class="container">
      <div class="banner">
        <span class="banner-text">Хочу продавать продукты</span>
        <button class="more_info">Подробнее</button>
      </div>
      <div class="account_block" id="account">
        <div class="side_menu">

          <router-link to="/acc" class="selected" id="btn_acc1"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z"/>
          </svg><span>Профиль</span></router-link>
          <router-link to="/acc/favorites" id="btn_acc2"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3536 20.1307C12.5936 20.8207 11.4236 20.8207 10.6636 20.1207L10.5536 20.0207C5.30357 15.2707 1.87357 12.1607 2.00357 8.28065C2.06357 6.58065 2.93357 4.95065 4.34357 3.99065C6.98357 2.19065 10.2436 3.03065 12.0036 5.09065C13.7636 3.03065 17.0236 2.18065 19.6636 3.99065C21.0736 4.95065 21.9436 6.58065 22.0036 8.28065C22.1436 12.1607 18.7036 15.2707 13.4536 20.0407L13.3536 20.1307Z"/>
          </svg>
            <span>Избранное</span></router-link>
          <router-link to="/acc/reviews" id="btn_acc3"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V19.59C2 20.48 3.08 20.93 3.71 20.3L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM13.57 11.57L12.45 14.01C12.27 14.4 11.72 14.4 11.54 14.01L10.42 11.57L7.98 10.45C7.59 10.27 7.59 9.72 7.98 9.54L10.42 8.42L11.54 5.98C11.72 5.59 12.27 5.59 12.45 5.98L13.57 8.42L16.01 9.54C16.4 9.72 16.4 10.27 16.01 10.45L13.57 11.57Z"/>
          </svg>
            <span>Отзывы</span></router-link>
          <router-link to="/acc/orders" id="btn_acc4"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 9H10C9.45 9 9 8.55 9 8C9 7.45 9.45 7 10 7H14C14.55 7 15 7.45 15 8C15 8.55 14.55 9 14 9Z"/>
            <path d="M14 12H10C9.45 12 9 11.55 9 11C9 10.45 9.45 10 10 10H14C14.55 10 15 10.45 15 11C15 11.55 14.55 12 14 12Z"/>
            <path d="M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2V16H4C3.45 16 3 16.45 3 17V19C3 20.66 4.34 22 6 22H18C19.66 22 21 20.66 21 19V2L19.5 3.5ZM15 20H6C5.45 20 5 19.55 5 19V18H8H12H15V20ZM19 19C19 19.55 18.55 20 18 20C17.45 20 17 19.55 17 19V17C17 16.45 16.55 16 16 16H14H12H8V5H19V19Z"/>
            <path d="M17 9C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7C16.4477 7 16 7.44772 16 8C16 8.55228 16.4477 9 17 9Z"/>
            <path d="M17 12C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10C16.4477 10 16 10.4477 16 11C16 11.5523 16.4477 12 17 12Z"/>
          </svg>
            <span>Заказы</span></router-link>
          <router-link to="/acc/cards"  id="btn_acc5"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V12H20V17C20 17.55 19.55 18 19 18ZM20 8H4V6H20V8Z"/>
          </svg><span>Моя карта</span></router-link>
          <router-link to="/acc/notifications" id="btn_acc6"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.2905 17.29L18.0005 16V11C18.0005 7.93 16.3605 5.36 13.5005 4.68V4C13.5005 3.17 12.8305 2.5 12.0005 2.5C11.1705 2.5 10.5005 3.17 10.5005 4V4.68C7.63054 5.36 6.00054 7.92 6.00054 11V16L4.71054 17.29C4.08054 17.92 4.52054 19 5.41054 19H18.5805C19.4805 19 19.9205 17.92 19.2905 17.29ZM16.0005 17H8.00054V11C8.00054 8.52 9.51054 6.5 12.0005 6.5C14.4905 6.5 16.0005 8.52 16.0005 11V17ZM12.0005 22C13.1005 22 14.0005 21.1 14.0005 20H10.0005C10.0005 21.1 10.8905 22 12.0005 22Z"/>
          </svg>
            <span>Уведомления</span></router-link>
          <router-link to="/acc/location" id="btn_acc7"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C7.8 2 4 5.22 4 10.2C4 13.38 6.45 17.12 11.34 21.43C11.72 21.76 12.29 21.76 12.67 21.43C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z"/>
          </svg>
            <span>Адреса</span></router-link>
          <router-link to="/acc/beprovider" id="btn_acc8"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 8H17V6C17 4.9 16.1 4 15 4H3C1.9 4 1 4.9 1 6V15C1 16.1 1.9 17 3 17C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H22C22.55 17 23 16.55 23 16V12.67C23 12.24 22.86 11.82 22.6 11.47L20.3 8.4C20.11 8.15 19.81 8 19.5 8ZM6 18C5.45 18 5 17.55 5 17C5 16.45 5.45 16 6 16C6.55 16 7 16.45 7 17C7 17.55 6.55 18 6 18ZM19.5 9.5L21.46 12H17V9.5H19.5ZM18 18C17.45 18 17 17.55 17 17C17 16.45 17.45 16 18 16C18.55 16 19 16.45 19 17C19 17.55 18.55 18 18 18Z"/>
          </svg>
            <span>Стать поставщиком</span></router-link>
          <button id="btn_acc9"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11C11.55 21 12 20.55 12 20C12 19.45 11.55 19 11 19H5V5Z"/>
            <path d="M20.65 11.6525L17.86 8.86247C17.54 8.54247 17 8.76247 17 9.21247V11.0025H10C9.45 11.0025 9 11.4525 9 12.0025C9 12.5525 9.45 13.0025 10 13.0025H17V14.7925C17 15.2425 17.54 15.4625 17.85 15.1425L20.64 12.3525C20.84 12.1625 20.84 11.8425 20.65 11.6525Z"/>
          </svg>
            <span>Выход</span></button>
        </div>
        <div class="block_content">
          <router-view></router-view>









        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccoutView",
  data() {
    return {
      button_content:{"btn_acc1":"account_content",
        "btn_acc2":"favorite_content",
        "btn_acc3":"reviews_content",
        "btn_acc4":"orders_content",
        "btn_acc5":"cards_content",
        "btn_acc6":"notification_content",
        "btn_acc7":"location_content",
        "btn_acc8":"delivery_content",
      }
    }

  },
  methods:{
    change_content(event){
      for(let i = 0; i< 8; i++) document.getElementsByClassName("side_menu")[0].children[i].classList.remove("selected")
      for(let i = 0; i< 8; i++) document.getElementsByClassName("block_content")[0].children[i].style.display = "none";
      document.getElementsByClassName(this.button_content[event.currentTarget.id])[0].style.display = "block";
      document.getElementById(event.currentTarget.id).classList.add("selected")

    }
  }
}
</script>

<style scoped>

</style>