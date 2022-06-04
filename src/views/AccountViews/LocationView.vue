<template>
  <div class="location_content">
    <div class="title">Адреса</div>
    <div class="locationlist" v-if="locations.length > 0">
      <div class="location" v-for="(item, id) in locations" :key="id">
        <div class="info">
          <div class="main_info">{{item.street}}, {{item.house}}</div>
          <div class="add_info">{{item.entrance}} подъезд</div>
        </div>
        <div class="status">
          <span>{{item.status}}</span>
        </div>
        <div class="buttons">
          <router-link :to="'/location/' + id" :id="'editloc'+id">Изменить</router-link>
          <button>Удалить</button>
        </div>
      </div>
    </div>
    <div class="btnadd_block">
      <button id="addloc">Добавить адрес</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "LocationView",
  data(){
    return{
      locations:[{"city":"Volgograd","street":"Новодвинская","floor":5, "house":30,"flat":29,"intercom":"poxuy","isbarrier":false, "entrance":1, "status":"основная","description":""},
        {"city":"Volgograd","street":"Новодвинская","floor":5, "house":30,"flat":29,"intercom":"poxuy","isbarrier":false, "entrance":1,"description":""}]
    }
  }
}
</script>

<style scoped>

</style>