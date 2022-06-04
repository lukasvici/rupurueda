<template>
  <modal-view/>
  <header-view/>
  <div class="content">
    <router-view/>
  </div>
  <footer-view/>
</template>

<style lang="scss">


nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import HeaderView from "@/components/HeaderView";
import footerView from "@/components/FooterView";
import modalView from "@/components/ModalView";
export default {
  components: { HeaderView, footerView, modalView }
}
</script>