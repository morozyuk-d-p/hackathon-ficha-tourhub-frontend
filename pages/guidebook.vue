<template>
  <div class="container">
    <section id="intro" class="text-center p-3">
      <h1 class="display-1">Путеводитель</h1>
      <h2 class="display-6">Ваш гид по городу</h2>
    </section>
    <section id="select-city" class="p-3">
      <div class="text-center">
        Вы находитесь в г. Таганрог
        <button class="btn btn-primary ms-2">Сменить</button>
      </div>
    </section>
    <section id="categories" class="pb-3">
      <div class="card my-2">
        <div class="row">
          <div class="col-auto ps-4 pe-0 me-0">
            <i class="bi bi-bookmark-heart" style="font-size: 4rem"></i>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Подборки</h5>
              <p class="card-text">Что советуют пользователи</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card my-2">
        <div class="row">
          <div class="col-auto ps-4 pe-0 me-0">
            <i class="bi bi-shop" style="font-size: 4rem"></i>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Магазины, аптеки</h5>
              <p class="card-text">Товары на все случаи жизни</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card my-2">
        <div class="row">
          <div class="col-auto ps-4 pe-0 me-0">
            <i class="bi bi-cup-hot" style="font-size: 4rem"></i>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Рестораны, кафе</h5>
              <p class="card-text">На любой вкус и кошелёк</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card my-2">
        <div class="row">
          <div class="col-auto ps-4 pe-0 me-0">
            <i class="bi bi-emoji-smile" style="font-size: 4rem"></i>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Развлечения</h5>
              <p class="card-text">Развлечения для всей семьи</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card my-2">
        <div class="row">
          <div class="col-auto ps-4 pe-0 me-0">
            <i class="bi bi-signpost-2" style="font-size: 4rem"></i>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Достопримечательности</h5>
              <p class="card-text">Места, которые стоит посетить</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card my-2">
        <div class="row">
          <div class="col-auto ps-4 pe-0 me-0">
            <i class="bi bi-house-door" style="font-size: 4rem"></i>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">Отели</h5>
              <p class="card-text">С любыми опциями для вас</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
