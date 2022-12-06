<template>
  <main>
    <div :class="isDataLoad? 'd-none': ''">
    <div class="middle">
      <div class="bar bar1"></div>
      <div class="bar bar2"></div>
      <div class="bar bar3"></div>
      <div class="bar bar4"></div>
      <div class="bar bar5"></div>
      <div class="bar bar6"></div>
      <div class="bar bar7"></div>
      <div class="bar bar8"></div>
    </div>
  </div>

    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div v-for="product in this.products" :key="product.id">
        <span class="success" v-if="isToCart === product.id">{{message}}</span>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">{{product.name}}</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">{{product.price}}р.<small class="text-muted fw-light"> &times; 2
                шт.</small></h1>
              <p>{{product.description}}</p>

              <button type="button" class="btn btn-lg btn-info mb-3">+</button>
              <button type="button" class="btn btn-lg btn-warning mb-3">&minus;</button>
              <button type="button" class="btn btn-lg btn-outline-danger mb-3" @click="deleteFromCart(product.id)">Удалить из корзины</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="row justify-content-center gap-1">
      <h2 class="mb-5">Итоговая стоимость: 600р.</h2>
      <button class="col-6 btn btn-lg btn-outline-info mb-3" type="button">Назад</button>
      <button type="button" class="col-6 btn btn-lg btn-primary mb-3" v-if="authed">Оформить заказ</button>

    </div>
  </main>
</template>

<script>
import AppPagination from "./pagination/AppPagination.vue";
import axios from "axios";
const API_URL = 'https://jurapro.bhuser.ru/api-samohod';
export default {
  name: "AppCart",
  data() {
    return {
      products: [],
      currentPage: 1,
      currentProducts: [],
      perPage: 10,
      totalPages: 1,
      isDataLoad: false,
      message: '',
      isToCart: 0
    };
  },
  components: {
    AppPagination
  },
  computed: {
    authed() {
      return localStorage.getItem('token');
    }
  },
  methods: {
    onPageChange(page) {
      const indexPage = page * this.perPage - 1;
      this.currentPage = page;
      this.currentProducts = this.products.slice(indexPage, indexPage + 10);
    },
    deleteFromCart(id) {
      axios.delete(`${API_URL}/cart/` + id, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        this.message = response.data.content.message;
            console.log(response)
      }
      )
    }
  },
  mounted() {
    axios.get(`${API_URL}/cart`, {
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
          console.log(response.data.content)
          this.products = response.data.content
          this.totalPages = this.products.length;
          if (this.totalPages > 10) {this.totalPages = 10}
          if (this.products) {this.isDataLoad = true}
        }
    )
  },
}
</script>

<style scoped>

</style>