<template>
  <div class="error">

    <img src="@/assets/img/404.svg" alt="Erro" />

    <p>A página que você está procurando não existe ou foi removida</p>

    <NuxtLink to="/" class="nuxt-link-active"> Voltar para Home </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.error{
    width: 100%;
  height: 100%;
  background-color: color('dark', 'darkest');
  color: color('light');
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  grid-gap: 4rem;
  position: absolute;
  p {
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.5;
  }
  a {
    background-color: color(light);
    color: color('dark', 'darkest');
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: all 300ms ease;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
