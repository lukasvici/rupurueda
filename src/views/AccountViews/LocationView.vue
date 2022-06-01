<template>
  <div class="location_content">
    <div class="title">Адреса</div>
    <div class="locationlist" v-if="locations.length > 0">
      <div class="location" v-for="(item, id) in locations" :key="id">
        <div class="info">
          <div>{{item.street}}, {{item.house}}</div>
          <div>{{item.entrance}} подъезд</div>
        </div>
        <div class="status">
          <span>{{item.status}}</span>
        </div>
        <div class="buttons">
          <button :id="'editloc'+id">Изменить</button>
          <button>Удалить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationView",
  data(){
    return{
      locations:[{"city":"Volgograd","street":"Новодвинская","floor":5, "house":30,"flat":29,"intercom":"poxuy","isbarrier":false, "entrance":1, "status":"основная","description":""}]
    }
  }
}
</script>

<style scoped>

</style>