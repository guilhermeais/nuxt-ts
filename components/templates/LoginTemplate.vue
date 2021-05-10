<template>
  <div class="login-template">
    <div class="wrapper">
      <Logo />

      <p>
        Bem vindo(a) ao Dashboard
        <br />
        <b>Entre na sua conta</b>
      </p>

      <LoginForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-template {
  .wrapper {
    width: 400px;
    background-color: color('dark', 'darkest');
    color: color('light');
    display: grid;
    grid-gap: 2.5rem;
    padding: 5rem 3rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @include screen('small') {
      padding: 5rem 2rem;
      width: 90%;
    }
    .logo {
      width: 100px;
    }
    p {
      font-size: 1.1rem;
      b {
        font-weight: 600;
        line-height: 1.4;
      }
    }
  }
}
</style>
