import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "@/views/IndexView.vue";
import AccountView from "@/views/AccoutView.vue";
import catalogView from "@/views/CatalogView";


import AccView from "@/views/AccountViews/AccView";
import OrdersView from "@/views/AccountViews/OrdersView";
import cardsView from "@/views/AccountViews/CardsView";
import favoritesView from "@/views/AccountViews/FavoritesView";
import locationView from "@/views/AccountViews/LocationView";
import notificationView from "@/views/AccountViews/NotificationView";
import providerView from "@/views/AccountViews/ProviderView";
import reviewsView from "@/views/AccountViews/ReviewsView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },
  {
    path: "/catalog",
    name: "catalog",
    component: catalogView,
    children: [{
      path: ":cat",
      name: "categorytittle",
      component: catalogView,
      children:[{
        path:":subcat",
        name: "subcattittle",
        component: catalogView
      }]
    }]
  },
  {
    path: "/acc",
    name: "account",
    component: AccountView,
    children: [{
      path: "",
      name: "accountView",
      component: AccView
    },
      {
      path:"orders",
      name: "ordersView",
      component: OrdersView
    },
      {
        path: "cards",
        name: "cardsView",
        component: cardsView
      },
      {
        path: "favorites",
        name: "favoritesView",
        component: favoritesView
      },
      {
        path: "location",
        name: "locationView",
        component: locationView
      },
      {
        path: "notifications",
        name: "notificationView",
        component: notificationView
      },
      {
        path: "beprovider",
        name: "providerView",
        component: providerView
      },
      {
        path: "reviews",
        name: "reviewsView",
        component: reviewsView
      }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
