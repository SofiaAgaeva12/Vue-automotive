<template>
  <app-header/>
  <div class="main-wrapper">
    <router-view></router-view>
  </div>
  <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <small class="d-block mb-3 text-muted">&copy; 2017–2021</small>
      </div>
    </div>
  </footer>
</template>

<script>
import AppHeader from "./AppHeader";
export default {
  name: "MainWrapper",
  components: {AppHeader}
}
</script>
