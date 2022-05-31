<template>
  <div class="notification_content">
    <span class="title">Уведомления</span>
    <div class="notificationlist" v-if="notifications.length > 0">
      <div class="notification" v-for="(item, id) in notifications" :key="id">

      </div>
    </div>
    <div class="no_notification_text">
      <span>У вас пока что нет уведомлений</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationView",
  data(){
    return{
      notifications:[{}]
    }
  }
}
</script>

<style scoped>

</style>