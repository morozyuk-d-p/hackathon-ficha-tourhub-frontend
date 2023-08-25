<template>
  <div class="container">
    <section id="intro" class="text-center p-3">
      <h1 class="display-1">TourHub</h1>
      <h2 class="display-6">Путешествуй уверенно!</h2>
    </section>
    <section id="categories" class="pb-3">
      <div class="card my-2" @click="$router.push('/map')">
        <div class="row">
          <div class="col-auto ps-4 pe-0 me-0">
            <i class="bi bi-map" style="font-size: 4rem"></i>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Карта</h5>
              <p class="card-text">Места рядом как на ладони</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card my-2" @click="$router.push('/guidebook')">
        <div class="row">
          <div class="col-auto ps-4 pe-0 me-0">
            <i class="bi bi-shop" style="font-size: 4rem"></i>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Путеводитель</h5>
              <p class="card-text">Ваш гид по городу</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card my-2" @click="$router.push('/calendar')">
        <div class="row">
          <div class="col-auto ps-4 pe-0 me-0">
            <i class="bi bi-calendar3" style="font-size: 4rem"></i>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Календарь</h5>
              <p class="card-text">Ваш план поездки всегда на виду</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
