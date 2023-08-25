<template>
  <div class="container">
    <section id="intro" class="text-center p-3">
      <h1 class="display-1">Календарь</h1>
    </section>
    <section id="tools">
      <div class="d-flex flex-fill">
        <div
          class="btn-group flex-fill"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" class="btn btn-primary">
            <i class="bi bi-plus-circle"></i> &nbsp; Добавить событие
          </button>
          <button class="btn btn-primary">
            <i class="bi bi-arrow-repeat"></i>
          </button>
          <button type="button" class="btn btn-primary">
            <i class="bi bi-sliders"></i>
          </button>
        </div>
      </div>
    </section>
    <section id="feed" class="mt-3 pb-3">
        <h6 class="text-center my-3">24 августа, четверг</h6>
        <div class="card my-2">
            <div class="card-body">
                <h5 class="card-title">
                    Название события
                </h5>
                <h6 class="text-muted">24 августа, 14:00</h6>
                <p class="card-text">Описание события</p>
            </div>
        </div>
        <div class="card my-2">
            <div class="card-body">
                <h5 class="card-title">
                    Название события
                </h5>
                <h6 class="text-muted">24 августа, 15:00</h6>
                <p class="card-text">Описание события</p>
            </div>
        </div>
        <div class="card my-2">
            <div class="card-body">
                <h5 class="card-title">
                    Название события
                </h5>
                <h6 class="text-muted">24 августа, 18:00</h6>
                <p class="card-text">Описание события</p>
            </div>
        </div>
        <h6 class="text-center my-3">26 августа, четверг</h6>
        <div class="card my-2">
            <div class="card-body">
                <h5 class="card-title">
                    Название события
                </h5>
                <h6 class="text-muted">26 августа, 17:00</h6>
                <p class="card-text">Описание события</p>
            </div>
        </div>
        <div class="card my-2">
            <div class="card-body">
                <h5 class="card-title">
                    Название события
                </h5>
                <h6 class="text-muted">26 августа, 19:00</h6>
                <p class="card-text">Описание события</p>
            </div>
        </div>
        <div class="card my-2">
            <div class="card-body">
                <h5 class="card-title">
                    Название события
                </h5>
                <h6 class="text-muted">26 августа, 20:00</h6>
                <p class="card-text">Описание события</p>
            </div>
        </div>
    </section>
  </div>
</template>
