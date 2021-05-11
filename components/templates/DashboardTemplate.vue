<template>
  <div class="dashboard-template">
    <div class="wrapper">
      <img src="@/assets/img/dashboard.svg" alt="Dashboard" />

      <PageTitle text="Você está no" strong="Dashboard" />

      <a class="logout" @click="home">Ir para a Home</a>
      <a class="logout" @click="logout">Logout</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'
export default Vue.extend({
  methods: {
    home(){
        this.$router.push('/')
    },
    logout() {
      try {
        auth.destroy()
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.dashboard-template {
  .wrapper {
    display: grid;
    justify-content: center;
    justify-items: center;
    align-content: center;
    grid-gap: 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 120px;
    }
    a {
      background-color: color('dark', 'darkest');
      color: color(light);
      font-size: 1.3rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      transition: all 300ms ease;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>