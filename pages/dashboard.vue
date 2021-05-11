<template>
  <div>
      <DashboardTemplate/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    middleware: 'auth'// redireciona para o login se não estiver com o token
})
</script>
