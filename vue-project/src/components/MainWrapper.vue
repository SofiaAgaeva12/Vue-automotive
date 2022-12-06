<template>
  <div class="container py-3">
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
  </div>

</template>

<script>
import AppHeader from "./AppHeader.vue";
export default {
  name: "MainWrapper",
  components: {AppHeader}
}
</script>
<style>
.d-none {
  display: none;
}
.middle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}
.bar {
  width: 10px;
  height: 70px;
  background: #fff;
  display: inline-block;
  transform-origin: bottom center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  /*   box-shadow:5px 10px 20px inset rgba(255,23,25.2); */
  animation: loader 1.2s linear infinite;
}
.bar1 {
  animation-delay: 0.1s;
}
.bar2 {
  animation-delay: 0.2s;
}
.bar3 {
  animation-delay: 0.3s;
}
.bar4 {
  animation-delay: 0.4s;
}
.bar5 {
  animation-delay: 0.5s;
}
.bar6 {
  animation-delay: 0.6s;
}
.bar7 {
  animation-delay: 0.7s;
}
.bar8 {
  animation-delay: 0.8s;
}
@keyframes loader {
  0% {
    transform: scaleY(0.1);
  }
  50% {
    transform: scaleY(1);
    background: #56bd4b;
  }
  100% {
    transform: scaleY(0.1);
    background: transparent;
  }
}
.success {
  color: #30ad0b;
}

</style>