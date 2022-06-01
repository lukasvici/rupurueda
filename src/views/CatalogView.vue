<template>
<div class="container">
  <div class="catalog_block">
    <div class="sidemenu">
      <div class="title">Каталог продуктов</div>
      <div class="categoriesList">
        <div class="categoryitem" v-for="(cat, id) in cataloglist" :key="id">
          <router-link :to="cat.href">{{cat.name}} <button><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.237 7.74375L10.0036 10.9771L6.77031 7.74375C6.44531 7.41875 5.92031 7.41875 5.59531 7.74375C5.27031 8.06875 5.27031 8.59375 5.59531 8.91875L9.42031 12.7438C9.74531 13.0687 10.2703 13.0687 10.5953 12.7438L14.4203 8.91875C14.7453 8.59375 14.7453 8.06875 14.4203 7.74375C14.0953 7.42708 13.562 7.41875 13.237 7.74375Z" fill="#7E7E7E"/>
          </svg>
          </button></router-link>
          <div v-if="cat.children != null" class="subcategoryList">
            <div v-for="(subcat, subid) in cat.children" :key="subid" class="subcategoryitem">
              <router-link :to="cat.href + subcat.href">{{subcat.name}}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content" v-for="(item, id) in getcontent($route.params.cat, $route.params.subcat)" :key="id">
      {{item.name}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CatalogView",
  data(){
    return{

      cataloglist:[
          {"name":"Хиты", "href":"/catalog/hits", },
          {"name":"Наборы", "href":"/catalog/bandle"},
          {"name":"Молоко, сыр, яйца", "href":"/catalog/milkcheeseeggs", "children":[{"name": "Молоко", "href":"/milk"},{"name":"Сыр", "href":"/bruh"}]},
          {"name":"Овощи, фрукты, грибы", "href":"/catalog/vegfruits"},

      ],
      products:[{"name": "молоко", "cat":"milkcheeseeggs", "subcat":"milk"},{"name": "молоко2", "cat":"milkcheeseeggs", "subcat":"milk"},{"name": "молоко3", "cat":"milkcheeseeggs", "subcat":"milk"}, {"name":"сыр","cat":"milkcheeseeggs", "subcat":"bruh"}]
    }
  },
  methods:{
    //это все имитация получения данных из бд
    //с backend`ом этого не будет
    getcontent(cat, subcat){
      console.log(cat)
      console.log(subcat)
      if (cat != null && subcat == null){
        let arr = new Array()
        arr = []

        for (let i = 0; i < this.products.length; i++){
          console.log(this.products[i])
          if (this.products[i].cat == cat){
            arr.push(this.products[i])
          }
        }
        return arr
      }
      if (cat != null && subcat != null){
        let arr = new Array()
        arr = []
        for (let i = 0; i < this.products.length; i++){
          if (this.products[i].subcat == subcat){
            arr.push(this.products[i])
          }
        }
        return arr
      }
      else {
        return this.products
      }
    }
  }
}
</script>

<style scoped>

</style>