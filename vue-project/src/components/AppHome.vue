<template>
    <main>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">

        <div v-for="product in this.currentProducts" :key="product.id">
          <span class="success" v-if="isToCart === product.id">{{message}}</span>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">{{ product.name }}</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">{{ product.price }}р.</h1>
                <p>{{ product.description }}</p>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary" v-if="authed" @click="addToCart(product.id)">Добавить в корзину</button>
              </div>
            </div>
          </div>
        </div>


      </div>
      <app-pagination v-if="products.length>0" :totalPages="totalPages" :perPage="perPage" :currentPage="currentPage"
                      @pagechanged="onPageChange"/>
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
    </main>

</template>

<script>
import axios from "axios";
const API_URL = 'https://jurapro.bhuser.ru/api-samohod';
import AppPagination from "./pagination/AppPagination.vue";

export default {
  name: "AppHome",
  data() {
    return {
      products: [],
      currentProducts: [],
      currentPage: 1,
      perPage: 9,
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
    },

  },
  methods: {
    onPageChange(page) {
      const indexPage = page * this.perPage - 1;
      this.currentPage = page;
      this.currentProducts = this.products.slice(indexPage, indexPage + 9);
    },
    addToCart(product_id) {
      axios.post(`${API_URL}/cart/` + product_id, {}, {
        headers: {
          'authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
            this.isToCart = product_id;
            setTimeout((()=> this.isToCart = 0), 1000)
            console.log(response)
            this.message = response.data.content.message
          }
      )
    }
  },
  mounted() {
    axios.get(`${API_URL}/products`).then(response => {
      this.products = response.data.content;
      this.totalPages = this.products.length;
      if (this.totalPages > 9) {this.totalPages = 9}
      if (this.products) {this.isDataLoad = true}
        }
    )
  },
}

</script>