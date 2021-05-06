<template>
  <div>
    <ul>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/sobre">Sobre</NuxtLink>
    </ul>

    <Nuxt />
  </div>
</template>

<style scoped>
.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
