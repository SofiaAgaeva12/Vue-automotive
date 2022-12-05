<template>
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <router-link to="/">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <span class="fs-4">«Самоход»</span>
      </a>
      </router-link>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <router-link to="/register"> <a class="me-3 py-2 text-dark text-decoration-none">Регистрация</a></router-link>
        <router-link to="/login"><a class="me-3 py-2 text-dark text-decoration-none">Авторизация</a> </router-link>
        <router-link to="/orders"><a class="me-3 py-2 text-dark text-decoration-none">Мои заказы</a> </router-link>
        <router-link to="/cart"> <a class="me-3 py-2 text-dark text-decoration-none">Корзина</a></router-link>

      </nav>
    </div>

    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Каталог товаров</h1>
    </div>
  </header>
</template>

<script>

const API_URL = 'https://jurapro.bhuser.ru/api-samohod';

import axios from "axios";
import router from "@/router";
export default {
    name: "AppHeader",
  methods: {
    async logout() {
      await axios.get(`${API_URL}/logout`, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then((res) => {
        console.log(res.data)
        router.push('/login')
        localStorage.removeItem('token')
      }).catch((err) => {
        console.log(err.response.data.error)
        this.errors = err.response.data.error
      })
    }
  },
  computed: {
    authed() {
      return localStorage.getItem('token');
    }
  }
}
</script>