<template>
  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
      <div class="col">
        <div class="row">
          <form>
            <h1 class="h3 mb-3 fw-normal">Пожалуйста заполните все поля</h1>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingFio" placeholder="ФИО" v-model="model['fio']">
              <label for="floatingFio">ФИО</label>
            </div>
            <p class="link-danger">{{ errors["fio"] }}</p>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                     v-model="model['email']">
              <label for="floatingInput">Email</label>
            </div>
            <p class="link-danger">{{ errors["email"] }}</p>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                     v-model="model['password']">
              <label for="floatingPassword">Password</label>
            </div>
            <p class="link-danger">{{ errors["password"] }}</p>
            <button class="w-100 btn btn-lg btn-primary mb-3" type="submit" @click.prevent="signup">Зарегистрироваться
            </button>
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
  name: "AppRegister",
  data: () => {
    return {
      model: {
        "fio": "",
        "email": "",
        "password": "",
      },
      click: false,
      errors: [],
      per: [],
    }
  },
  props: {
    isLogin: Boolean,
  },
  methods: {
    async signup() {
      await axios.post(`${API_URL}/signup`, this.model).then((res) => {
        console.log(res)
        router.push('/login')
      }).catch((err) => {
        console.log(err.response.data.warning.warnings)
        this.errors = err.response.data.warning.warnings
      })
    }
  }
}
</script>

