<template>
  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
      <div class="col">
        <div class="row">
          <form>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="model['email']">
              <label for="floatingInput">Email</label>
            </div>
            <p class="link-danger">{{ errors["email"] }}</p>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="model['password']">
              <label for="floatingPassword">Password</label>
            </div>
            <p class="link-danger">{{ errors["password"] }}</p>
            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit" @click.prevent="login">Войти</button>
            <router-link to="/">
              <button class="w-100 btn btn-lg btn-outline-info" type="submit">Назад</button>
            </router-link>
          </form>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import router from "../router";
const API_URL = 'https://jurapro.bhuser.ru/api-samohod';
export default {
  name: "AppLogin",
  data: () => {
    return {
      model: {
        "email": "",
        "password": "",
      },
      click: false,
      errors: [],
      per: [],
    }
  },
  methods: {
    async login() {
      await axios.post(`${API_URL}/login`, this.model).then((res) => {

        this.per = res.data;
        router.push('/');
        console.log(res)
      }).catch((err) => {
        console.log(err)
        this.errors = err
      })
    }
  },
}

</script>
