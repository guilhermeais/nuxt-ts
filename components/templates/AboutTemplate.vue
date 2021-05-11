<template>
  <div>
    <div class="about-template">
      <PageTitle text="O que é o " strong="iBook?" />
      <Presentation />
      <div class="developer">
        <h2>Desenvolvido por</h2>

        <div
          class="LI-profile-badge"
          data-version="v1"
          data-size="medium"
          data-locale="pt_BR"
          data-type="vertical"
          data-theme="light"
          data-vanity="guilherme-teixeira-ais"
        >
          <a
            class="LI-simple-link"
            href="https://br.linkedin.com/in/guilherme-teixeira-ais?trk=profile-badge"
            >Guilherme Teixeira Ais</a
          >
        </div>
      </div>

      <script
        type="text/javascript"
        src="https://platform.linkedin.com/badges/js/profile.js"
        async
        defer
      ></script>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-template {
  display: grid;
  grid-gap: 4rem;
}
</style>
