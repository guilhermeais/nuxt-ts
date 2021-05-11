<template>
  <div class="presentation">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti,
      eligendi, ea voluptates hic magnam commodi tempore nemo porro illo
      perferendis, est enim ullam quasi totam nulla eveniet officia quae numquam
      minus minima explicabo exercitationem? Eius nemo molestias officia eveniet
      ipsam eos rem quos architecto recusandae delectus tempore, totam expedita
      dolore dicta laudantium modi sapiente deleniti laborum saepe nam. Ratione,
      nihil minima enim quis recusandae iusto ipsa fuga fugiat nisi consectetur,
      culpa minus, itaque doloremque sequi? Maxime suscipit assumenda
      repellendus amet, blanditiis, iste ipsa, eligendi fugit a nemo laudantium!
      Magnam iste voluptate dolorum eos cum tempore quasi qui repellendus
      explicabo?
    </p>

    <img src="@/assets/img/presentation.svg" alt="Apresentação do iBook">
  </div>
</template>

<style lang="scss" scoped>
.presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-gap: 2rem;
  align-items: center;
  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }
  p {
    line-height: 26px;
  }
  img {
    max-width: 100%;
  }
}
</style>
